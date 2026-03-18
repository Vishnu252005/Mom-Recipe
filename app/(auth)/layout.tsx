
import { notFound } from "next/navigation"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center">
      <SiteHeader user={null} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
