import { PrismaClient } from '@repo/db/client';
import express from 'express';

const app = express();

const PORT = process.env.PORT || "4000";

app.use(express.json());

const prisma = new PrismaClient();

type PaymentINformation = {
    token: string;
    userId: string;
    amount: number;
}

app.post("/", async (req, res) => {
    const paymentInformation= {
        token: req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    }
    try{
        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: paymentInformation.userId,
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount
                    }
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