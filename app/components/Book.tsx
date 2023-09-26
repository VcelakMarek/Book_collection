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

  if (isAdmin) {
    return (
      <Link
        href={{
          pathname: `/bookDetails_${book.id}`,
          query: book,
        }}
        className="mb-4 flex p-4 w-11/12 items-center justify-around mx-auto rounded-lg border-[1.5px] border-transparent bg-white gap-7 my-7 drop-shadow hover:border-[1.5px] hover:border-[#7C5DFA] flex-wrap"
      >
        <h3 className="basis-2/12">
          <span className="font-bold text-grey">#</span>
          {book.id}
        </h3>
        <h2 className="basis-2/12">{book.title}</h2>
        <h2 className="basis-2/12">{book.author}</h2>
        <div className="flex basis-2/12 items-center gap-5">
          <Button variant="secondary">Update</Button>
          <Button variant="delete" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </Link>
    )
  } else
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
        </figure>
      </Link>
    )
}

export default Book
