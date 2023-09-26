"use client"
import { useEffect, useState } from "react"
import Book from "./Book"
import type { BookTypes } from "types/bookTypes"
import { fetchBooksData } from "scripts/fetchBooksData"

type Props = {
  isAdmin?: boolean
}

const BookList = ({ isAdmin }: Props) => {
  const [booksData, setBooksData] = useState<BookTypes[]>()

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchBooksData()
      setBooksData(response)
    }
    fetch()
  }, [])

  return (
    <div className="w-screen flex flex-wrap gap-8 justify-center">
      {booksData?.length ? (
        booksData.map((book) => (
          <Book isAdmin={isAdmin ? true : false} key={book.id} book={book} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
export default BookList
