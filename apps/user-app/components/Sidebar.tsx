'use client'
import { HistoryIcons, HomeIcon, P2PIcon, TransferIcon } from "@repo/ui/Icons";
import { useRef, useState } from "react"
import { SidebarItems } from "./SidebarItems";

export const Sidebar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const handleSidebarToggle = () => {
        if(sidebarRef.current){
            if(!toggleSidebar) {
                sidebarRef.current.classList.remove('w-[10%]');
                sidebarRef.current.classList.add('w-50');
            } else {
                sidebarRef.current.classList.remove('w-50');
                sidebarRef.current.classList.add('w-[10%]', 'sm:w-16', 'transition-all');
            }
            setToggleSidebar(!toggleSidebar)
        }
    }
    return (
        <div ref={sidebarRef} className={"fixed w-[10%] border-r border-gray-400 transition-all ease-in-out min-h-screen duration-300 sm:w-50 place-items-center  sm:block bg-gray-50 h-screen z-40"}>
        <div className="flex sm:hidden justify-center items-center w-full">
            <button onClick={handleSidebarToggle} className={`${toggleSidebar ? "bg-red-500  text-xs absolute right-3 top-3 hover:bg-red-700 rounded-full" : "rounded-md bg-green-500 mt-2 hover:bg-green-600 text-lg"} text-white font-semibold items-center justify-center h-6 w-6 flex sm:hidden`}>{toggleSidebar ? "X" : "≡"}</button>
        </div>
        <span className={`${toggleSidebar ? "block" : "hidden"}  sm:block overflow-hidden text-left pl-2 pt-2.5 text-xl sm:text-2xl  font-semibold`}>Menu</span>
            <div className={`{w-full h-full overflow-hidden flex ${toggleSidebar ? "items-start pl-2": "items-center" } flex-col sm:block pt-4 sm:pl-2}`}>
                <SidebarItems toggleSidebar={toggleSidebar} href={"/"} title={"Home"} icons={<HomeIcon/>} />
                <SidebarItems toggleSidebar={toggleSidebar} href={"/transfer"} title={"Transfer"} icons={<TransferIcon/>} />
                <SidebarItems toggleSidebar={toggleSidebar} href={"/history"} title={"Transactions"} icons={<HistoryIcons/>} />
                <SidebarItems toggleSidebar={toggleSidebar} href={"/p2ptransfer"} title={"P2P Transfer"} icons={<P2PIcon/>} />
        
            </div>
        </div>
    )
}
