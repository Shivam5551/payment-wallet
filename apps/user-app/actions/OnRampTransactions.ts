'use server';

import { randomUUID } from "crypto";
import { NEXT_AUTH } from "../lib/auth";
import prisma from "../utils/prismaClient";
import { getServerSession } from "next-auth";


export default async function TransactionsAction({ provider, amount }: { provider: string; amount: number}) {
    const session = await getServerSession(NEXT_AUTH);
    if(!session && !session.user?.id) {
        return {
            success: false,
            message: "Unauthorized request"
        }
    }
    
    const token = randomUUID();

    await prisma.onRampTransactions.create({
        data: {
            provider: provider,
            amount: amount,
            status: "Pending",
            starttime: new Date(),
            token: token,
            userId: session.user.id
        }
    });
    // console.log(session.user.id);
    
    await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            token: token,
            userID: session.user.id,
            amount: amount
        })
    });
    return { 
        success: true,
        message: "Done"
    }

    
}

