import React from "react";
import styles from "./Products.module.css";
import { connect } from "react-redux";
import Product from "./Product/Product";
import { useSelector } from "react-redux";

const Products = () => {
  let product = useSelector((state) => state.products);

  // console.log(product);
  return (
    <div className={styles.products}>
      {product.map((product) => (
        <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return{
//     products : state.products
//   }
// }

export default Products;
// export default connect(mapStateToProps)(Products)