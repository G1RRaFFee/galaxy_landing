"use client"

import { useEffect } from "react"

export function GalaxyNote() {
  useEffect(() => {
    if (customElements.get("galaxy-note")) return

    class GalaxyNoteElement extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <div style="padding:12px;border:1px solid #c5ccd6;border-radius:10px;background:#fff7eb;">
            <strong>Galaxy Widget:</strong> этот блок создан как пользовательский Web-компонент.
          </div>
        `
      }
    }

    customElements.define("galaxy-note", GalaxyNoteElement)
  }, [])

  return (
      <galaxy-note />
  )
}
