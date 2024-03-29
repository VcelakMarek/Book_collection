"use client"
import { useEffect, useState } from "react"
import { fetchBooksData, deleteBook } from "api/bookApi"
import Book from "components/Book"
import Loading from "components/Loading"
import type { BookType } from "types/bookType"

type Props = {
  isAdmin?: boolean
}

const BookList = ({ isAdmin }: Props) => {
  const [booksData, setBooksData] = useState<BookType[] | null>(null)

  const onDelete = async (id: string) => {
    const response = await deleteBook(id)
    if (response?.status == 200) {
      setBooksData((prev) =>
        prev ? prev.filter((book) => book.id !== id) : null,
      )
    }
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchBooksData()
      if (response?.data) {
        setBooksData(response.data)
      }
    }
    fetch()
  }, [])

  return (
    <div className="mx-auto my-8 flex h-screen w-11/12 flex-row flex-wrap justify-center gap-8 bg-white-background">
      {booksData?.length ? (
        booksData.map((book) => (
          <Book
            isAdmin={isAdmin}
            key={book.id}
            book={book}
            onDelete={onDelete}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  )
}
export default BookList
