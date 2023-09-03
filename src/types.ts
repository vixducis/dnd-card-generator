export type ItemType = {
  name: string;
  url: string;
};

export type Item = {
  title: string;
  description: string;
  weight: string;
  price: string;
  type: ItemType;
};
