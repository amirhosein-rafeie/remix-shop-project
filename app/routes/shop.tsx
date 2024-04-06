import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProducts } from "~/data/products";
import { Product } from "~/types/products";

const ShopPage = () => {
  const products = useLoaderData<typeof loader>();

  return (
    <div>
      {products.map((product: Product) => (
        <h4 key={product.id}>{product.name}</h4>
      ))}
    </div>
  );
};

export const loader: LoaderFunction = async () => {
  const products = await getProducts();
  return products;
};

export default ShopPage;
