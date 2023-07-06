import Meta from "antd/es/card/Meta"
import { Card, ImageWrapper, Image, Title } from "./BeerCard.styled"
import BeerDetails from "../BeerDetails/BeerDetails"
import { memo, useState } from "react"
import { BeerCardProps } from "./BeerCard.props"

const BeerCard = ({ beer }: BeerCardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false)

  return (
    <>
      <Card
        onClick={() => setShowDetails(true)}
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
      <BeerDetails beer={beer} showDetails={showDetails} setShowDetails={setShowDetails} />
    </>
  )
}

export default memo(BeerCard)
