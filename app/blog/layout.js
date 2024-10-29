// app/work/blog.js
export default function BlogLayout({ children }) {
  return (
    <section className="blog-layout bg-gray-50 p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      {children}
    </section>
  );
}
