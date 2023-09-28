import Link from "next/link"
import React from "react"
import { BookType } from "types/bookTypes"
import Button from "./Button"

type Props = {
  book: BookType
  isAdmin?: boolean
  onDelete: (id: string) => void
}

const Book = ({ book, isAdmin, onDelete }: Props) => {
  if (isAdmin) {
    return (
      <Link
        href={{
          pathname: `/details`,
          query: { id: book.id },
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
          <Button
            variant="secondary"
            href={{
              pathname: `/details`,
              query: { id: book.id, isEdit: true },
            }}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            Edit
          </Button>
          <Button
            variant="delete"
            onClick={(e) => {
              e.preventDefault()
              onDelete(book.id.toString())
            }}
          >
            Delete
          </Button>
        </div>
      </Link>
    )
  } else
    return (
      <Link
        href={{
          pathname: `/details`,
          query: { id: book.id },
        }}
        className="w-72 h-[480px] bg-slate-300 flex justify-center rounded-3xl my-5"
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
