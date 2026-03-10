import { Typography } from "@/components/typography"
import { CatalogFilter } from "@/components/catalog-filter"
import { Separator } from "@/components/ui/separator"

export default function CatalogPage() {
  return (
    <div className="space-y-5">
      <Separator />
      <Typography variant="h1">Каталог</Typography>
      <Typography>Уменьшенные копии изображений и ссылки на подробные страницы товаров.</Typography>
      <CatalogFilter />
    </div>
  )
}
