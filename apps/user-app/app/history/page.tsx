import { getServerSession } from "next-auth";
import { Appbar } from "../../components/Appbar";
import { Sidebar } from "../../components/Sidebar";
import { NEXT_AUTH } from "../../lib/auth";
import { redirect } from "next/navigation";
import prisma from "../../utils/prismaClient";
import { Transactions } from "../../utils/interfaces";
import { SubHeading } from "../../components/SubHeading";

async function getOnRampTransactions() {
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

// This would be implemented when P2P transfers are available in your database
// For now it returns mock data to demonstrate UI
async function getP2PTransactions() {
  const session = await getServerSession(NEXT_AUTH);
  
  // Return empty array if not logged in
  if(!session || !session.user.email) {
    return [];
  }
  
  // Try to fetch P2P transactions if they exist in your database
  // This is a placeholder - modify based on your actual database schema
  try {
    /* Uncomment and modify when P2P transfers are implemented
    const p2pTransactions = await prisma.p2pTransactions.findMany({
      where: {
        OR: [
          { senderId: session.user.id },
          { receiverId: session.user.id }
        ]
      },
      orderBy: {
        timestamp: "desc",
      }
    });
    return p2pTransactions;
    */
    
    // Return empty array for now
    return [];
  } catch (error) {
    console.error("Error fetching P2P transactions:", error);
    return [];
  }
}

export default async function History() {
  const session = await getServerSession(NEXT_AUTH);
  if (!session?.user) {
    redirect('/signin');
  }
  
  const onRampTransactions = await getOnRampTransactions();
  const p2pTransactions = await getP2PTransactions();
  
  return (
    <div className="w-screen h-screen overflow-auto bg-neutral-50">
      <Appbar />
      <Sidebar />
      <div className="sm:ml-50 ml-[10%] p-5 sm:p-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6">
          Transaction History
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* OnRamp Transactions Column */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <SubHeading title="Bank Deposits" />
              <p className="text-sm text-gray-500 mt-1">History of money added to your wallet</p>
            </div>
            
            {onRampTransactions && onRampTransactions.length > 0 ? (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {onRampTransactions.map((transaction, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-4 transition-all hover:shadow-md">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                          transaction.status === "Success" ? "bg-green-100" : 
                          transaction.status === "Failed" ? "bg-red-100" : "bg-gray-100"
                        }`}>
                          <div className={`h-3 w-3 rounded-full ${
                            transaction.status === "Success" ? "bg-green-500" : 
                            transaction.status === "Failure" ? "bg-red-500" : "bg-gray-400"
                          }`}></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">From {transaction.provider}</div>
                          <div className="text-xs text-gray-500">
                            {new Date(transaction.starttime).toLocaleDateString()} • {new Date(transaction.starttime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-semibold">+₹{transaction.amount / 100}</div>
                        <div className="text-xs text-gray-500 capitalize">{transaction.status}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-center">No bank deposits found</p>
                <p className="text-sm text-center mt-1">Add money to your wallet to see transactions here</p>
              </div>
            )}
          </div>
          
          {/* P2P Transactions Column */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <SubHeading title="P2P Transfers" />
              <p className="text-sm text-gray-500 mt-1">History of transfers between users</p>
            </div>
            
            {p2pTransactions && p2pTransactions.length > 0 ? (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {/* Map through p2pTransactions when implemented */}
                <p>P2P transaction history will appear here</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-center">No P2P transfers found</p>
                <p className="text-sm text-center mt-1">Send money to other users to see transfers here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}