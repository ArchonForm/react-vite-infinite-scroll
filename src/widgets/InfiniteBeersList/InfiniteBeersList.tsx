import InfiniteScroll from "react-infinite-scroll-component"
import ThreeDotsLoader from "../../shared/ui/ThreeDotsLoader/ThreeDotsLoader"
import useBeers from "../../entities/Beer/hooks/useBeers"
import BeerCard from "../../entities/Beer/components/BeerCard/BeerCard"
import { Col, Row } from "antd"

const InfiniteBeersList = () => {
  const { data, fetchNextPage, hasNextPage } = useBeers()

  return (
    <InfiniteScroll
      style={{ overflow: "hidden" }}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={<ThreeDotsLoader />}
      dataLength={data?.pages.reduce((total, page) => total + page.length, 0) || 0}
    >
      <Row gutter={16} justify="center">
        {data?.pages.map(page =>
          page.map(beer => (
            <Col key={beer.id}>
              <BeerCard beer={beer} />
            </Col>
          ))
        )}
      </Row>
    </InfiniteScroll>
  )
}

export default InfiniteBeersList
