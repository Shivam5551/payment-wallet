import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../utils/prismaClient";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../../../lib/auth";

export async function POST(req: NextRequest) {
    const session = await getServerSession(NEXT_AUTH);
    if(!session && !session.user.id) {
        return NextResponse.json({
            success: false, message: "Unauthorized"
        }, { status: 401 });
    }
    const body = await req.json();
    const { phoneno, email, amount, receiverId, receiverName }  = body;
    console.log(phoneno, email, amount, receiverId, body);
    if((!phoneno && !email && !receiverId && !receiverName)) {
        return NextResponse.json(
            { success: false, message: "Either Phoneno. or Email ID is required"},
            { status: 400 }
        )
    }
    if(amount < 0) {
        return NextResponse.json(
            { success: false, message: "Amount Should Be Greater than 0"},
            { status: 400}
        )
    }
    try {
        const userId = session.user.id
        await prisma?.$transaction(async (txn) => {
            await txn.$executeRaw`Select * FROM "Balance" WHERE "userId" = ${userId} FOR UPDATE`;
            const sender = await txn.balance.findFirst({
                where: {
                    userId: userId
                },
                select: {
                    locked: true,
                    amount: true,
                    user: true
                }
            });
            if (!sender || sender.amount == null || sender.locked == null || amount > (sender.amount - sender.locked)) {
                throw new Error("Insufficient Balance");
                
            }
            await txn.balance.update({
                where: {
                    userId: userId
                },
                data: {
                    amount: {
                        decrement: amount
                    }
                }
            });
            await txn.balance.upsert({
                where: {
                    userId: receiverId
                },
                update: {
                    amount: {
                        increment: amount
                    }
                },
                create: {
                    amount: amount,
                    userId: receiverId,
                },
            });
            await txn.p2PTransferHistory.create({
                data: {
                    receiverName: receiverName,
                    senderName: sender.user.name || "Unknown",
                    amount: amount,
                    senderID: userId,
                    receiverID: receiverId,
                    timestamp: new Date()
                }
            });
        });
        return NextResponse.json({
            success: true, message: "Payment Successful"
        }, { status: 200 })    
  
    } catch (error) {
        // console.log(error);
        
        return NextResponse.json({
            success: false,
            message: "Insufficient Balance"
        }, { status: 400 });
    }
}