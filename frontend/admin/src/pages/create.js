import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

export default function CreatePost() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

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
      router.push("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1 className="m-8 text-3xl font-bold underline">New post form</h1>
      <form
        className=" m-8 flex max-w-sm flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("title")} placeholder="Title" />
        <input {...register("author")} placeholder="Author" />
        <textarea {...register("content")} placeholder="Content" />
        <input className="btn-primary btn" type="submit" />
      </form>
    </div>
  )
}
