// app/history/page.tsx (or pages/history.tsx if using Pages Router)

import { getServerSession } from "next-auth";
import { Appbar } from "../../components/Appbar";
import { Sidebar } from "../../components/Sidebar";
import { NEXT_AUTH } from "../../lib/auth";
import { redirect } from "next/navigation";
import prisma from "../../utils/prismaClient";
import { SubHeading } from "../../components/SubHeading";

async function getOnRampTransactions(userId: string) {
  return await prisma.onRampTransactions.findMany({
    where: { userId },
    select: {
      starttime: true,
      amount: true,
      status: true,
      provider: true,
    },
    orderBy: { starttime: "desc" },
  });
}

async function getP2PTransactions(userId: string) {
  try {
    return await prisma.p2PTransferHistory.findMany({
      where: {
        OR: [{ senderID: userId }, { receiverID: userId }],
      },
      orderBy: { timestamp: "desc" },
    });
  } catch (error) {
    console.error("Error fetching P2P transactions:", error);
    return [];
  }
}

export default async function History() {
  const session = await getServerSession(NEXT_AUTH);

  if (!session?.user?.id) {
    redirect("/signin");
  }

  const userId = session.user.id;
  const onRampTransactions = await getOnRampTransactions(userId);
  const p2pTransactions = await getP2PTransactions(userId);

  return (
    <div className="w-screen h-screen overflow-auto bg-neutral-50">
      <Appbar />
      <Sidebar />
      <div className="sm:ml-50 ml-[10%] p-5 sm:p-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6">
          Transaction History
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* OnRamp Transactions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <SubHeading title="Bank Deposits" className=""/>
              <p className="text-sm text-gray-500 mt-1">
                History of money added to your wallet
              </p>
            </div>

            {onRampTransactions.length > 0 ? (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {onRampTransactions.map((tx, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 rounded-lg p-4 transition-all hover:shadow-md"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${tx.status === "Success"
                              ? "bg-green-100"
                              : tx.status === "Failure"
                                ? "bg-red-100"
                                : "bg-gray-100"
                            }`}
                        >
                          <div
                            className={`h-3 w-3 rounded-full ${tx.status === "Success"
                                ? "bg-green-500"
                                : tx.status === "Failure"
                                  ? "bg-red-500"
                                  : "bg-gray-400"
                              }`}
                          ></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">
                            From {tx.provider}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(tx.starttime).toLocaleDateString()} •{" "}
                            {new Date(tx.starttime).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                      <div className={`text-right ${tx.status === "Success"
                                                ? "text-green-500"
                                                : tx.status === "Pending"
                                                    ? "text-gray-800"
                                                    : "text-red-500"
                                            } font-semibold text-sm`}>
                                + ₹{tx.amount / 100}
                            </div>
                        
                        <div className="text-xs text-gray-500 capitalize">
                          {tx.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyMessage
                icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                message="No bank deposits found"
                sub="Add money to your wallet to see transactions here"
              />
            )}
          </div>

          {/* P2P Transactions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <SubHeading title="P2P Transfers" className=""/>
              <p className="text-sm text-gray-500 mt-1">
                History of transfers between users
              </p>
            </div>

            {p2pTransactions.length > 0 ? (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {p2pTransactions.map((tx, index) => {
                  const isSender = tx.senderID === userId;
                  const otherName = isSender
                    ? tx.receiverName[0]?.toUpperCase() + tx.receiverName.slice(1, tx.receiverName.length)
                    : tx.senderName[0]?.toUpperCase() + tx.senderName.slice(1, tx.senderName.length);
                  return (
                    <div
                      key={index}
                      className="bg-neutral-50 rounded-lg p-4 transition-all hover:shadow-md"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full flex items-center justify-center mr-3 bg-blue-100">
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">
                              {isSender ? `To ${otherName}` : `From ${otherName}`}
                            </div>
                            <div className="text-xs text-gray-500">
                              {new Date(tx.timestamp).toLocaleDateString()} •{" "}
                              {new Date(tx.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`${isSender
                                ? "text-red-600"
                                : "text-green-600"
                              } font-semibold`}
                          >
                            {isSender ? "-" : "+"}₹{tx.amount / 100}
                          </div>
                          <div className="text-xs text-gray-500">
                            {isSender ? "Sent" : "Received"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <EmptyMessage
                icon="M17 20h5v-2a3 3 0 00-5.356-1.857..."
                message="No P2P transfers found"
                sub="Send money to other users to see transfers here"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Optional helper component
function EmptyMessage({ icon, message, sub }: { icon: string, message: string, sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
      </svg>
      <p className="text-center">{message}</p>
      <p className="text-sm text-center mt-1">{sub}</p>
    </div>
  );
}
