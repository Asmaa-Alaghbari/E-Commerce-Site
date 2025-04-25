"use client"; // Because it uses useState and needs to be interactive

import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";

export default function CartPage() {
  const [cartIds] = useState(["001", "002"]);
  const cartProducts = cartIds.map((id) => products.find((p) => p.id === id)!);

  return (
    <>
      <h1>Shopping Cart</h1>;
      {cartProducts.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </Link>
      ))}
    </>
  );
}
