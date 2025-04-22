import { Appbar } from "../components/Appbar";
import { Sidebar } from "../components/Sidebar";

export default async function Home() {
  return (
    <div className="w-screen h-screen overflow-auto">
      <Appbar />
      <Sidebar />
      <div className="sm:ml-44 ml-[10%]">
             Hello     
      </div>
    </div>
  )
}