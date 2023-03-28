import { loadPosts } from "@/lib/load-posts"
import { loadSpecificPost } from "../../lib/load-specific-post"
import Navbar from "../../components/Navbar"
import Title from "@/components/Title"
import Comments from "@/components/Comments"
import Footer from "@/components/Footer"

export default function BlogPage({ post, id }) {
  return (
    <div className="h-screen">
      <header>
        <Navbar />
        <Title />
      </header>
      <main className="my-32 flex flex-col items-center justify-center">
        <div className="p-8 text-4xl xl:text-5xl">{post.title}</div>
        <p className="text-sm">written by {post.author}</p>
        <p className="my-12 max-w-screen-lg p-8">{post.content}</p>
        <div className="rounded bg-base-200 p-8">
          <div className="border-b text-2xl ">Comments</div>
          <Comments id={id} />
        </div>
      </main>
      <Footer />
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
    props: { post, id },
  }
}
