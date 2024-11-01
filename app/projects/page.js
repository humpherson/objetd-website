// app/projects/page.js
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website Redesign",
    description: "Redesign to improve user experience and conversions.",
    slug: "example",
    thumbnail: "/projects/example/project-example-1.png",
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Personal Blog Platform",
    description: "Responsive blog platform with custom CMS.",
    slug: "personal-blog-platform",
    thumbnail: "/projects/example/project-example-1.png",
    color: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    id: 3,
    title: "Project Website",
    description: "Website to showcase my projects and expertise.",
    slug: "project-website",
    thumbnail: "/projects/example/project-example-1.png",
    color: "bg-purple-500",
    textColor: "text-purple-500",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <div className="p-8 sm:p-20 bg-teal-500 shadow-md">
        <div className="flex flex-col gap-8 items-start sm:items-start w-full max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-2 sm:mb-8 text-white">
            Projects
          </h1>
        </div>
      </div>

      <div className="min-h-screen p-8 sm:p-20 pb-20">
        <div className="flex flex-col gap-8 items-start sm:items-start w-full max-w-5xl mx-auto">
          <section className="w-full max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-slate-600">
              Recent Projects
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className={`w-full h-48 ${project.color}`}>
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3
                        className={`text-xl font-bold pt-2 ${project.textColor}`}
                      >
                        {project.title}
                      </h3>

                      <p className="text-slate-600 mt-2 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
