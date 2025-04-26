"use client"; // Because it uses useState and needs to be interactive

import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const [cartIds] = useState(["001", "002"]);
  const cartProducts = cartIds.map((id) => products.find((p) => p.id === id)!);

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      {cartProducts.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
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
          </div>
        </Link>
      ))}
    </>
  );
}
