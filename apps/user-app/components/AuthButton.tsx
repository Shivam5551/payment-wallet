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
        <button onClick={AuthHandler} className="bg-black text-white items-center flex hover:text-black transform justify-center px-2 py-1 transition-colors duration-200 rounded-md hover:bg-gray-400">
                    {isAuthenticated ? "Logout" : "Login"}
        </button>
    )

}
