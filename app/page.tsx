import { Typography } from "@/components/typography"
import Link from "next/link"
import { products } from "@/data/products"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { GalaxyNote } from "@/components/web-components/galaxy-note"

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="hero-grid rounded-xl border bg-gradient-to-r from-orange-100 via-amber-50 to-sky-100 p-5 md:p-8">
        <Typography variant="h1">Галактика: разработка программного обеспечения</Typography>
        <Typography className="mt-3 max-w-3xl text-base">
          Мы создаем CRM, ERP и отраслевые платформы для автоматизации бизнеса. Сайт выполнен в формате
          визитки компании с каталогом услуг, контактами и гостевой страницей.
        </Typography>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="#about" className="rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-white hover:bg-secondary/90">
            О нас
          </Link>
          <Link href="/catalog" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Перейти в каталог
          </Link>
          <a href="mailto:hello@galaktika-soft.ru" className="rounded-md border px-4 py-2 text-sm font-semibold hover:bg-muted">
            Написать email
          </a>
        </div>
      </section>

      <hr />

      <section id="about" className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <Typography variant="h3">О нас</Typography>
            <Typography>Команда из 35 инженеров, аналитиков и UI/UX-специалистов. Работаем с 2016 года.</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Typography variant="h3">История фирмы</Typography>
            <Typography>Начинали как интегратор 1С, сейчас разрабатываем собственные облачные продукты.</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Typography variant="h3">Сотрудники</Typography>
            <Typography>Backend, Frontend, QA и DevOps отделы. Действуют программы стажировок для студентов.</Typography>
          </CardContent>
        </Card>
      </section>

      <section>
        <Typography variant="h2">Избранные продукты</Typography>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {products.slice(0, 2).map((product) => (
            <Link key={product.slug} href={`/catalog/${product.slug}`} className="rounded-lg border bg-white p-4 hover:bg-muted/40">
              <Image src={product.thumbnail} alt={product.name} width={560} height={280} className="h-40 w-full rounded-md object-cover" />
              <Typography variant="h3" className="mt-3">{product.name}</Typography>
              <Typography>{product.shortDescription}</Typography>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-4">
          <Typography variant="h2">Карта изображений</Typography>
          <Typography className="mb-3">Нажмите на зоны схемы, чтобы перейти в разделы сайта.</Typography>
          <img src="/images/office-map.svg" alt="Карта сайта" useMap="#office-map" className="w-full rounded-md border" />
          <map name="office-map">
            <area shape="rect" coords="0,0,200,200" href="/catalog" alt="Каталог" />
            <area shape="rect" coords="200,0,400,200" href="/contacts" alt="Контакты" />
            <area shape="rect" coords="0,200,400,400" href="/account" alt="Кабинет" />
          </map>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <Typography variant="h2">Фрейм с презентацией</Typography>
          <Typography className="mb-3">Элемент фрейма реализован через `iframe`.</Typography>
          <iframe
            title="Презентация компании"
            src="https://www.wikipedia.org"
            className="h-64 w-full rounded-md border"
          />
        </div>
      </section>

      <section className="rounded-lg border bg-card p-4">
        <Typography variant="h2">Web-компонент</Typography>
        <GalaxyNote />
      </section>

      <section className="grid gap-4 md:grid-cols-[180px_1fr_180px]">
        <aside className="rounded-lg border bg-orange-100 p-4">
          <Typography variant="h3">Разделы</Typography>
          <p className="mt-2"><Link href="/">Страница 1</Link></p>
          <p><Link href="/catalog">Страница 2</Link></p>
          <p><Link href="/contacts">Страница 3</Link></p>
          <p><Link href="/account">Страница 4</Link></p>
        </aside>
        <div className="rounded-lg border bg-card p-4">
          <Typography variant="h2">Дополнительные ссылки</Typography>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-primary">
                Внешняя ссылка (документация Next.js)
              </a>
            </li>
            <li>
              <a href="/brochure.txt" download className="text-primary">
                Ссылка на скачивание презентации
              </a>
            </li>
            <li>
              <Link href="#about" className="text-primary">Якорная ссылка к разделу «О нас»</Link>
            </li>
          </ul>
        </div>
        <aside className="rounded-lg border bg-orange-100 p-4">
          <Typography variant="h3">Баннеры</Typography>
          <p className="mt-2">Баннер 1</p>
          <p>Баннер 2</p>
          <p>Баннер 3</p>
        </aside>
      </section>
    </div>
  )
}
