"use client"
import React, { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Header from "components/Header"
import { fetchBookDetails } from "api/bookApi"
import { BookType } from "types/bookTypes"
import BookForm from "components/BookForm"

const BookDetails = () => {
  const [bookData, setBookData] = useState<BookType | null>(null)
  const searchParams = useSearchParams()

  const id = searchParams.get("id")
  const isEdit = searchParams.get("isEdit")

  if (!id) {
    return <p>error: id is empty</p>
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchBookDetails(id)
      console.log("response", response)
      if (response?.data) {
        setBookData(response.data)
      } else {
        setBookData(null)
      }
    }
    fetch()
  }, [])

  if (!bookData) {
    return <p>error: bookData is empty </p>
  }

  if (isEdit) {
    return (
      <>
        <Header isButton={false} />
        <BookForm formValues={bookData} />
      </>
    )
  } else
    return (
      <>
        <Header isButton={false} />
        <main className="bg-white-background flex flex-wrap h-screen w-screen pt-10">
          <section className="w-[320px] mx-auto">
            <img
              className="h-[499px] w-[323px]"
              src={bookData.imageLink}
              alt={bookData.title}
            ></img>
          </section>
          <section className="m-10 w-3/5 flex flex-col gap-5">
            <h1>{bookData.title}</h1>
            <h2>{bookData.author}</h2>
            <p>{bookData.description}</p>
            <div className="flex gap-10 mt-28">
              <div>
                <h3>Year</h3>
                <p>{bookData.year}</p>
              </div>
              <div>
                <h3>Pages</h3>
                <p>{bookData.pages}</p>
              </div>
            </div>
          </section>
        </main>
      </>
    )
}

export default BookDetails
