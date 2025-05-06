'use client'
import { SubHeading } from "./SubHeading";
import { useEffect, useState } from "react";
import axios from "axios";

export const Balance = ()=> {
    const [balance, setBalance] = useState("");
    useEffect(()=> {
        const fetchBalance = async () => {
            const res = await axios.post("http://localhost:3000/api/balance");
            setBalance(res.data.balance);
        }
        fetchBalance();
    }, [])
    
    return(
        <div className="space-y-6 p-7 m:p-10 bg-white rounded-xl shadow-lg border border-indigo-100">
            <div className="border-b-2 border-indigo-300 pb-2">
                <SubHeading title="Balance" className="text-indigo-700" />
            </div>
            <div className="space-y-3">
                <TableItems title="Unlocked Balance" value={`${balance.amount ? (balance.amount - balance.locked) + " INR" : "Fetching"}`} valueColor="text-emerald-600" />   
                <TableItems title="Total Locked Balance" value={`${balance.locked ? balance.locked + " INR": "Fetching"}`} valueColor="text-amber-600" />
                <TableItems title="Total Balance" value={`${balance.amount ? balance.amount + " INR" : "Fetching"}`} valueColor="text-blue-700" />
            </div>
        </div>
    )
}

const TableItems = ({ 
    title, 
    value,
    valueColor = "text-green-700",
    highlight = false
}: { 
    title: string, 
    value: string,
    valueColor?: string,
    highlight?: boolean
}) => {
    return (
        <div className={`flex pt-3 pb-2 w-full text-base sm:text-lg justify-between items-center font-medium border-b border-indigo-200 ${highlight ? 'bg-indigo-50/70 p-2 rounded-lg' : ''}`}>
            <div className="text-gray-700 font-semibold">
                {title}
            </div>
            <div className={`font-bold ${valueColor}`}>
                {value}
            </div>
        </div>
    )
}