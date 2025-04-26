import { NextRequest } from "next/server";
import { connectToDb } from "@/app/api/db";

type Params = {
  id: string;
};

// Get the cart for a specific user
// GET /api/users/[id]/cart
export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDb();
  const userId = params.id;
  const userCart = await db.collection("carts").findOne({ userId });

  if (!userCart) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const cartIds = userCart.cartIds;
  const cartProducts = await db
    .collection("products")
    .find({
      id: { $in: cartIds },
    })
    .toArray();

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
  const { db } = await connectToDb();
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  const updatedCart = await db
    .collection("carts")
    .findOneAndUpdate(
      { userId },
      { $push: { cartIds: productId } },
      { returnDocument: "after", upsert: true }
    );

  const cartProducts = await db
    .collection("products")
    .find({
      id: { $in: updatedCart.cartIds },
    })
    .toArray();

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
  const { db } = await connectToDb();
  const userId = params.id;
  const body = await request.json();
  const productId = body.productId;

  const updatedCart = await db
    .collection("carts")
    .findOneAndUpdate(
      { userId },
      { $pull: { cartIds: productId } },
      { returnDocument: "after" }
    );

  if (!updatedCart) {
    return new Response(JSON.stringify([]), {
      status: 202,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const cartProducts = await db
    .collection("products")
    .find({
      id: { $in: updatedCart.cartIds },
    })
    .toArray();

  return new Response(JSON.stringify(cartProducts), {
    status: 202, // Accepted
    headers: {
      "Content-Type": "application/json",
    },
  });
}
