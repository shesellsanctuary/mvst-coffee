export type Coffee = {
  id: number;
  name: string;
  price: number;
  type: CoffeeType;
  description: string;
  imageUrl: string;
};

export type CoffeeType = "arabic" | "robusta";
