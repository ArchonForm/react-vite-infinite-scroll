import { useInfiniteQuery } from "react-query"
import { fetchBeers } from "../api"

const useBeers = (pageSize: number = 30) =>
  useInfiniteQuery({
    queryKey: ["beers"],
    queryFn: ({ pageParam = 1 }) => fetchBeers(pageParam, pageSize),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length + 1
    },
  })

export default useBeers
