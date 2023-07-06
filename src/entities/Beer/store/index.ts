import { create } from "zustand"
import { Beer } from "../types"
import { fetchBeers } from "../api"

interface BeerState {
  beers: Beer[]
  loading: boolean
  error: null | string
  getBeers: (page: number, limit: number) => void
}

export const useBeers = create<BeerState>((set, get) => ({
  beers: [],
  loading: false,
  error: null,
  getBeers: async (page, limit) => {
    set({ loading: true })
    fetchBeers(page, limit)
      .then(res => set({ beers: [...get().beers, ...res], loading: false, error: null }))
      .catch(err => set({ loading: false, error: err.message }))
      .finally(() => set({ loading: false }))
  },
}))
