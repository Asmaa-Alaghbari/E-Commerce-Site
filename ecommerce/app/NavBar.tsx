import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="cantainer mx-auto px-4 py-3 flex justify-between item-center">
        <Link
          href="/"
          className="text-gray-300 hover:text-gray-700 cursor-pointer"
        >
          E-commerce
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-gray-300 hover:text-gray-700 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-300 hover:text-gray-700 cursor-pointer"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="text-gray-300 hover:text-gray-700 cursor-pointer"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="/checkout"
              className="text-gray-300 hover:text-gray-700 cursor-pointer"
            >
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
