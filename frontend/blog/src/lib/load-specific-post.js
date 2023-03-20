export async function loadSpecificPost(id) {
  const res = await fetch(`http://localhost:3000/posts/${id}`)
  const data = await res.json()

  return data
}
