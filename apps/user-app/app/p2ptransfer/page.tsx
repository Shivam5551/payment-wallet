import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NEXT_AUTH } from "../../lib/auth";
import { Appbar } from "../../components/Appbar";
import { Sidebar } from "../../components/Sidebar";
import { SendCard } from "../../components/SendCard";

export default async function P2PTransfer() {
    const session = await getServerSession(NEXT_AUTH);
      if (!session?.user) {
        redirect('/signin')
      } else {
      return (
        <div className="w-screen h-screen overflow-auto">
          <Appbar />
          <Sidebar />
          <div className="sm:ml-50 ml-[10%]">
            <div className="flex w-full h-[90dvh] justify-center items-center">
                <SendCard />
            </div>
          </div>
        </div>
      )
    }
}