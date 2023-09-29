"use client"
import React, { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { fetchBookDetails } from "api/bookApi"
import Header from "components/Header"
import BookForm from "components/BookForm"
import Eror404 from "components/Eror404"
import Loading from "components/Loading"
import type { BookType } from "types/bookType"

const BookDetails = () => {
  const [bookData, setBookData] = useState<BookType | null>(null)
  const searchParams = useSearchParams()

  const id = searchParams.get("id")
  const isEdit = searchParams.get("isEdit")

  if (!id) {
    return <Eror404 />
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchBookDetails(id)
      if (response?.data) {
        setBookData(response.data)
      }
    }
    fetch()
  }, [])

  if (!bookData) {
    return <Loading />
  }

  if (isEdit) {
    return (
      <>
        <Header isButton={false} />
        <BookForm formValues={bookData} />
      </>
    )
  }
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
