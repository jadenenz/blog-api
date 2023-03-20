import loadComments from "../lib/load-comments"

export default function Comments({ comments }) {
  const commentsList = comments.map((comment) => {
    ;<li key={comment._id}>
      <p>
        {comment.author} - {comment.content}
      </p>
    </li>
  })

  return (
    <div>
      <ul>{commentsList}</ul>
    </div>
  )
}
