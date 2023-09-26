import Link from "next/link"
import React from "react"
import { DELETE } from "scripts/fetch"
import { BookTypes } from "types/bookTypes"
import Button from "./Button"
import { useRouter } from "next/router"

type Props = {
  book: BookTypes
  isAdmin?: boolean
}

const Book = ({ book, isAdmin }: Props) => {
  // const router = useRouter()
  const onDelete = () => {
    DELETE(`v1/books/${book.id.toString()}`)
    // router.push("/v1/books/admin")
  }
  return (
    <Link
      href={{
        pathname: `/bookDetails_${book.id}`,
        query: book,
      }}
      className="w-72 h-[480px] bg-[#7e88c3] flex justify-center rounded-3xl my-5"
    >
      <figure className="w-56 h-[345px] absolute">
        <img
          src={book.imageLink}
          alt={book.title}
          className="rounded-3xl w-[224px] h-[345px] relative top-8 left-0"
        />
        <figcaption className="relative top-10 text-center  m-3">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </figcaption>
        {isAdmin && (
          <div>
            <Button variant="secondary">Update</Button>
            <Button variant="delete" onClick={onDelete}>
              Delete
            </Button>
          </div>
        )}
      </figure>
    </Link>
  )
}

export default Book
