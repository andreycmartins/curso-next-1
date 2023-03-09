import Link from "next/link"
import styles from '../../styles/Products.module.css'

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li className={styles.products}>
          <Link href="/products/shirt">Shirt</Link>
        </li>
        <li className={styles.products}>
          <Link href="/">Index</Link>
        </li>
      </ul>
    </div>
  )
}
