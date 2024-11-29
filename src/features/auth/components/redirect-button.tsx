'use client';

import { useRouter } from "next/navigation";
import { useState } from "react"; // Import useState
import { getCurrent } from "../actions";

const RedirectButton = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false); // State for loading

    const handleRedirect = async () => {
        setIsLoading(true); // Start loading
        try {
            const user = await getCurrent();
            if (user) {
                router.push('/sign-in'); // Client-side navigation
            } else {
                router.push('/sign-up'); // Client-side navigation
            }
        } catch (error) {
            console.error("Error during redirection:", error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <button
            onClick={handleRedirect}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-600 bg-[linear-gradient(110deg,#17181a,45%,#2e3747,55%,#17181a)] bg-[length:200%_100%] px-16 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50 text-xl"
            disabled={isLoading} // Disable button when loading
        >
            {isLoading ? (
                <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                </svg>
            ) : (
                "Start For Free Today"
            )}
        </button>
    );
};

export default RedirectButton;
