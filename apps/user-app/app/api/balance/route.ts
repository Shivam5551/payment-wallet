import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "../../../lib/auth";

export async function POST(req: NextRequest) {
    try{
        const userID = await getServerSession(NEXT_AUTH);
        const balance = await prisma?.balance.findFirst({
            where: {
                userId: userID.user.id
            }
        });
        return NextResponse.json({
            balance,
            message: "Found",
            status: 200
        });
    }catch{
        return NextResponse.json({
            message: "Error Occured",
            status: 500
        })
    }
    
}