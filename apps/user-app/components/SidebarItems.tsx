export const SidebarItems = ({ toggleSidebar, href, title, icons}: { toggleSidebar: boolean, href: string; title: string; icons: React.ReactNode}) => {
    return (
            <a href={href} className="flex mt-10 p-2 rounded-2xl text-gray-500 hover:text-blue-500 w-full items-center">
                <div className="flex items-center w-full"> 
                    <span className="flex items-center gap-2 font-semibold text-2xl">
                        {icons}
                        <span className={`${toggleSidebar ? "block" : "hidden"} sm:block text-lg sm:text-2xl`}>
                            {title}
                        </span>
                    </span>
                </div>
            </a>
    )
}