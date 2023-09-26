import BookList from "components/BookList"
import Button from "components/Button"

export default function Admin() {
  return (
    <div className="w-full h-full ">
      <header className="h-12 flex flex-row justify-between content-center m-4">
        <h1>Book Collection</h1>
        <Button href="/admin/new">New</Button>
      </header>
      <div className="h-px w-screen bg-gray-300"></div>
      <main className="flex justify-center items-center flex-row w-full">
        <BookList isAdmin={true} />
      </main>
    </div>
  )
}
