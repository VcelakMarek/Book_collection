import React from "react"
import Header from "components/Header"
import { BookTypes } from "types/bookTypes"

type Props = {
  searchParams: BookTypes
}

const BookDetails = ({ searchParams }: Props) => {
  const bookData = searchParams

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
