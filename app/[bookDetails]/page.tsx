import React from "react"
import { BookTypes } from "types/bookTypes"

type Props = {
  searchParams: BookTypes
}

const BookDetails = ({ searchParams }: Props) => {
  console.log("BookData:", searchParams)
  console.log("test")
  return <div>BookDetails</div>
}

export default BookDetails
