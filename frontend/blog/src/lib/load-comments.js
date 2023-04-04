export default async function loadComments(id) {
  const res = await fetch(`${process.env.API_HOST}/posts/${id}/comments`)
  const data = await res.json()

  return data
}
