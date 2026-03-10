import Link from "next/link"

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/contacts", label: "Контакты" },
  { href: "/account", label: "Кабинет" }
]

export function SiteMenu() {
  return (
    <ul className="flex list-disc flex-wrap gap-x-7 gap-y-2 pl-5 text-sm font-semibold text-secondary md:text-base">
      {links.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:text-primary">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
