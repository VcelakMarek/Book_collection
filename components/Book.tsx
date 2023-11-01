import React from "react"
import Link from "next/link"
import Button from "components/Button"
import type { BookType } from "types/bookType"

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
        className="mx-auto flex w-11/12 flex-wrap items-center justify-around gap-7 rounded-lg border-[1.5px] border-transparent bg-white p-4 drop-shadow hover:border-[1.5px] hover:border-[#7C5DFA]"
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
        className="my-5 flex h-[480px] w-72 justify-center rounded-3xl bg-slate-300"
      >
        <figure className="absolute h-[345px] w-56">
          <img
            src={book.imageLink}
            alt={book.title}
            className="relative left-0 top-8 h-[345px] w-[224px] rounded-3xl"
          />
          <figcaption className="relative top-10 m-3  text-center">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </figcaption>
        </figure>
      </Link>
    )
}

export default Book
