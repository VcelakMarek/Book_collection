import BookList from "components/BookList"
import Button from "components/Button"

export default function Home() {
  return (
    <div className="w-full h-full bg-white-background">
      <header className="h-12 flex flex-row justify-between content-center m-4">
        <h1>Book Collection</h1>
        <Button href="/admin">Admin</Button>
      </header>
      <div className="h-px w-screen bg-gray-300"></div>
      <main className=" flex flex-row ">
        <BookList />
      </main>
    </div>
  )
}
