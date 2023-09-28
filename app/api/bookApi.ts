import { AxiosResponse, isAxiosError } from "axios"
import { GET, POST, PUT } from "connectors/fetch"
import { BookType } from "types/bookTypes"

const handleError = (error: unknown) => {
  if (!isAxiosError(error)) {
    return null
  }

  if (error.response) {
    console.error("Response Error:", error.response.data)
  } else if (error.request) {
    console.error("Request Error:", error.request)
  } else {
    console.error("Error:", error.message)
  }

  return null
}

export const fetchBooksData: () => Promise<AxiosResponse<
  BookType[]
> | null> = async () => {
  try {
    return await GET<BookType[]>(`v1/books`)
  } catch (e) {
    return handleError(e)
  }
}

export const fetchBookDetails: (
  id: string,
) => Promise<AxiosResponse<BookType> | null> = async (id: string) => {
  try {
    return await GET<BookType>(`v1/books/${id}`)
  } catch (e) {
    return handleError(e)
  }
}

export const addNewBook: (
  data: BookType,
) => Promise<AxiosResponse<BookType> | null> = async (data: BookType) => {
  try {
    return await POST("v1/books", data)
  } catch (e) {
    return handleError(e)
  }
}

export const editBook: (
  id: string,
  data: BookType,
) => Promise<AxiosResponse<BookType> | null> = async (
  id: string,
  data: BookType,
) => {
  try {
    return await PUT(`v1/books/${id}`, data)
  } catch (e) {
    return handleError(e)
  }
}
