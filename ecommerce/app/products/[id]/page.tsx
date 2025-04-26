"use client";

import { useEffect, useState } from "react";
import { products } from "@/app/product-data";
import { Product } from "@/app/product-data";
import NotFoundPage from "@/app/not-found";
import Image from "next/image";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (params?.id) {
      const foundProduct = products.find((p) => p.id === params.id);
      setProduct(foundProduct ?? null);
    }
  }, [params]);

  if (!product) {
    return (
      <p>
        <NotFoundPage />
      </p>
    );
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Image
        src={"/" + product.imageUrl}
        alt={product.name}
        width={200}
        height={200}
      />
    </>
  );
}
