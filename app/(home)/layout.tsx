
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

interface HomeLayoutProps {
  children: React.ReactNode
}
// ...existing code...
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-2">
      <SiteHeader user={null} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
