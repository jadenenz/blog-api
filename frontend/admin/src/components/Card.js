import Link from "next/link"

export default function Card({ title, author, id, published }) {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <div className="card-actions justify-end">
          {published ? (
            <button className="btn-secondary btn">Unpublish</button>
          ) : (
            <button className="btn-accent btn">Publish</button>
          )}
          <button className="btn-error btn">Delete</button>
          {/* <Link
            className="btn-primary btn"
            href={`/posts/${encodeURIComponent(id)}`}
          >
            Read more
          </Link> */}
        </div>
      </div>
    </div>
  )
}
