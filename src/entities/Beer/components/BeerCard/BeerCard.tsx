import Meta from "antd/es/card/Meta"
import { Card, ImageWrapper, Image, Title } from "./BeerCard.styled"
import { Beer } from "../../types"

const BeerCard = ({ beer }: { beer: Beer }) => {
  return (
    <Card
      hoverable
      cover={
        <ImageWrapper>
          <Image alt={beer.tagline} src={beer.image_url} />
        </ImageWrapper>
      }
    >
      <Title title={beer.name} />
      <Meta description={`${beer.abv}%`} />
      <Meta description={`${beer.contributed_by}`} />
    </Card>
  )
}

export default BeerCard
