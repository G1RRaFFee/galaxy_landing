import { Typography } from "@/components/typography"
import { AuthPanel } from "@/components/auth-panel"

export default function AccountPage() {
  return (
    <div className="space-y-5">
      <Typography variant="h1">Гостевая страница пользователей</Typography>
      <Typography>
        Здесь реализованы регистрация, авторизация и личный кабинет с хранением данных в localStorage.
      </Typography>
      <AuthPanel />
    </div>
  )
}