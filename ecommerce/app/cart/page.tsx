import ShoppingCartList from "./ShoppingCartList";

export default async function CartPage() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/users/user01/cart",
    {
      cache: "no-cache",
    }
  );
  const cartProducts = await response.json();

  return <ShoppingCartList initialCartProducts={cartProducts} />;
}
