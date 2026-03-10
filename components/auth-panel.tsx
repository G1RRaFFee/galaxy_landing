"use client"

import { useEffect, useState } from "react"
import { Typography } from "@/components/typography"

type User = {
  name: string
  email: string
  password: string
}

const USERS_KEY = "galaxy_users"
const SESSION_KEY = "galaxy_session"

export function AuthPanel() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [session, setSession] = useState<string | null>(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    setSession(localStorage.getItem(SESSION_KEY))
  }, [])

  const register = () => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]") as User[]
    if (users.some((item) => item.email === email)) {
      setMessage("Пользователь с таким email уже существует")
      return
    }
    users.push({ name: name || "Пользователь", email, password })
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    setMessage("Регистрация выполнена. Теперь можно войти.")
  }

  const login = () => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]") as User[]
    const user = users.find((item) => item.email === email && item.password === password)
    if (!user) {
      setMessage("Неверный email или пароль")
      return
    }
    localStorage.setItem(SESSION_KEY, user.name)
    setSession(user.name)
    setMessage(`Здравствуйте, ${user.name}!`)
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setSession(null)
    setMessage("Вы вышли из кабинета")
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border bg-card p-4">
        <Typography variant="h3">Регистрация</Typography>
        <div className="mt-3 grid gap-2">
          <input value={name} onChange={(e) => setName(e.target.value)} className="rounded border px-3 py-2" placeholder="Имя" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded border px-3 py-2" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="rounded border px-3 py-2" placeholder="Пароль" />
          <button onClick={register} className="rounded bg-primary px-3 py-2 font-semibold text-primary-foreground">Зарегистрироваться</button>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <Typography variant="h3">Авторизация / Личный кабинет</Typography>
        <div className="mt-3 grid gap-2">
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded border px-3 py-2" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="rounded border px-3 py-2" placeholder="Пароль" />
          <button onClick={login} className="rounded bg-secondary px-3 py-2 font-semibold text-secondary-foreground">Войти</button>
          <button onClick={logout} className="rounded border px-3 py-2 font-semibold">Выйти</button>
        </div>
        <Typography className="mt-3">Текущая сессия: {session ?? "не авторизован"}</Typography>
      </div>

      {message ? <Typography className="md:col-span-2">{message}</Typography> : null}
    </div>
  )
}
