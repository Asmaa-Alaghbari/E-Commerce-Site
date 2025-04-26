import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type Params = {
  id: string;
};

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  "01": ["001", "002"],
  "02": ["003", "004"],
  "03": ["001", "003", "004"],
  "04": ["002"],
};

// Get the cart for a specific user
// GET /api/users/[id]/cart
export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const productsIds = carts[userId];

  if (productsIds === undefined) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const cartProducts = productsIds.map((id) =>
    products.find((p) => p.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

type CartBody = {
  productId: string;
};

// Add a product to the cart for a specific user
// POST /api/users/[id]/cart
export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId];
  const cartProducts = carts[userId].map((id) =>
    products.find((p) => p.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 201, // Created
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// Remove a product from the cart for a specific user
// DELETE /api/users/[id]/cart
export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body = await request.json();
  const productId = body.productId;

  carts[userId] = carts[userId]
    ? carts[userId].filter((pId) => pId !== productId)
    : [];
  const cartProducts = carts[userId].map((id) =>
    products.find((p) => p.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 202, // Accepted
    headers: {
      "Content-Type": "application/json",
    },
  });
}
