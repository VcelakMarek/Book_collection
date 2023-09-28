"use client"
import { useEffect, useState } from "react"
import Book from "./Book"
import type { BookType } from "types/bookTypes"
import { fetchBooksData } from "../api/bookApi"
import { DELETE } from "connectors/fetch"

type Props = {
  isAdmin?: boolean
}

const BookList = ({ isAdmin }: Props) => {
  const [booksData, setBooksData] = useState<BookType[] | null>(null)

  const onDelete = (id: string) => {
    DELETE(`v1/books/${id}`)
    setBooksData((prev) => {
      if (prev !== null) {
        return prev.filter((book) => book.id !== id)
      }
    })
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchBooksData()
      console.log("response", response)
      if (response?.data) {
        setBooksData(response.data)
      }
    }
    fetch()
  }, [])

  return (
    <div
      className={`w-screen bg-white-background ${
        !isAdmin && "w-screen flex flex-wrap gap-8 justify-center"
      }`}
    >
      {booksData?.length ? (
        booksData.map((book) => (
          <Book
            isAdmin={isAdmin ? true : false}
            key={book.id}
            book={book}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
export default BookList
