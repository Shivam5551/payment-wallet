import { compare } from "bcrypt-ts";
import prisma from "../utils/prismaClient";

interface SigninResponse {
    success: boolean;
    message: string;
    userID?: string;
    userEmail?: string;
}

export const SigninAction = async ({ email, password }: { email: string, password: string }): Promise<SigninResponse> => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email
            },
            select: {
                id: true,
                email: true,
                password: true
            }
        })
        if(!user) {
            return {
                success: false,
                message: "User Doesn't Exists"
            }
        }
        const isPasswordValid = await compare(password, user.password);
        if(!isPasswordValid) {
            return {
                success: false,
                message: "Invalid Credentials"
            }
        }
        else {
            return {
                success: true,
                message: "User Exists",
                userID: user?.id,
                userEmail: user?.email
            }
        }
    }catch (e) {
        console.log(e)
        return {
            success: false,
            message: "An unexpected error Occurred"
        }
    }
}

