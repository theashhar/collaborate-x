"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
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
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebarShadCn";
import { sidebarData } from "@/constants/sidebarData";
import AvatarOrLogin from "@/components/avatar-or-login";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const pathname = usePathname();
  const currentPage = sidebarData.navMain.find((data) => data.url === pathname);

  return (
    <>
      <div className="flex w-full justify-end px-4 py-2 ">
        <AvatarOrLogin />
      </div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <SidebarTrigger className="-ml-1" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ctrl+k</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    {currentPage && (
                      <BreadcrumbPage>{currentPage.title}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
