"use client";

import { useState } from "react";
import { Product } from "../product-data";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic"; // Force revalidation on every request

export default function ShoppingCartList({
  initialCartProducts,
}: {
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  async function removeFromCart(productId: string) {
    const response = await fetch(
      process.env.NEXT_PUBLIC_SITE_URL + "/api/users/user01/cart",
      {
        method: "DELETE",
        body: JSON.stringify({
          productId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const uppdatedCartProducts = await response.json();
    setCartProducts(uppdatedCartProducts);
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      {cartProducts.map((product, index) => (
        <Link key={`${product.id}-${index}`} href={`/products/${product.id}`}>
          <div className="bg-gray-200 w-80 rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex justify-center mb-4 h-48 relative">
              <Image
                src={"/" + product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
              />
            </div>
            <h3 className="text-black text-xl font-semibold mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-800 font-semibold mb-4">${product.price}</p>
            <div className="flex justify-end mb-4">
              <button
                type="button"
                className="text-red-400 px-4 py-2 hover:text-red-800 transition duration-300 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  removeFromCart(product.id);
                }}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
