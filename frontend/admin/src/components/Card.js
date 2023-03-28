import Link from "next/link"

export default function Card({ title, author, id }) {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <div className="card-actions justify-end">
          <Link
            className="btn btn-primary"
            href={`/posts/${encodeURIComponent(id)}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}
