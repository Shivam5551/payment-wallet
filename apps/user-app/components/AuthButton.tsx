'use client';

import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export const AuthButton = ({ session })=> {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => AuthCheck())
    function AuthCheck() {
        return !!(session && session?.user?.email);
    }
    useEffect(()=> {
        setIsAuthenticated(AuthCheck()); 
    }, [session]);

    function AuthHandler() {
        return isAuthenticated ? signOut() : signIn();
    }

    return (
        <button onClick={AuthHandler} className="bg-black text-white items-center font-semibold flex hover:cursor-pointer transform justify-center py-2 px-4 transition-colors duration-400 rounded-xl hover:rounded-3xl hover:bg-neutral-800">
                    {isAuthenticated ? "Logout" : "Login"}
        </button>
    )

}
