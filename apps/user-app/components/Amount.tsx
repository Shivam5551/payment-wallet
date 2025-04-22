'use client'
import { useState } from "react"
import { SubHeading } from "./SubHeading"
import { MiniHeading } from "./MiniHeading"
import { Button } from "@repo/ui/button"

export const Amount = () => {
    const [amount, setAmount] = useState('')
    const [bank, setBank] = useState('');

    function AddMoneyHandler() {
        console.log(`Amount: ${amount} | bank: ${bank}`);
    }


    return (
        <div className="bg-red-300 space-y-6 p-10 w-full h-full">
            <SubHeading title="Add Money" />
            <div>
                <MiniHeading name="amount" title="Amount" />
                <input
                    name="amount"
                    id="amount"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 mt-1 appearance-none focus:outline-none border rounded-md focus:ring-1 focus:ring-black [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    type="number"
                />
            </div>
            <div>
                <MiniHeading name="bank" title="Bank" />
                <select name="bank" value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    className="w-full p-2 mt-1 appearance-none focus:outline-none border rounded-md focus:ring-1 focus:ring-black"
                >
                    <option value="" disabled>
                        Select Your Bank
                    </option>
                    <option value="sbi" id="bankID1">
                        State Bank of India
                    </option>
                    <option value="hdfc" id="bankID2">
                        HDFC Bank
                    </option>
                    <option id="bankID3">
                        Central Bank of India
                    </option>
                    <option id="bankID4">
                        Kotak Mahindra Bank
                    </option>
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