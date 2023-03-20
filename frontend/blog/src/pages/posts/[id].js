import { loadPosts } from "@/lib/load-posts"
import { loadSpecificPost } from "../../lib/load-specific-post"
import Navbar from "../../components/Navbar"
import Title from "@/components/Title"

export default function BlogPage({ post }) {
  return (
    <div className="h-screen">
      <header>
        <Navbar />
        <Title />
      </header>
      <main className="flex justify-center items-center flex-col my-32">
        <div className="text-4xl xl:text-5xl p-8">{post.title}</div>
        <p className="text-sm">written by {post.author}</p>
        <p className="my-12 max-w-screen-lg p-8">{post.content}</p>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const allBlogPosts = await loadPosts()

  const paths = allBlogPosts.map((blogPost) => ({
    params: {
      id: blogPost._id,
    },
  }))
  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const post = await loadSpecificPost(id)

  return {
    props: { post },
  }
}
