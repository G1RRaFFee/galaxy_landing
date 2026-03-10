export type Product = {
  slug: string
  name: string
  image: string
  thumbnail: string
  shortDescription: string
  characteristics: string[]
  detailedDescription: string
  sections: Array<{ title: string; text: string }>
}

export const products: Product[] = [
  {
    slug: "galaktika-crm",
    name: "Галактика CRM Orbit",
    image: "/products/crm-full.svg",
    thumbnail: "/products/crm-thumb.svg",
    shortDescription: "CRM-система для управления продажами и коммуникациями с клиентами.",
    characteristics: [
      "Облачная и on-premise установка",
      "Воронки продаж и автоматизация задач",
      "Интеграция с телефонией и почтой",
      "Роли и права доступа"
    ],
    detailedDescription:
      "CRM Orbit помогает отделам продаж и сервиса вести клиентов в едином цифровом пространстве, контролировать сроки задач и повышать конверсию сделок.",
    sections: [
      {
        title: "Внешний вид",
        text: "Интерфейс построен на карточной структуре с быстрым доступом к сделкам, контактам и задачам."
      },
      {
        title: "Особенности",
        text: "Есть готовые шаблоны воронок и динамические отчеты по KPI менеджеров."
      }
    ]
  },
  {
    slug: "galaktika-erp",
    name: "Галактика ERP Core",
    image: "/products/erp-full.svg",
    thumbnail: "/products/erp-thumb.svg",
    shortDescription: "ERP-платформа для финансов, складов и производственных процессов.",
    characteristics: [
      "Модули финучета, закупок и логистики",
      "Сквозная аналитика по подразделениям",
      "Планирование загрузки производственных линий",
      "Интеграция с BI-системами"
    ],
    detailedDescription:
      "ERP Core автоматизирует внутренние процессы компании: от бюджетирования до управления остатками и поставками. Решение подходит для среднего и крупного бизнеса.",
    sections: [
      {
        title: "Внешний вид",
        text: "Дашборды с ключевыми метриками и табличные представления с фильтрами по подразделениям."
      },
      {
        title: "Особенности",
        text: "Гибкий конструктор бизнес-процессов и сценарии согласования документов."
      }
    ]
  }
]

export function getProductBySlug(slug: string) {
  return products.find((item) => item.slug === slug)
}
