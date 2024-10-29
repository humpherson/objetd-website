// app/blog/page.js
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Introduction to Web Design",
    description:
      "An overview of the fundamentals of web design and best practices.",
    slug: "introduction-to-web-design",
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    description:
      "A beginner-friendly guide to building fast, scalable web applications with Next.js.",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 3,
    title: "Designing for Accessibility",
    description:
      "Best practices for making your designs accessible to all users.",
    slug: "designing-for-accessibility",
  },
  // Add more blog posts as needed
];

export default function BlogPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
        <section>
          <ul className="space-y-6">
            {blogPosts.map((post) => (
              <li key={post.id} className="border-b pb-4 mb-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-2xl font-bold text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-gray-700 mt-2">{post.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
