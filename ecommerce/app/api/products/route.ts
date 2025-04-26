export async function GET() {
  return new Response("Hello GET", { status: 200 });
}

export async function POST() {
  return new Response("Hello POST", { status: 200 });
}
