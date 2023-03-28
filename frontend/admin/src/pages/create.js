import { useForm } from "react-hook-form"

export default function CreatePost() {
  const { register, handleSubmit } = useForm()

  async function onSubmit(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }

    try {
      const response = await fetch("http://localhost:3000/posts/", options)
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>New post form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title" />
        <input {...register("author")} placeholder="Author" />
        <textarea {...register("content")} placeholder="Content" />
        <input type="submit" />
      </form>
    </div>
  )
}
