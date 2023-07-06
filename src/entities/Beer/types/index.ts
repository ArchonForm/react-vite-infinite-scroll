export interface Beer {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number | null
  target_fg: number
  target_og: number
  ebc: number | null
  srm: number | null
  ph: number | null
  attenuation_level: number
  volume: Volume
  boil_volume: Volume
  method: BrewingMethod
  ingredients: Ingredients
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}

interface Volume {
  value: number
  unit: Unit
}

enum Unit {
  Celsius = "celsius",
  Grams = "grams",
  Kilograms = "kilograms",
  Litres = "litres",
}

interface Ingredients {
  malt: Malt[]
  hops: Hop[]
  yeast: string
}

interface Malt {
  name: string
  amount: Volume
}

interface Hop {
  name: string
  amount: Volume
  add: HopAdd
  attribute: HopAttribute
}

enum HopAdd {
  DryHop = "dry hop",
  End = "end",
  Middle = "middle",
  Start = "start",
}

enum HopAttribute {
  Aroma = "aroma",
  Bitter = "bitter",
  Flavour = "flavour",
}

interface BrewingMethod {
  mash_temp: MashTemp[]
  fermentation: Fermentation
  twist: null | string
}

interface Fermentation {
  temp: Volume
}

interface MashTemp {
  temp: Volume
  duration: number | null
}
