// app/work/layout.js
export default function WorkLayout({ children }) {
  return (
    <section className="work-layout bg-gray-50 p-6">
      <h1 className="text-3xl font-bold">My Work</h1>
      {children}
    </section>
  );
}
