
import { getServerSession } from "next-auth";
import { AuthButton } from "./AuthButton";

export const Appbar = async ()=> {
    const session = await getServerSession();
    return (
        <div className="h-16 w-full flex">
            <div className="fixed bg-white/80 border-b border-b-black backdrop-blur-sm flex items-center w-full justify-between px-10 h-16">
                <span className="text-2xl font-semibold">
                    PAYTM-WALLET
                </span>
                <AuthButton session={session}/>
            </div>
        </div>
    )
}