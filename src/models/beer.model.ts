export type Beer = {
  abv: number;
  attenuation_level: number;
  boil_volume: BoilVolume;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: FoodPairing;
  ibu: number;
  id: number;
  image_url: string;
  ingredients: Ingredients;
  method: MethodBeer;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: BeerVolume;
};

type BeerVolume = {
  unit: string;
  value: number;
};

type BoilVolume = {
  unit: string;
  value: number;
};

type Temp = {
  unit: string;
  value: number;
};

type MashTemp = {
  duration: number;
  temp: Temp;
}[];

type MethodBeer = {
  fermentation: {
    temp: Temp;
  };
  mash_temp: MashTemp;
  twist: null;
};

interface HopsIngredient {
  add: string;
  amount: {
    unit: string;
    value: number;
  };
  attribute: string;
  name: string;
}

interface MaltIngredient {
  amount: {
    unit: string;
    value: number;
  };
  name: string;
}

type Ingredients = {
  hops: HopsIngredient[];
  malt: MaltIngredient[];
  yeast: string;
};

type FoodPairing = string[];
