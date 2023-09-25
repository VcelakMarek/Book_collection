import { GET } from "scripts/fetch"

export const fetchBooksData = async () => {
  const response = await GET("v1/books")
  console.log("GET Request Response:", response)
  return response
}
