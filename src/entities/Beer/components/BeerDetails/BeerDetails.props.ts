import { Beer } from "../../types"

export interface BeerDetailsProps {
  beer: Beer
  showDetails: boolean
  setShowDetails: (show: boolean) => void
}
