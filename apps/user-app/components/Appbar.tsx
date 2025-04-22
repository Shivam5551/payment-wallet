import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";
import { AuthButton } from "./AuthButton";

export const Appbar = async () => {
    const session = await getServerSession(NEXT_AUTH);
    return (
        <div className="h-16 w-full flex">
            <div className="fixed bg-white/80 shadow-md border-b backdrop-blur-3xl flex items-center w-full justify-between px-4 sm:px-10 h-16">
                <span className="text-lg sm:text-2xl truncate line-clamp-1 font-semibold">
                    PAYMENT-WALLET
                </span>
                <AuthButton session={session} />
            </div>
        </div>
    )
}