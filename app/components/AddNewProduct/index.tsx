import { Form, useLocation, useNavigation } from "@remix-run/react";

import styles from "./add-new-product-style.module.css";
import ROUTES from "~/constants/routes";

const AddNewProduct = () => {
  const navigation = useNavigation();
  const location = useLocation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Form
      key={location.key} // For reset inputs
      className={styles.form}
      method="post"
      action={ROUTES.shop}
    >
      <label htmlFor="name">Product name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />

      <label htmlFor="price">Product price</label>
      <input type="text" name="price" id="price" />

      <label htmlFor="inventory">Product inventory</label>
      <input type="text" name="inventory" id="inventory" />

      <label htmlFor="discount">Product discount</label>
      <input type="text" name="discount" id="discount" />

      <label htmlFor="img">Product img</label>
      <input type="file" name="img" id="img" />

      <button disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Product"}
      </button>
    </Form>
  );
};

export default AddNewProduct;
