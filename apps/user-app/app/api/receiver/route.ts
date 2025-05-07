import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "../../../lib/auth";

export async function POST(req: NextRequest) {
    const session = await getServerSession(NEXT_AUTH);
    if (!session || !session.user.id) {
        return NextResponse.json(
            {   success: false, message: "Unauthorized" },
            { status: 401 }
        );
    }
    const body = await req.json();
    const { phoneno, email } = body;
    console.log(phoneno, email, body);
    
    if (!phoneno && !email) {
        return NextResponse.json(
            { success: false, message: "Either phoneno or email is required" },
            { status: 400 }
        );
    }
    const whereCondition = phoneno ? { phoneno: phoneno } : { email: email }
    try {
        const validUser = await prisma?.user.findFirst({
            where: {
                id: session.user.id,
                email: session.user.email,
            },
            select: {
                id: true,
                email: true
            }
        });
        if(!validUser || validUser.email !== session.user.email || session.user.id !== validUser.id) {
            return NextResponse.json(
                {   success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }
        const user = await prisma?.user.findFirst({
            where: whereCondition,
            select: {
                phoneno: true,
                email: true,
                name: true,
                id: true
            }
        });
        if (!user) {
            console.log("User not found");
            return NextResponse.json({
                message: "User not found",
                success: false
            }, { status: 404})
        }
        if (
            (phoneno && user?.phoneno !== phoneno) ||
            (email && user?.email !== email)
        ) {
            return NextResponse.json(
                { success: false, message: "Contact info mismatch!" },
                { status: 400 }
            );
        }
        if(user.id === session.user.id) {
            return NextResponse.json(
                { success: false, message: "Cannot Send money to yourself!" },
                { status: 400 }
            )
        }
        else {
            return NextResponse.json(
                { success: true, receiver: user.name, receiverId: user.id},
                { status: 200 }
            );
        }

    }
    catch (e) {
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}