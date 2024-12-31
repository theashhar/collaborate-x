import { AppSidebar } from "@/components/app-sidebar"
import NavbarDashboard from "@/components/NavbarDashboard"
// import SidebarDemo from "@/components/SidebarDashboardAceternity"
// import SidebarDashboard from "@/components/SidebarDashboard"
// import SidebarDashboardAceternity from "@/components/SidebarDashboardAceternity"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebarShadCn"

interface DashboardLayoutProps {
  children :React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {  return (<>
  <div className="flex w-full px-4 py-2 ">
  <NavbarDashboard />
</div>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
          <div >
            <SidebarDemo />
          </div>
        </div> */}
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
    </>)
}
export default DashboardLayout
