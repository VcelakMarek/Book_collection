import BookList from "components/BookList"
import Header from "components/Header"

export default function Admin() {
  return (
    <div className="w-full h-full ">
      <Header isAdmin />
      <main className="flex justify-center items-center flex-row w-full">
        <BookList isAdmin={true} />
      </main>
    </div>
  )
}
