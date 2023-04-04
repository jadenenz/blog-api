export async function loadSpecificPost(id) {
  const res = await fetch(`${process.env.API_HOST}/posts/${id}`)
  const data = await res.json()

  return data
}
