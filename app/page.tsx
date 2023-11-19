import AdminLogin from "components/AdminLogin"
import BookList from "components/BookList"
import Header from "components/Header"

type Props = {
  searchParams: Record<string, string> | null | undefined
}

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal

  return (
    <>
      <Header />
      <main>
        <BookList />
      </main>

      {showModal && <AdminLogin />}
    </>
  )
}
