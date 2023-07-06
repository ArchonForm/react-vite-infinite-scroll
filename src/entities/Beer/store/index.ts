import { create } from "zustand"
import { Beer } from "../types"

interface BeerState {
  beers: Beer[]
  loading: boolean
  error: null | string
  storeBeers: (newBeers: Beer[]) => void
}

export const useBeers = create<BeerState>(set => ({
  beers: [],
  loading: false,
  error: null,
  storeBeers: newBeers =>
    set(state => {
      return { beers: [...state.beers, ...newBeers] }
    }),
}))
