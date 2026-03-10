import type React from "react"

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "galaxy-note": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

