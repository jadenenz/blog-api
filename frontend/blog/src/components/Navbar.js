import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Home
      </Link>
    </div>
  )
}
