import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import prisma from "prisma/script";
import ProductCard from "~/components/ProductCard";
import ROUTES from "~/constants/routes";
import { Product } from "@prisma/client";

const ShopPage = () => {
  const products = useLoaderData<typeof loader>();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export const loader: LoaderFunction = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as Product;
  await prisma.product.create({ data });

  return redirect(ROUTES.shop);
};

export default ShopPage;
