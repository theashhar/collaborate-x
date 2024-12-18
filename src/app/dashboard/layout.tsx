import NavbarDashboard from "@/components/NavbarDashboard"
import SidebarDashboard from "@/components/SidebarDashboard"
// import { Sidebar } from "lucide-react"

interface SignInLayoutProps {
    children :React.ReactNode
}

const SignInLayout = ({ children }: SignInLayoutProps) => {
  return (
    <div>
      <div className="flex w-full px-4 py-2 ">
        <NavbarDashboard />
      </div>
        
      {children}
      {/* <Sidebar /> */}
      <SidebarDashboard />
    </div>
  )
}

export default SignInLayout
