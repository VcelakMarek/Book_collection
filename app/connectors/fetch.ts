import axios, { AxiosResponse } from "axios"
import type { BookType } from "types/bookType"

const BASE_URL = "https://650fc0ea3ce5d181df5ca6fb.mockapi.io/api/"

export const GET = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios({ method: "GET", baseURL: BASE_URL, url })
}

export const POST = async <T>(
  url: string,
  data: BookType,
): Promise<AxiosResponse<T>> => {
  return axios({ method: "POST", baseURL: BASE_URL, url, data })
}

export const PUT = async <T>(
  url: string,
  data: BookType,
): Promise<AxiosResponse<T>> => {
  return axios({ method: "PUT", baseURL: BASE_URL, url, data })
}

export const DELETE = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios({ method: "DELETE", baseURL: BASE_URL, url })
}
