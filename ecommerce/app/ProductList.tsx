"use client";

import { useState } from "react";
import { Product } from "./product-data";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({
  products,
  initialCartProducts,
}: {
  products: Product[];
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  async function addToCart(productId: string) {
    const response = await fetch(
      process.env.NEXT_PUBLIC_SITE_URL + "/api/users/user01/cart",
      {
        method: "POST",
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

  function productIsInCart(productId: string) {
    return cartProducts.some((product) => product.id === productId);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <Link
          key={`${product.id}-${index}`}
          href={`/products/${product.id}`}
          className="bg-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
        >
          <div className="flex justify-center mb-4 h-48 relative">
            <Image
              src={"/" + product.imageUrl}
              alt={product.name}
              width={200}
              height={200}
              className="object-cover rounded-md"
            ></Image>
          </div>
          <h2 className="text-black text-xl font-semibold mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-800 font-semibold mb-4">${product.price}</p>
          {productIsInCart(product.id) ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                removeFromCart(product.id);
              }}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-900 transition duration-300 ease-in-out"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product.id);
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          )}
        </Link>
      ))}
    </div>
  );
}
