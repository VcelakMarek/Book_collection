import BookList from "components/BookList"
import Header from "components/Header"

export default function Admin() {
  return (
    <>
      <Header isAdmin />
      <main>
        <BookList isAdmin={true} />
      </main>
    </>
  )
}
