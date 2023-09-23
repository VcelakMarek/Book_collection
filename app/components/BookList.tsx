"use client"
import { useState } from "react"
import type { BookTypes } from "types/bookTypes"
import { fetchBooksData } from "../scripts/fetchBooksData"

const BookList = async () => {
  const [booksData, setBooksData] = useState<BookTypes[]>()
  fetchBooksData(setBooksData)

  return <div>{booksData && <p>{booksData[0].author}</p>}</div>
}

export default BookList
