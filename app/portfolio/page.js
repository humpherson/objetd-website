// app/portfolio/page.js
import Link from "next/link";
import Image from "next/image"; // Using Image component for project thumbnails

const projects = [
  {
    id: 1,
    title: "E-Commerce Website Redesign",
    description: "Redesign to improve user experience and conversions.",
    slug: "ecommerce-website-redesign",
    thumbnail: "/images/ecommerce-thumbnail.jpg", // Add your image path here
  },
  {
    id: 2,
    title: "Personal Blog Platform",
    description: "Responsive blog platform with custom CMS.",
    slug: "personal-blog-platform",
    thumbnail: "/images/blog-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Portfolio to showcase my projects and expertise.",
    slug: "portfolio-website",
    thumbnail: "/images/portfolio-thumbnail.jpg",
  },
  // Add more projects as needed
];

export default function PortfolioPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-5xl">
        <h1 className="text-3xl text-center mb-8 text-teal-500">Portfolio</h1>

        {/* Project Cards */}
        <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Link href={`/portfolio/${project.slug}`}>
                {/* Thumbnail */}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-blue-600 hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mt-2 text-sm">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
