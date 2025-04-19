import CredentialsProvider from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google';
import { compare } from 'bcrypt-ts';
import prisma from '../utils/prismaClient';
import Github from 'next-auth/providers/github';

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type:"email", placeholder:"Enter your EmailID"},
                password: { label: "Password", type:"password", placeholder:"Enter your Password"}
            },async authorize(credentials) {
                // console.log("Authorize hit with credentials:", credentials);
                try {
                  if (!credentials?.email || !credentials?.password || typeof credentials.password !== 'string' || credentials.password.length === 0 ) {
                    console.log("Missing credentials");
                    return null;
                  }
              
                  const user = await prisma.user.findFirst({
                    where: { email: credentials.email },
                    select: { id: true, email: true, password: true, authtype: true},
                  });
              
                  if (!user || user.authtype !== "Email" || !user.password) {
                    return null;
                  }
              
                  const passwordMatch = await compare(credentials.password, user.password);
              
                  if (!passwordMatch) {
                    console.log("Incorrect password");
                    return null;
                  }
              
                  // console.log("User authorized:", user.email);
                  return { id: user.id, email: user.email };
                } catch (e) {
                  console.error("Error in authorize:", e);
                  return null;
                }
              }
              
                  }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
            profile: async (profile) =>{
              return {
                id: profile.id.toString(),
                name: profile.name || profile.login,
                gh_username: profile.login,
                email: profile.email,
              }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || 'secret',

    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user && user.id) {
                token.uid = user.id;
            }
            return token;
        },
        session: async ({ session, token }: any) => {
            if (session?.user && token?.uid) {
                session.user.id = token.uid;
            }
            return session;
        },
        signIn: async ({ account, profile }) => {
          // console.log("Account Provider:", account.provider);
          // console.log("Profile:", profile);

          if ((account.provider === "google" && profile.email_verified) || account.provider === "github" ) {
            const isExists = await prisma.user.findFirst({
              where: {
                email: profile.email,
              },
              select: {
                id: true,
                    email: true,
                    name: true,
                }
            })
              if(!isExists) {
                await prisma.user.create({
                  data: {
                    email: profile.email,
                    name: profile.name,
                    authtype: account.provider === "github" ? "Github" : "Google"
                  },
                  select: {
                    id: true,
                    email: true,
                    name: true,
                  }
                });
              }
              return true;
            }
          return false;
        }
    },    
    pages: {
        signIn: '/signin'
    }
}
