import Image from "next/image"
import logo from '../../assets/collaborateXLogo.svg'
import { Button } from "@/components/ui/button"

interface AuthLayoutProps {
    children :React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen" >
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center gap-2">
          <Image src={logo} width={200} height={100} alt='logo'/>
          <Button variant='secondary' >Sign Up</Button>
        </nav>

      <div className="flex flex-col items-center justify-center pt-4 md:pt-14 ">
        {children}
      </div>
      </div>
    
    </main>
  )
}

export default AuthLayout
