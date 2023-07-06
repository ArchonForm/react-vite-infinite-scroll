import axios from "axios"
import { Beer } from "../types"

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export async function fetchBeers(page: number, limit: number): Promise<Beer[]> {
  const response = await client.get("/beers", {
    params: {
      page: page,
      per_page: limit,
    },
  })
  return response.data
}
