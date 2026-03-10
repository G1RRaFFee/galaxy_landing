import { Typography } from "@/components/typography"
import { SiteMenu } from "./site-menu"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="site-glow mb-4 rounded-xl border bg-gradient-to-r from-secondary via-slate-700 to-slate-600 px-4 py-4 text-white md:px-6">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Typography variant="h1" className="text-2xl font-bold text-white md:text-3xl">
            Галактика Софт
          </Typography>
          <Typography className="text-sm text-white/90 md:text-base">
            Добро пожаловать на сайт-визитку компании по разработке программного обеспечения
          </Typography>
        </div>
        <form className="grid gap-2 rounded-lg bg-white/10 p-3 md:w-64" action="#">
          <input className="rounded border border-white/30 bg-white/90 px-3 py-1.5 text-sm text-black" placeholder="Логин" />
          <input type="password" className="rounded border border-white/30 bg-white/90 px-3 py-1.5 text-sm text-black" placeholder="Пароль" />
          <div className="flex justify-end gap-2 text-sm">
            <button type="button" className="rounded bg-primary px-3 py-1 text-primary-foreground">Войти</button>
            <Link href="/account" className="rounded border border-white/50 px-3 py-1">Регистрация</Link>
          </div>
        </form>
      </div>
      <hr className="my-4 border-white/30" />
      <SiteMenu />
    </header>
  )
}
