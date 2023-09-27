import Link from "next/link"
import { ReactNode } from "react"

type Props = {
  variant?: "primary" | "secondary" | "delete"
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  href?: string
  submit?: boolean
}

const backgroundvariant = {
  primary: "bg-purple hover:bg-purple-hover",
  secondary: "bg-grey hover:bg-light-grey",
  delete: "bg-red hover:bg-red-hover",
}

const textvariant = {
  primary: "text-white",
  secondary: "text-light-blue",
  delete: "text-white",
}

const Button = ({
  variant = "primary",
  onClick,
  href,
  children,
  submit,
}: Props) => {
  const border = "rounded-full"
  const dimensions = "h-12 px-6"
  const text = "font-bold text-xs tracking-[1px]"
  const flex = "flex items-center"

  const baseClasses = [
    backgroundvariant[variant],
    textvariant[variant],
    border,
    dimensions,
    text,
  ]

  const hrefClasses = baseClasses.concat(flex)

  if (href) {
    return (
      <Link href={href} className={hrefClasses.join(" ")}>
        {children}
      </Link>
    )
  } else {
    return (
      <button
        type={submit ? "submit" : "button"}
        className={baseClasses.join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}

export default Button
