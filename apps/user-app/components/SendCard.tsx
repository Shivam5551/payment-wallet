'use client';

import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const SendCard = () => {
    const [receiver, setReceiver] = useState('');
    const [sending, setSending] = useState(false);
    const [receiverId, setReceiverId] = useState('');

    const [formData, setFormData] = useState({
        phoneno: "",
        email: "",
        amount: 0
    })

    useEffect(() => {
        const sendMoney = async () => {
            // console.log("SendMoney block", formData);
            // console.log(receiver, sending);

            if (formData.amount && (formData.email || formData.phoneno) && receiver && sending) {
                await new Promise(resolve => setTimeout(resolve, 500));
                try {
                    const body = {
                        phoneno: formData.phoneno,
                        email: formData.email,
                        amount: formData.amount,
                        receiverId: receiverId,
                        receiverName: receiver
                    }
                    const res = await axios.post("/api/send",
                        body
                    )
                    if (res.data.success) {
                        toast(`Sent ₹${formData.amount/100} to ${receiver[0]?.toUpperCase()+receiver.slice(1,receiver.length)}`, {
                            theme: "colored",
                            type: "success",
                            draggable: true,
                            autoClose: 4000,
                            pauseOnHover: true
                        });
                    } else {
                        toast(res.data.message || "Payment Failed", {
                            theme: "colored",
                            type: "error",
                            autoClose: 3000,
                            pauseOnHover: true
                        })
                    }
                } catch (error) {
                    toast((error as AxiosError)?.response?.data?.message || "Payment Failed", {
                        theme: "colored",
                        type: "error",
                        autoClose: 3000,
                        pauseOnHover: true,
                    });
                    console.log(error);
                }
                finally {
                    setSending(false);
                    setReceiver('')
                }
            }
        }
        sendMoney();
    }, [sending, receiver, formData]);

    async function handleAction(formData: FormData) {
        const phoneno = formData.get('phoneno')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const amount = formData.get('amount')?.toString() || '';
      
        if (!sending && !receiver && amount && (phoneno || email)) {
          setSending(true);
          setFormData({ phoneno, email, amount: Number(amount)*100 });
          if(Number(amount) < 0) {
            toast("Amount should be greater than 0", {
                type: "info",
                theme: "colored",
                autoClose: 4000,
                draggable: true,
                pauseOnHover: true
            })
            setFormData({ 
                phoneno: "",
                email: "",
                amount: 0,
            })
            setSending(false)
            return;
          }
      
          try {
            const { data } = await axios.post('/api/receiver', { phoneno, email });
            setReceiver(data.receiver);
            setReceiverId(data.receiverId);
          } catch (err) {
            console.error('Error fetching receiver:', err);
            toast((err as AxiosError)?.response?.data?.message || 'Failed to fetch receiver details', {
              type: 'error',
              autoClose: 3000,
              pauseOnHover: true,
            });
            setSending(false);
          }
      
        } else if ((!amount || (!phoneno && !email)) && !sending) {
          toast('Email or Phone Number and Amount is required', {
            type: 'warning',
            autoClose: 3000,
            pauseOnHover: true,
          });
        } else {
          toast('Sending Please Wait...', {
            type: 'info',
            autoClose: 3000,
            draggable: true,
            delay: 100,
            pauseOnHover: true,
          });
        }
      }
      

    return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Transfer Money</h2>
            <form className="space-y-4" action={handleAction}>
                <div className="space-y-2">
                    <label htmlFor="phoneno" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        id="phoneno"
                        type="text"
                        name="phoneno"
                        placeholder="Enter User Phone Number"
                    />
                </div>

                <div className="relative my-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-gray-500 bg-white">OR</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter User Email"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Amount
                    </label>
                    <input
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                        id="amount"
                        type="float"
                        name="amount"
                        placeholder="Enter Amount"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 mt-6 justify-center flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    {sending ? <div className="border-b rounded-full border-b-white animate-spin h-6 w-6"></div> : "Transfer"}
                </button>
            </form>
            {receiver && (
                <div className="flex justify-center mt-4">
                    <div className="px-4 flex items-center justify-center py-2 whitespace-pre bg-blue-50 text-blue-800 rounded-md shadow-sm text-base font-semibold">
                        <div className="mr-2 h-5 w-5 rounded-full animate-pulse bg-black "/>Sending Money To <span className="font-bold">{receiver[0]?.toUpperCase()+receiver.slice(1,receiver.length)}</span>
                    </div>
                </div>
            )}
        </div>
    )
}