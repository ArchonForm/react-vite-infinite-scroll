import { useEffect, useState } from "react"
import { Alert, Col, Row } from "antd"
import BeerCard from "../../entities/Beer/components/BeerCard/BeerCard"
import ThreeDotsLoader from "../../shared/ui/ThreeDotsLoader/ThreeDotsLoader"
import { useBeers } from "../../entities/Beer/store"
import { shallow } from "zustand/shallow"

const InfiniteBeersList = () => {
  const pageSize: number = 30
  const totalCount: number = 1000

  const beers = useBeers(state => state.beers)
  const [page, setPage] = useState<number>(1)

  const { loading, error, getBeers } = useBeers(
    state => ({
      loading: state.loading,
      error: state.error,
      getBeers: state.getBeers,
    }),
    shallow
  )

  useEffect(() => {
    if (beers.length > totalCount) {
      return
    }
    getBeers(page, pageSize)
  }, [page])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)

    return () => document.removeEventListener("scroll", scrollHandler)
  }, [])

  const scrollHandler = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const innerHeight = window.innerHeight
    const scrollTop = document.documentElement.scrollTop

    if (innerHeight + scrollTop + 0.1 >= scrollHeight) {
      setPage(prev => prev + 1)
    }
  }

  return (
    <>
      {error && <Alert message="Oops!" description="Something went wrong." type="error" showIcon />}
      <Row gutter={16} justify="center">
        {beers?.map(beer => (
          <Col key={beer.id}>
            <BeerCard beer={beer} />
          </Col>
        ))}
      </Row>
      {loading && <ThreeDotsLoader />}
    </>
  )
}

export default InfiniteBeersList
