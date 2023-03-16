import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Working Title Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar />
        <div className="m-14">
          <h1 className="text-8xl">Lorem Ipsum</h1>
        </div>
        <div className="my-12 mx-10 flex justify-center gap-8">
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </div>
  )
}
