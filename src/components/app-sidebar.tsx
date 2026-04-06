"use client"

import Link from "next/link"
import {
  Home,
  CreditCard,
  List,
  ArrowLeftRight,
  Users,
  BarChart3,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/**
 * DESIGNER NOTE: Wise-style app sidebar (left navigation)
 * — Flat list only: Home, Cards, Transactions, Payments, Recipients, Insights (no sub-navigation).
 * — Colours: --sidebar* in globals.css match --background / --foreground; border transparent
 * — pl-8 (32px) inset so the rail sits closer to the main column
 */
export function AppSidebar() {
  return (
    <Sidebar className="border-transparent pl-8">
      <SidebarContent className="justify-center overflow-y-auto">
        <SidebarGroup className="flex w-full flex-col items-center border-none p-3">
          <SidebarGroupContent className="mx-auto w-full max-w-[min(100%,15rem)]">
            <SidebarMenu className="gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive size="lg">
                  <Link href="/" className="flex w-full items-center gap-3">
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex w-full items-center gap-3">
                    <CreditCard />
                    <span>Cards</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex w-full items-center gap-3">
                    <List />
                    <span>Transactions</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex w-full items-center gap-3">
                    <ArrowLeftRight />
                    <span>Payments</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex w-full items-center gap-3">
                    <Users />
                    <span>Recipients</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/" className="flex w-full items-center gap-3">
                    <BarChart3 />
                    <span>Insights</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
