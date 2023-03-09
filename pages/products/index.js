import Link from "next/link"

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link href="/products/shirt">Shirt</Link>
        </li>
        <li>
          <Link href="/">Index</Link>
        </li>
      </ul>
    </div>
  )
}
