import { getServerSession } from "next-auth"
import { Amount } from "../../components/Amount"
import { NEXT_AUTH } from "../../lib/auth"
import { Sidebar } from "../../components/Sidebar";
import { Appbar } from "../../components/Appbar";

export default async function Transfer (){
    const session = await getServerSession(NEXT_AUTH);
    if(!session) {
        return (
            <div className="w-screen h-screen overflow-auto">
                  <Appbar />
                  <Sidebar />
                  <div className="sm:ml-44 ml-[10%] p-10 h-[92dvh] bg-neutral-100">
                    <h1 className="pt-10 ml-4 text-xl sm:text-3xl font-bold text-indigo-400">Please sign in to proceed</h1>
                </div>
                </div>
            
        )
    }
    return (
        <div className="w-screen h-screen overflow-auto">
            <Appbar/>
            <Sidebar/>
            <div className="p-10 sm:ml-44 ml-[10%] h-[92dvh] bg-neutral-100">
            <h1 className="pt-10 ml-4 text-xl sm:text-3xl font-bold text-indigo-400">Transfer</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Amount />
                <div className="bg-blue-300 w-full h-full"> hello</div>
            </div>
        </div>
        </div>
    )
}