import BookList from "components/BookList"
import Header from "components/Header"

export default function Home() {
  return (
    <div className="w-full h-full bg-white-background">
      <Header />
      <main className=" flex flex-row ">
        <BookList />
      </main>
    </div>
  )
}
