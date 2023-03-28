import loadComments from "../lib/load-comments"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

export default function Comments({ id }) {
  // Access the client.
  const queryClient = useQueryClient()

  // Queries
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => loadComments(id),
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <div className="flex gap-4 border-b border-dashed p-8">
        <div>
          <div className="placeholder avatar">
            <div className="w-16 rounded-full bg-neutral-focus text-neutral-content">
              <span className="text-xl"></span>
            </div>
          </div>
        </div>
        <textarea
          className="textarea"
          placeholder="Add a comment..."
        ></textarea>
      </div>
      <ul>
        {data &&
          data.map((comment) => (
            <li
              className="flex justify-center gap-4 border-b border-dashed p-8"
              key={comment._id}
            >
              <div className="flex flex-col">
                <div className="placeholder avatar">
                  <div className="w-16 rounded-full bg-neutral-focus text-neutral-content">
                    <span className="text-xl">{comment.author.charAt(0)}</span>
                  </div>
                </div>
                {comment.author}
              </div>
              {comment.content}
            </li>
          ))}
      </ul>
    </div>
  )
}
