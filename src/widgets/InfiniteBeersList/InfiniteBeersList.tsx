import { useEffect, useState } from "react"
import { Col, Row } from "antd"
import { Beer } from "../../entities/Beer/types"
import BeerCard from "../../entities/Beer/components/BeerCard/BeerCard"
import ThreeDotsLoader from "../../shared/ui/ThreeDotsLoader/ThreeDotsLoader"
import { useBeers } from "../../entities/Beer/store"
import { fetchBeers } from "../../entities/Beer/api"

const InfiniteBeersList = () => {
  const pageSize: number = 30
  const totalCount: number = 1000

  const beers = useBeers(state => state.beers)
  const storeBeers = useBeers(state => state.storeBeers)

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [fetching, setFetching] = useState<boolean>(true)

  useEffect(() => {
    if (fetching) {
      fetchBeers(currentPage, pageSize)
        .then((res: Beer[]) => {
          storeBeers(res)
          setCurrentPage(prev => prev + 1)
        })
        .finally(() => setFetching(false))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)

    return () => document.removeEventListener("scroll", scrollHandler)
  }, [fetching])

  const scrollHandler = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const innerHeight = window.innerHeight
    const scrollTop = document.documentElement.scrollTop

    if (scrollHeight - (scrollTop + innerHeight) < 100 && beers.length < totalCount) {
      setFetching(true)
    }
  }

  return (
    <>
      <Row gutter={16} justify="center">
        {beers?.map((beer: any) => (
          <Col key={beer.id}>
            <BeerCard beer={beer} />
          </Col>
        ))}
      </Row>
      {fetching && <ThreeDotsLoader />}
    </>
  )
}

export default InfiniteBeersList
