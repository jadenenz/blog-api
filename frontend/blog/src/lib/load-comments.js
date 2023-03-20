export async function loadComments(id) {
  const res = await fetch(`http://localhost:3000/posts/${id}/comments`)

  const data = await res.json()
}
