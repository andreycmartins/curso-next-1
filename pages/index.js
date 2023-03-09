import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import imagem from "../public/images/quadrado.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keywords" content="Roupas, calçados, boné"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <Image src={imagem} width={200} height={200} alt="Quadrado 200x200" />
      </div>
    </>
  )
}
