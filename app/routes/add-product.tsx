import { ActionFunction, redirect } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import ROUTES from "~/constants/routes";
import { getProducts, storeProducts } from "~/data/products";

const AddProduct = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <Form method="post" action={ROUTES.addProduct}>
        <input type="text" name="name" />
        <button disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Product"}
        </button>
      </Form>
    </div>
  );
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const products = await getProducts();

  const product = Object.fromEntries(formData);
  product.id = new Date().toISOString();

  const updatedProducts = [...products, product];

  await storeProducts(updatedProducts);

  return redirect(ROUTES.shop);
};

export default AddProduct;
