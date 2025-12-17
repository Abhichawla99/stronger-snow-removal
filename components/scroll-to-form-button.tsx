"use client"

interface ScrollToFormButtonProps {
  children: React.ReactNode
  className?: string
}

export function ScrollToFormButton({ children, className }: ScrollToFormButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const form = document.querySelector("form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a
      href="#form"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}

