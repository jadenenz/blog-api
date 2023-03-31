import loadComments from "../lib/load-comments"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

export default function Comments({ id }) {
  //react-hook-form
  const { register, handleSubmit } = useForm()

  // Access the client.
  const queryClient = useQueryClient()

  // tanstack query
  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
      const result = await fetch(
        `http://localhost:3000/posts/${id}/comments`,
        options
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] })
    },
  })

  async function onSubmit(data) {
    try {
      mutation.mutate(data)
    } catch (error) {
      console.error(error)
    }
  }

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <textarea
            {...register("content")}
            className="textarea"
            placeholder="Add a comment..."
          ></textarea>
          <input
            className="input"
            {...register("author")}
            placeholder="Name (blank for Anonymous)"
            type="text"
          />
          <button className="btn-primary btn max-w-xs" type="submit">
            Submit
          </button>
        </form>
      </div>
      <ul>
        {data &&
          data.map((comment) => (
            <li
              className="flex items-baseline gap-4 border-b border-dashed p-8"
              key={comment._id}
            >
              <div className="flex flex-col items-center">
                <div className="placeholder avatar">
                  <div className="w-16 rounded-full bg-neutral-focus text-neutral-content">
                    <span className="text-xl">{comment.author.charAt(0)}</span>
                  </div>
                </div>
                <div className="text-sm">{comment.author}</div>
              </div>
              <div className="flex justify-center self-center">
                {comment.content}
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
