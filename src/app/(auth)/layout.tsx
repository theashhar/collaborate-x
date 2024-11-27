'use client'

import Navbar from "@/components/Navbar"

// import Image from "next/image"
// import logo from '../../assets/collaborateXLogo.svg'
// import { Button } from "@/components/ui/button"
// import { usePathname } from "next/navigation"
// import Link from "next/link"

interface AuthLayoutProps {
    children :React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  // const pathname = usePathname()
  return (
    <main className="bg-neutral-100 min-h-screen" >
      <div className="mx-auto max-w-screen-2xl p-4">
      <Navbar />

      <div className="flex flex-col items-center justify-center pt-4 md:pt-14 ">
        {children}
      </div>
      </div>
    
    </main>
  )
}

export default AuthLayout
