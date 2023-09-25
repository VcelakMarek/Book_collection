import axios, { AxiosResponse, AxiosError } from "axios"

const BASE_URL = "https://650fc0ea3ce5d181df5ca6fb.mockapi.io/api/"
const api = axios.create()

const handleError = (error: AxiosError) => {
  if (error.response) {
    console.error("Response Error:", error.response.data)
  } else if (error.request) {
    console.error("Request Error:", error.request)
  } else {
    console.error("Error:", error.message)
  }
}

export const GET = async <T>(url: string): Promise<T | null> => {
  try {
    const response: AxiosResponse<T> = await api.get(BASE_URL + url)
    return response.data
  } catch (error) {
    handleError(error)
    return null
  }
}

export const POST = async <T>(url: string, data: any): Promise<T | null> => {
  try {
    const response: AxiosResponse<T> = await api.post(BASE_URL + url, data)
    return response.data
  } catch (error) {
    handleError(error)
    return null
  }
}

export const PUT = async <T>(url: string, data: any): Promise<T | null> => {
  try {
    const response: AxiosResponse<T> = await api.put(BASE_URL + url, data)
    return response.data
  } catch (error) {
    handleError(error)
    return null
  }
}

export const REMOVE = async <T>(url: string): Promise<T | null> => {
  try {
    const response: AxiosResponse<T> = await api.delete(BASE_URL + url)
    return response.data
  } catch (error) {
    handleError(error)
    return null
  }
}
