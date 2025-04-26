import ProductList from "../ProductList";
import { products } from "../product-data";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <p className="text-lg text-gray-600 mb-6">
        Explore our range of products and find what you love! We offer a wide
        selection of items to suit your needs.
      </p>
      <ProductList products={products} />
    </div>
  );
}
