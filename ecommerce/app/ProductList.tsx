import { Product } from "./product-data";
import Image from "next/image";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Image
            src={"/" + product.imageUrl}
            alt={product.name}
            width={200}
            height={200}
          ></Image>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
