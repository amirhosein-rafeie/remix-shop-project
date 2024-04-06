import fs from "fs/promises";
import { Product } from "~/types/products";

const DB_PATH = "db.json";

export const getProducts = async () => {
  const rawProducts = await fs.readFile(DB_PATH, { encoding: "utf-8" });
  const data = JSON.parse(rawProducts);
  const products = data.products ?? [];
  return products;
};

export const storeProducts = async (products: Product[]) => {
  await fs.writeFile(DB_PATH, JSON.stringify({ products }));
};
