import { getServerSession } from "next-auth"
import { Amount } from "../../components/Amount"
import { NEXT_AUTH } from "../../lib/auth"
import { Sidebar } from "../../components/Sidebar";
import { Appbar } from "../../components/Appbar";
import { Balance } from "../../components/Balance";
import { RecentTransactions } from "../../components/RecentTransactions";
import prisma from "../../utils/prismaClient";
import { Transactions } from "../../utils/interfaces";


async function getTransactions() {
    const session = await getServerSession(NEXT_AUTH);
    let transactions: Transactions[] | null = null;
    if(session && session.user.email) {
        transactions = await prisma.onRampTransactions.findMany({
            where: {
                userId: session.user.id
            },
            select: {
                starttime: true,
                amount: true,
                status: true,
                provider: true
            },
            orderBy: {
                starttime: "desc",
            }
        });
    }
    return transactions;
}

export default async function Transfer (){
    const session = await getServerSession(NEXT_AUTH);
    const transactions = await getTransactions();

    if(!session) {
        return (
            <div className="w-screen h-screen overflow-auto bg-neutral-50">
                  <Appbar />
                  <Sidebar />
                  <div className="sm:ml-50 ml-[10%] p-10 h-[92dvh]">
                    <h1 className="pt-10 ml-4 text-xl sm:text-3xl font-bold text-indigo-400">Please Login to proceed</h1>
                </div>
                </div>
            
        )
    }
    return (
        <div className="w-screen h-screen overflow-auto">
            <Appbar/>
            <Sidebar/>
            <div className="p-5 sm:p-10 sm:ml-50 ml-[10%] overflow-auto">
            <h1 className="pb-4  ml-4 text-2xl sm:text-5xl font-extrabold text-indigo-400">Transfer</h1>
            <div className="grid gap-4 grid-cols-1 overflow-auto lg:grid-cols-2">
                <Amount />
                <div className="w-full h-full bg-white">
                    <Balance />
                    <RecentTransactions transactions={transactions}/>
                </div>
            </div>
        </div>
        </div>
    )
}