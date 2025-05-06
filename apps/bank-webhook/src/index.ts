import { PrismaClient } from '@repo/db/client';
import express, { Request, Response } from 'express';

const app = express();

const PORT = process.env.PORT || "4000";

app.use(express.json());

const prisma = new PrismaClient();

type PaymentInformation = {
    token: string;
    userId: string;
    amount: number;
}

app.post("/", async (req: Request, res: Response) => {
    const paymentInformation: PaymentInformation = {
        token: req.body.token,
        userId: req.body.userID,
        amount: req.body.amount
    }
    console.log(paymentInformation);
    
    if (!req.body.token || !req.body.userID || typeof req.body.amount !== 'number' || req.body.amount < 1 ) {
        res.status(400).json({ message: "Invalid request payload" });
    }
    try{
        const onRampTxnStatus = await prisma.onRampTransactions.findFirst({
            where: {
                token: paymentInformation.token
            },
            select: {
                status: true
            }
        });
        if(onRampTxnStatus?.status !== "Pending") {
            res.status(201).json({
                message: "Not captured"
            })
        }
        else {
            await prisma.$transaction([
                prisma.balance.upsert({
                    where: {
                        userId: paymentInformation.userId,
                    },
                    update: {
                        amount: {
                            increment: paymentInformation.amount
                        }
                    },
                    create: {
                        userId: paymentInformation.userId,
                        locked: 10,
                        amount: paymentInformation.amount
                    }
                }),
                prisma.onRampTransactions.update({
                    where: {
                        token: paymentInformation.token,
                    },
                    data: {
                        amount: paymentInformation.amount,
                        userId: paymentInformation.userId,
                        status: "Success"
                    }
                })
            ]);
            res.status(200).json({
                message: "Transaction Successful"
            })
        }
    }
    catch(e) {
        console.log(e);
        res.status(411).json({
            message: "Transaction Failed"
        });
    }

});


app.listen(PORT, () => {
    console.log(`Server is Listening at PORT ${PORT}`);
    
})