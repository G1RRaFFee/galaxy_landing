import { products } from "@/data/products"
import Image from "next/image"
import Link from "next/link"
import { Typography } from "@/components/typography"

export function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="rounded-lg border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md">
      <Image src={product.thumbnail} alt={product.name} width={450} height={240} className="h-40 w-full rounded-md border object-cover" />
      <Typography variant="h3" className="mt-3">{product.name}</Typography>
      <Typography className="mb-3">{product.shortDescription}</Typography>
      <Link href={`/catalog/${product.slug}`} className="font-semibold text-primary hover:text-primary/80">
        Подробнее о товаре
      </Link>
    </article>
  )
}
