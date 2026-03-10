import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: keyof HTMLElementTagNameMap
  }

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-3xl font-extrabold tracking-tight md:text-4xl",
      h2: "scroll-m-20 text-2xl font-semibold tracking-tight md:text-3xl",
      h3: "scroll-m-20 text-xl font-semibold tracking-tight",
      lead: "text-lg text-muted-foreground",
      muted: "text-sm text-muted-foreground",
      default: "leading-7"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export function Typography({ className, variant, as, ...props }: TypographyProps) {
  const Component = as ?? (variant === "h1" ? "h1" : variant === "h2" ? "h2" : variant === "h3" ? "h3" : "p")
  return <Component className={cn(typographyVariants({ variant }), className)} {...props} />
}
