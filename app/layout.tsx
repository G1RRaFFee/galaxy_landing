import type { Metadata } from "next"
import "./globals.css"
import "./external.css"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

export const metadata: Metadata = {
  title: "Галактика | Визитка фирмы",
  description: "Рекламный сайт компании Галактика: разработка программного обеспечения"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-3 py-4 md:px-4">
          <SiteHeader />
          <main className="site-glow rounded-xl border bg-white/95 p-4 md:p-6">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
