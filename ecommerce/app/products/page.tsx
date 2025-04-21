import ProductList from "../ProductList";
import { products } from "../product-data";

export default function ProductsPage() {
  return (
    <>
      <h1>Product List</h1>
      <ProductList products={products} />
    </>
  );
}
