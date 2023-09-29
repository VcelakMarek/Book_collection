import { AxiosResponse, isAxiosError } from "axios"
import { GET, POST, PUT, DELETE } from "connectors/fetch"
import type { BookType } from "types/bookType"

const handleError = (error: unknown) => {
  if (!isAxiosError(error)) {
    return null
  }

  return error.response ? error.response : null
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

export const deleteBook: (
  id: string,
) => Promise<AxiosResponse<BookType> | null> = async (id: string) => {
  try {
    return await DELETE(`v1/books/${id}`)
  } catch (e) {
    return handleError(e)
  }
}
