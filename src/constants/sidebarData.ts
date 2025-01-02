import {
    AudioWaveform,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    House, Zap, Settings, Users, ListTodo
  } from "lucide-react"
  
  export const sidebarData = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      // {
      //   title: "My Tasks",
      //   url: "#",
      //   icon: ListTodo,
      //   items: [
      //     {
      //       title: "Genesis",
      //       url: "#",
      //     },
      //     {
      //       title: "Explorer",
      //       url: "#",
      //     },
      //     {
      //       title: "Quantum",
      //       url: "#",
      //     },
      //   ],
      // },
      {
        title: "dashboard",
        url: "/dashboard",
        icon: House,
        // isActive: true,
      },
      {
        title: "My Tasks",
        url: "/dashboard/mytasks",
        icon: ListTodo,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Members",
        url: "/dashboard/members",
        icon: Users,
      },
      {
        title: "Workflows",
        url: "/dashboard",
        icon: Zap,
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }