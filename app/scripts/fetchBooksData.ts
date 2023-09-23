import { Dispatch, SetStateAction } from "react"
import type { BookTypes } from "types/bookTypes"

export const fetchBooksData = async (
  setBooksData: Dispatch<SetStateAction<BookTypes[]>>,
) => {
  const res = await fetch("/json/books.json")
  const data = await res.json()

  setBooksData(data)
}
