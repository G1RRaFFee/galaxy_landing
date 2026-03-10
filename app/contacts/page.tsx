import { Typography } from "@/components/typography"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactsPage() {
  return (
    <div className="space-y-5">
      <hr />
      <Typography variant="h1">Напишите нам</Typography>

      <form className="grid gap-3 rounded-lg border bg-card p-4" action="#">
        <Input placeholder="Имя" name="name" required />
        <Input placeholder="Email" name="email" type="email" required />
        <Input placeholder="Тема" name="subject" required />
        <Input placeholder="Компания" name="company" />
        <Input placeholder="Телефон" name="phone" type="tel" />
        <Textarea placeholder="Текст сообщения" name="message" required />
        <Button type="submit">Отправить</Button>
      </form>

      <section className="rounded-lg border bg-card p-4">
        <Typography variant="h2">Адрес</Typography>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Контактный телефон:{" "}
            <Link href="tel:+74950000000" className="font-semibold text-primary">
              +7 (495) 000-00-00
            </Link>
          </li>
          <li>Адрес: Москва, ул. Программная, д. 42</li>
          <li>
            Email:{" "}
            <Link href="mailto:hello@galaktika-soft.ru" className="font-semibold text-primary">
              hello@galaktika-soft.ru
            </Link>
          </li>
        </ul>
      </section>

      <section className="rounded-lg border bg-card p-4">
        <Typography variant="h2">Карта</Typography>
        <iframe
          title="Карта офиса"
          src="https://www.google.com/maps?q=55.751244,37.618423&z=14&output=embed"
          className="mt-3 h-80 w-full rounded-md border"
        />
      </section>
    </div>
  )
}