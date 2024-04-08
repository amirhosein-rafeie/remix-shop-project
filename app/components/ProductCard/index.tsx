import { Product } from "@prisma/client";
import styles from "./product-card-style.module.css";

const ProductCard = ({ name, img }: Product) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
      <div className={styles.contentBox}>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
