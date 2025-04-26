import { Product } from "./product-data";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
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
        </Link>
      ))}
    </div>
  );
}
