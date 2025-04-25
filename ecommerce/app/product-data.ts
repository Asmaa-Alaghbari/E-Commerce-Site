export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: "001",
    name: "Hat",
    description: "A stylish hat to keep you cool in the sun.",
    price: 19.99,
    imageUrl: "Hat.jpeg",
    category: "Accessories",
    stock: 100,
  },
  {
    id: "002",
    name: "Shirt",
    description: "A comfortable cotton shirt.",
    price: 29.99,
    imageUrl: "Shirt.jpg",
    category: "Clothing",
    stock: 50,
  },
  {
    id: "003",
    name: "Mug",
    description: "A ceramic mug for your favorite beverage.",
    price: 9.99,
    imageUrl: "Mug.jpeg",
    category: "Kitchen",
    stock: 200,
  },
  {
    id: "004",
    name: "Apron",
    description: "A durable apron for cooking and crafting.",
    price: 24.99,
    imageUrl: "Apron.jpg",
    category: "Kitchen",
    stock: 75,
  },
];
