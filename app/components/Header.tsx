import React from "react"
import Button from "./Button"
import Link from "next/link"

type Props = {
  isAdmin?: boolean
  isButton?: boolean
}

const Header = ({ isAdmin, isButton = true }: Props) => {
  const href = isAdmin ? "/admin/new" : "/admin"
  return (
    <>
      <header className="flex flex-row justify-between mx-10 items-center h-20">
        <Link href="/">
          <h1>Book Collection</h1>
        </Link>
        {isButton && <Button href={href}>{isAdmin ? "New" : "Admin"}</Button>}
      </header>
      <div className="h-px w-screen bg-gray-300"></div>
    </>
  )
}

export default Header
