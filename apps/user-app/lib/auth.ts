import CredentialsProvider from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google';
import { compare, compareSync } from 'bcrypt-ts';
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
                  // console.log(passwordMatch);
                  
                  if (!passwordMatch) {
                    console.log("Incorrect password");
                    return null;
                  }
              
                  // console.log("User authorized:", user.email);
                  // console.log({ id: user.id, email: user.email });
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
        session: async ({ session, token }: any) => {
            if (session?.user && session.user?.email) {
                const userID = await prisma.user.findFirst({
                  where: {
                    email: session.user.email
                  },
                  select: {
                    id: true
                  }
                })
                session.user.id = userID?.id;
            }
            // console.log(session);
            
            return session;
        },
        jwt: async ({ user, token }: any) => {
          
          if (user && user.id) {
              token.uid = user.id;
          }
          return token;
      },
        signIn: async ({ account, profile, user }) => {
          // console.log("Account Provider:", account.provider);
          // console.log("Profile:", profile);

          if(account.provider === "credentials") {
            const isExists = await findUser(user);
            return isExists ? true : false;
                  
          }

          async function findUser(u: any) {
            // console.log("Profile is", profile);
            // console.log("User is ", user);
            
            const isExists = await prisma.user.findFirst({
              where: {
                email: u.email,
              },
              select: {
                id: true,
                    email: true,
                    name: true,
                    password: true,
                }
            })
            return isExists;
          }
          if ((account.provider === "google" && profile.email_verified) || account.provider === "github" ) {
            console.log(`Provider: ${account.provider}`);
            
            const isExists = await findUser(profile);
            // console.log(isExists);
            
              if(!isExists) {
                // console.log("Inside Creating user");
                
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

