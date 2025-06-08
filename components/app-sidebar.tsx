"use client"

import {
  Users,
  MapPin,
  TestTube,
  Building2,
  BadgeIcon as Police,
  HeartPulse,
  MessageSquare,
  Info,
  Home,
  Settings,
  FileText,
  BarChart3,
  Shield,
  Ambulance,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

interface AppSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const navigationItems = [
  {
    title: "Dashboard",
    section: "dashboard",
    icon: Home,
    badge: null,
  },
  {
    title: "Family Members",
    section: "family",
    icon: Users,
    badge: "3",
  },
  {
    title: "GPS Location",
    section: "gps",
    icon: MapPin,
    badge: null,
  },
  {
    title: "GPS Test",
    section: "gpstest",
    icon: TestTube,
    badge: null,
  },
]

const emergencyItems = [
  {
    title: "Hospitals",
    section: "hospital",
    icon: Building2,
    badge: "12",
  },
  {
    title: "Police Stations",
    section: "police",
    icon: Police,
    badge: "8",
  },
  {
    title: "Emergency Contacts",
    section: "emergency",
    icon: HeartPulse,
    badge: null,
  },
]

const supportItems = [
  {
    title: "AI Chat & Feedback",
    section: "feedback",
    icon: MessageSquare,
    badge: "New",
  },
  {
    title: "Reports",
    section: "reports",
    icon: FileText,
    badge: null,
  },
  {
    title: "Analytics",
    section: "analytics",
    icon: BarChart3,
    badge: null,
  },
  {
    title: "About",
    section: "about",
    icon: Info,
    badge: null,
  },
]

export function AppSidebar({ activeSection, setActiveSection }: AppSidebarProps) {
  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white">CuraDrive</span>
            <span className="text-xs text-teal-100">Government Initiative</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-gray-50 to-gray-100">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-700 font-semibold">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.section)}
                    isActive={activeSection === item.section}
                    className="hover:bg-teal-50 hover:text-teal-700 cursor-pointer"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto bg-teal-100 text-teal-700">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-700 font-semibold">Emergency Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {emergencyItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.section)}
                    isActive={activeSection === item.section}
                    className="hover:bg-red-50 hover:text-red-700 cursor-pointer"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto bg-red-100 text-red-700">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-700 font-semibold">Support & Info</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.section)}
                    isActive={activeSection === item.section}
                    className="hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto bg-blue-100 text-blue-700">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border bg-gradient-to-r from-gray-100 to-gray-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setActiveSection("settings")}
              isActive={activeSection === "settings"}
              className="hover:bg-gray-200 cursor-pointer"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Ambulance className="h-3 w-3" />
            <span>Emergency: 112</span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
