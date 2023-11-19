import React from "react"
import Link from "next/link"
import Button from "components/Button"

type Props = {
  isAdmin?: boolean
  isButton?: boolean
}

const Header = ({ isAdmin, isButton = true }: Props) => {
  const href = isAdmin ? "/admin/new" : "/?modal=true"
  return (
    <>
      <header className="flex h-20 flex-row items-center justify-between bg-white px-10">
        <Link href="/">
          <h1>Book Collection</h1>
        </Link>
        {isButton && (
          <Button href={href}>{isAdmin ? "New book" : "Admin"}</Button>
        )}
      </header>
      <div className="h-px w-screen bg-gray-300"></div>
    </>
  )
}

export default Header
