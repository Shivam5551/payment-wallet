'use client'
import { useState } from "react"
import { SubHeading } from "./SubHeading"
import { MiniHeading } from "./MiniHeading"
import { Button } from "@repo/ui/button"
import TransactionsAction from "../actions/OnRampTransactions"
import { toast } from "react-toastify"

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
},{
    name: "State Bank of India",
    redirectUrl: "https://onlinesbi.sbi/"
}
];

export const Amount = () => {
    const [amount, setAmount] = useState('')
    const [redirectUrl, setRedirectUrl] = useState<string | undefined>('');
    

    async function AddMoneyHandler() {
        if(amount && redirectUrl) {
            const provider = SUPPORTED_BANKS.find(e => e.redirectUrl === redirectUrl)?.name || "";  
            const res = await TransactionsAction({
                provider: provider,
                amount: Number(amount)*100
            });
            if(res?.message && res.success) {
                console.log(res.message);
                toast(res.message, {
                    autoClose: 500
                });
            }
            else{
                toast("Error", {
                    theme: "colored",
                    type: "error",
                    autoClose: 300,
                    draggable: true
                })
            }
        }
    }


    return (
        <div className="bg-white border border-blue-100  rounded-xl shadow-lg space-y-6 p-10 w-full h-fit">
            <SubHeading title="Add Money" />
            <div>
                <MiniHeading name="amount" title="Amount" />
                <input
                    name="amount"
                    id="amount"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-white font-medium p-2 mt-1 appearance-none focus:outline-none border rounded-md focus:ring-1 focus:ring-black [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    type="number"
                />
            </div>
            <div>
                <MiniHeading name="bank" title="Bank" />
                <select name="bank" value={redirectUrl}
                    onChange={(e) => {
                        setRedirectUrl(e.target.value || undefined);   
                    }}
                    className="w-full bg-white font-medium p-2 mt-1 focus:outline-none border rounded-md focus:ring-1 focus:ring-black"
                >
                    <option value="" disabled>
                        Select Your Bank
                    </option>
                    {SUPPORTED_BANKS.map((e, index): any => {
                        return <option key={index} value={e.redirectUrl}>
                            {e.name}
                        </option>
                    })}
                </select>
            </div>
            <div className="flex justify-center items-center">
                <Button onClickHandler={AddMoneyHandler} className="w-fit px-6 font-semibold text-xl hover:text-indigo-50 cursor-pointer py-2 bg-black text-white transform duration-300 rounded-xl hover:bg-zinc-700">
                    Add Money
                </Button>
            </div>
        </div>
    )
}