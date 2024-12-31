"use client"

import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
// import logo from'../assets/collaborateXLogo.svg'
import {
  SidebarShadCn,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebarShadCn"
import { sidebarData } from "@/constants/sidebarData"

export function AppSidebar({ ...props }: React.ComponentProps<typeof SidebarShadCn>) {
  return (
    <SidebarShadCn collapsible="icon" {...props} variant="inset" >
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        <NavProjects projects={sidebarData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </SidebarShadCn>
  )
}
