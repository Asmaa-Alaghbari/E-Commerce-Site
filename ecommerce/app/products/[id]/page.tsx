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
    <div className="cantainer mx-auto p-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
        <Image
          src={"/" + product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
