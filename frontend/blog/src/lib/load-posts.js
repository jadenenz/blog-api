export async function loadPosts() {
  const res = await fetch(`${process.env.API_HOST}/posts/`)
  const data = await res.json()

  return data
}
