import Link from "next/link"
import { Typography } from "@/components/typography"

export default function NotFound() {
  return (
    <div className="space-y-4">
      <Typography variant="h1">Страница не найдена</Typography>
      <Link href="/" className="font-semibold text-primary hover:text-primary/80">
        Вернуться на главную
      </Link>
    </div>
  )
}