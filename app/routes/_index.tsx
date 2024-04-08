import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import prisma from "prisma/script";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Shop" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const products = await prisma.product.findMany();
  return json(products);
};

export default function Index() {
  return (
    <main>
      <h1>Welcome to Remix Shop!</h1>
    </main>
  );
}
