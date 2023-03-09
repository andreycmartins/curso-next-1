import Link from "next/link"

import { useRouter } from "next/router"

export default function Todos() {
  const router = useRouter()

  const todoId = router.query.todoId

  return (
    <>
      <Link href="/">Voltar</Link>
      <h1>Exibindo o todo: {todoId}</h1>
      <p>Comentário: asdasdasd... <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
    </>
  )
}
