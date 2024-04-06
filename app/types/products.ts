/* eslint-disable @typescript-eslint/no-explicit-any */
export type Product = {
  id: string;
  name: string;
  description: string;
  inventory: number;
  discount: number | null;
  price: number;
  colors: string[] | [];
  details: { title: string; value: any }[];
};
