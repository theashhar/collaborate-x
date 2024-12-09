'use client';

import {
    //  usePathname,
     useRouter } from "next/navigation";
// import { useState } from "react"; // Import useState
// import { getCurrent } from "../actions";
import { useCurrent } from "../api/use-current";

const RedirectButton = () => {
    const router = useRouter();
    // const [isLoading, setIsLoading] = useState(false); // State for loading

    // const pathname = usePathname();
    const { data: user, isLoading } = useCurrent();

    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-10 w-10">
            <div className="animate-spin h-5 w-5 border-4 border-gray-300 border-t-transparent rounded-full"></div>
          </div>
        );
      }

    const handleRedirect = async () => {
            if (user) {
                router.push('/dashboard'); // Client-side navigation
            } else {
                router.push('/sign-in'); // Client-side navigation
            }
        }

    return (
        <button
            onClick={handleRedirect}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-600 bg-[linear-gradient(110deg,#17181a,45%,#2e3747,55%,#17181a)] bg-[length:200%_100%] px-16 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50 text-xl"
            disabled={isLoading} // Disable button when loading
        >
            Start For Free Today   
        </button>
    );
};

export default RedirectButton;
