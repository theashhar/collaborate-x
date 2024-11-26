'use client'
import Image from "next/image"
import logo from '../../assets/collaborateXLogo.svg'
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface AuthLayoutProps {
    children :React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname()
  return (
    <main className="bg-neutral-100 min-h-screen" >
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center gap-2">
          <Image src={logo} width={200} height={100} alt='logo'/>
          <Button asChild variant='secondary' >
            <Link href={pathname !== '/sign-in' ? 'sign-in' : 'sign-up'} >
              {pathname === '/sign-in' ? 'Sign Up' : 'Login'}
            </Link>
          </Button>
        </nav>

      <div className="flex flex-col items-center justify-center pt-4 md:pt-14 ">
        {children}
      </div>
      </div>
    
    </main>
  )
}

export default AuthLayout
