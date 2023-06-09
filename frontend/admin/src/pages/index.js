import Head from "next/head"
import Card from "@/components/Card"
import Link from "next/link"

export default function Home({ data }) {
  const fetchedPostCards = data.map((post) => {
    return (
      <li key={post._id}>
        <Card
          title={post.title}
          author={post.author}
          id={post._id}
          published={post.isPublished}
        />
      </li>
    )
  })

  return (
    <>
      <Head>
        <title>Blog Admin Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="m-8 text-3xl font-bold underline">Blog Admin Page</h1>
        <Link className="btn-primary btn m-8" href="/create">
          Create new post
        </Link>
        <ul className="m-8 flex flex-wrap gap-8">{fetchedPostCards}</ul>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_HOST + "/posts/")
  const data = await res.json()

  return { props: { data } }
}
