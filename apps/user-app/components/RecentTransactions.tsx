'use client';
import { SubHeading } from "./SubHeading";
import { Transactions } from "../utils/interfaces";

export const RecentTransactions = ({ transactions }: { transactions: Transactions[] | null }) => {
    const recentTransactions = transactions;

    return (
        <div className="mt-4 sm:mt-7 p-10 bg-white border border-blue-100 rounded-xl shadow-lg">
            <SubHeading title="Recent Transcations" />
            {(recentTransactions && recentTransactions.length === 0) ?
                <div className="h-20 w-full text-base sm:text-lg font-semibold flex justify-center items-center">
                    No Recent Tranactions Found!
                </div>
                :
                <div className="space-y-2 mt-2 overflow-auto h-50">
                    {recentTransactions?.map((t: Transactions, index: number) => (
                        <div key={index} className="flex justify-between items-center border border-red-100 mt-0.5 p-4 bg-white shadow-sm rounded-lg">
                            <div className="space-y-1">
                                <div className="text-sm font-medium text-gray-800">Received INR</div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div
                                        className={`h-3 w-3 rounded-full ${t.status === "Success"
                                                ? "bg-green-500"
                                                : t.status === "Pending"
                                                    ? "bg-gray-400"
                                                    : "bg-red-500"
                                            }`}
                                    ></div>
                                    <span className="capitalize">{t.status}</span>
                                </div>
                                <div className="text-xs text-gray-500">
                                    {new Date(t.starttime).toDateString()}
                                </div>
                            </div>
                            <div className={`text-right ${t.status === "Success"
                                                ? "text-green-500"
                                                : t.status === "Pending"
                                                    ? "text-gray-800"
                                                    : "text-red-500"
                                            } font-semibold text-sm`}>
                                + ₹{t.amount / 100}
                            </div>
                        </div>
                    ))}
                   
                </div>
        
            }
            {(recentTransactions && recentTransactions?.length > 0) ? <div className="flex bg-blue-600 rounded-lg hover:cursor-pointer hover:bg-blue-700 text-white p-2 font-semibold mt-2 items-center justify-center">Load More</div> : ""}
        </div>
    )
}