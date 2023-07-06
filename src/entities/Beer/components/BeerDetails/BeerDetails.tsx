import { Divider } from "antd"
import { Drawer } from "./BeerDetails.styled"
import { BeerDetailsProps } from "./BeerDetails.props"

const BeerDetails = ({ beer, showDetails, setShowDetails }: BeerDetailsProps) => {
  return (
    <Drawer
      title={beer.name}
      placement="right"
      onClose={() => setShowDetails(false)}
      open={showDetails}
      closable={false}
    >
      <h3>Tips</h3>
      <p>{beer.brewers_tips}</p>
      <Divider />
      <h3>Description</h3>
      <p>{beer.description}</p>
      <Divider />
      <h3>Food pairing</h3>
      <p>{beer.food_pairing.join(", ")}</p>
      <Divider />
      <h3>First brewed:</h3> <p>{beer.first_brewed}</p>
    </Drawer>
  )
}

export default BeerDetails
