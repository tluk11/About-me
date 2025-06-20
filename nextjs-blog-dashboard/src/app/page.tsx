import Link from "next/link";
import { posts } from "../../data/posts";
export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-20 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">Blog Dashboard</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-600 underline text-lg hover:text-blue-800"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
