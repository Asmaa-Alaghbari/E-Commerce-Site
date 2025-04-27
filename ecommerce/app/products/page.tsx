import ProductList from "../ProductList";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/products"
  );
  const products = await response.json();

  const responseShoppingCart = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/users/user01/cart",
    {
      cache: "no-cache",
    }
  );
  const cartProducts = await responseShoppingCart.json();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <p className="text-lg text-gray-600 mb-6">
        Explore our range of products and find what you love! We offer a wide
        selection of items to suit your needs.
      </p>
      <ProductList products={products} initialCartProducts={cartProducts} />
    </div>
  );
}
