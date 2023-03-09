import Link from "next/link"

export default function Navbar() {
  return (
    <div>
      <h1>Navbar - top of the index</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="../products">Produtos</Link>
        </li>
        <li>
          <Link href="../about">Sobre Nós</Link>
        </li>
      </ul>
    </div>
  )
}
