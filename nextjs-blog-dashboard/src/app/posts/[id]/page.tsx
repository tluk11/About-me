import { posts } from "../../../../data/posts";

interface PostPageProps {
  params: { id: string };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find(p => p.id === params.id);

  if (!post) {
    return <div className="p-8">Post not found</div>;
  }

  return (
    <main className="min-h-screen p-8 sm:p-20 font-sans">
      <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </main>
  );
}
