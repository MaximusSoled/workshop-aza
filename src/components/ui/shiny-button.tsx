import type React from "react"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  type?: "button" | "submit" | "reset"
}

export function ShinyButton({ children, onClick, className = "", type = "button" }: ShinyButtonProps) {
  return (
    <button type={type} className={`shiny-cta ${className}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}
