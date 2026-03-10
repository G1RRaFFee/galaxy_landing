import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProductBySlug, products } from "@/data/products"
import { Typography } from "@/components/typography"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <article className="space-y-5">
      <Typography variant="h1">{product.name}</Typography>

      <Typography variant="h2">Описание товара</Typography>
      <Link href={product.image} target="_blank" rel="noopener noreferrer" className="block w-fit">
        <Image src={product.image} alt={product.name} width={920} height={460} className="max-h-[420px] rounded-md border object-cover" />
      </Link>
      <Typography>{product.shortDescription}</Typography>

      <Typography variant="h2">Характеристики товара</Typography>
      <Table className="rounded-md border">
        <TableHeader>
          <TableRow>
            <TableHead>Параметр</TableHead>
            <TableHead>Значение</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {product.characteristics.map((item, index) => (
            <TableRow key={item}>
              <TableCell>Характеристика {index + 1}</TableCell>
              <TableCell>{item}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h2">Подробное описание товара</Typography>
      <Typography>{product.detailedDescription}</Typography>

      {product.sections.map((section) => (
        <section key={section.title} className="rounded-md border bg-card p-4">
          <Typography variant="h3">{section.title}</Typography>
          <Typography>{section.text}</Typography>
        </section>
      ))}

      <Typography variant="h3">Список функций</Typography>
      <ol className="list-decimal space-y-1 pl-6">
        {product.characteristics.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ol>

      <hr />
      <Typography variant="muted">Все права защищены</Typography>
    </article>
  )
}