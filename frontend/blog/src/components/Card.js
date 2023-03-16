export default function Card() {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Post Title</h2>
        <p>Interesting post content</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  )
}
