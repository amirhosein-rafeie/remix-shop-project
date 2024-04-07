import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import prisma from "prisma/script";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Shop" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const users = await prisma.user.findMany();
  return json({ users });
};

export default function Index() {
  const data = useLoaderData();

  console.log(data);

  return (
    <main>
      <h1>Welcome to Remix Shop!</h1>
    </main>
  );
}
