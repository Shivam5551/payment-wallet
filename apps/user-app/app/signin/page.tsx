"use client"
import { signIn } from 'next-auth/react';
import { CloseEyeIcon, EmailIcon, GitHubIcon, GoogleIcon, OpenEyeIcon } from '@repo/ui/Icons'
import { Button } from '@repo/ui/button';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function SignIn() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const errorParam = searchParams.get("error");
    const [errorMessage, setErrorMessage] = useState("");
    
    useEffect(() => {
        if(errorParam) {
            if(errorParam === "Callback") {
                console.log(errorParam);
                
                const message = "Login failed or was cancelled.";
                setErrorMessage(message);
                toast.error(message, {
                    position: "top-right",
                    autoClose: 4000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored"
                });
                router.push('/signin')
            }
        }
    }, [errorParam]);

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fromSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            const res = await signIn("credentials", {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
                redirect: false,
            });
            // console.log("Login response:", res);
            if (res?.ok && !res.error) {
                router.push('/');
            } else {
                toast.error("Invalid Credentials", {
                    position: "top-right",
                    autoClose: 4000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored"
                }
                )
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl text-center font-bold text-gray-800">Sign In</h1>

                <form className='space-y-3' action={fromSubmit}>
                    <input type='email' autoFocus required name='email' placeholder='Enter Your EmailID' className='w-full py-2 px-2 border rounded-md border-neutral-300 shadow-xs' />
                    <div className='flex relative items-center'>
                        <input required type={`${showPassword ? "text" : "password"}`} name='password' placeholder='Enter Your Password' className='w-full py-2 px-2 border rounded-md border-neutral-300 shadow-xs' />
                        <button className='absolute right-2 z-20' onClick={()=> setShowPassword(!showPassword)} type='button'>{showPassword ? <CloseEyeIcon/> : <OpenEyeIcon/>}</button>  
                    </div>
                    <button
                        type='submit'
                        className="bg-blue-500 text-white flex items-center p-3 rounded-lg w-full justify-center gap-3 hover:bg-blue-600 transition-all hover:cursor-pointer duration-500 hover:shadow-lg hover:rounded-3xl shadow-sm transform"
                    >
                        {isSubmitting ? <div className='h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin' /> : <><EmailIcon />Sign in with Email</>}
                    </button>
                </form>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className=" bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>


                <div className="space-y-4">
                    <Button
                        onClickHandler={async () => await signIn("google", { callbackUrl: "/"})}
                        className="bg-neutral-50 flex items-center p-3 rounded-lg w-full justify-center gap-3 hover:bg-neutral-300 transition-all duration-500 hover:shadow-lg hover:rounded-2xl hover:cursor-pointer shadow-sm transform"
                    >
                        <GoogleIcon />
                        Sign in with Google
                    </Button>

                    <Button
                        onClickHandler={async () => await signIn("github", { callbackUrl: "/"})}
                        className="bg-neutral-50 flex items-center p-3 rounded-lg w-full justify-center gap-3 hover:bg-neutral-300 transition-all duration-500 hover:shadow-lg hover:rounded-2xl hover:cursor-pointer shadow-sm transform"
                    >
                        <GitHubIcon />
                        Sign in with GitHub
                    </Button>


                </div>
            </div>

        </div>

    );
}