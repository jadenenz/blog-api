import Link from "next/link"
import { useRouter } from "next/router"

export default function Card({ title, author, id, published }) {
  const router = useRouter()

  async function handleDelete() {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
    const result = await fetch(`http://localhost:3000/posts/${id}`, options)
    const response = await result.json()
    console.log(response)
    alert(response.message)
    router.reload(window.location.pathname)
  }

  async function handlePublish() {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isPublished: published }),
    }
    try {
      const result = await fetch(`http://localhost:3000/posts/${id}`, options)
      const response = await result.json()
      router.reload(window.location.pathname)
    } catch (error) {
      console.error("err", error)
    }
  }

  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <div className="card-actions justify-end">
          {published ? (
            <button onClick={handlePublish} className="btn-secondary btn">
              Unpublish
            </button>
          ) : (
            <button onClick={handlePublish} className="btn-accent btn">
              Publish
            </button>
          )}
          <button onClick={handleDelete} className="btn-error btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
