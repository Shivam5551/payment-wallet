import { getServerSession } from "next-auth";
import { Appbar } from "../components/Appbar";
import { Sidebar } from "../components/Sidebar";
import { redirect } from "next/navigation";
import { NEXT_AUTH } from "../lib/auth";
import { Balance } from "../components/Balance";
import { TransferIcon, P2PIcon, HistoryIcons } from "@repo/ui/Icons";
import Link from "next/link";
import prisma from "../utils/prismaClient";
import { Transactions } from "../utils/interfaces";

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
          },
          take: 3, // Limit to 3 transactions for the dashboard
      });
  }
  return transactions;
}

export default async function Home() {
  const session = await getServerSession(NEXT_AUTH);
  if (!session?.user) {
    redirect('/signin')
  }
  
  const transactions = await getTransactions();
  const name = session.user.name || session.user.email?.split('@')[0] || 'User';
  
  return (
    <div className="w-screen h-screen overflow-auto bg-neutral-50">
      <Appbar />
      <Sidebar />
      <div className="sm:ml-50 ml-[10%] p-5 sm:p-10">
        {/* Welcome Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Welcome back, <span className="text-indigo-500">{name[0].toUpperCase()+name.slice(1, name.length)}</span>
          </h1>
          <p className="text-gray-600 mt-2">Here's an overview of your wallet</p>
        </div>
        
        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Balance Card */}
          <div className="lg:col-span-1">
            <Balance />
          </div>
          
          {/* Right Column - Quick Actions & Transactions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ActionCard 
                  icon={<TransferIcon className="text-3xl text-indigo-500" />}
                  title="Transfer Money"
                  description="Send money to bank accounts"
                  link="/transfer"
                />
                <ActionCard 
                  icon={<P2PIcon className="text-3xl text-green-500" />}
                  title="P2P Transfer"
                  description="Send to other users"
                  link="/p2ptransfer"
                />
                <ActionCard 
                  icon={<HistoryIcons className="text-3xl text-blue-500" />}
                  title="Transaction History"
                  description="View all transactions"
                  link="/history"
                />
              </div>
            </div>
            
            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 pb-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Recent Transactions</h2>
              </div>
              <div className="px-4 pb-4">
                {transactions && transactions.length > 0 ? (
                  <div className="space-y-3">
                    {transactions.map((t, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-neutral-50/80 rounded-lg">
                        <div className="flex items-center gap-3">
                          
                            <div className={`h-3 w-3 rounded-full ${
                              t.status === "Success" ? "bg-green-500" : 
                              t.status === "Pending" ? "bg-gray-400" : "bg-red-500"
                            }`}>
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">From {t.provider}</div>
                            <div className="text-xs text-gray-500">
                              {new Date(t.starttime).toLocaleDateString()} • {new Date(t.starttime).toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`${t.status === "Success" ? "text-green-500" : 
                              t.status === "Pending" ? "text-gray-700" : "text-red-500"} font-semibold`}>+₹{t.amount / 100}</div>
                          <div className="text-xs text-gray-500 capitalize">{t.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No recent transactions found
                  </div>
                )}
                <Link href="/history" className="block mt-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-center py-2 rounded-lg font-medium transition-colors">
                  View All Transactions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Action Card Component
function ActionCard({ icon, title, description, link }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  link: string
}) {
  return (
    <Link href={link} className="bg-neutral-50 hover:bg-neutral-100 transition-all duration-300 p-4 rounded-xl flex flex-col items-center text-center gap-2 group">
      <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}