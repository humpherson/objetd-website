// app/experience/page.js
import Link from "next/link";
import Image from "next/image";

const workProjects = [
  {
    id: 1,
    title: "Project Management System Development",
    description:
      "Developed a project management tool to streamline workflows and improve team collaboration.",
    slug: "project-management-system-development",
  },
  {
    id: 2,
    title: "UX/UI Redesign for SaaS Application",
    description:
      "Redesigned the user interface for a SaaS platform, improving user engagement and satisfaction.",
    slug: "ux-ui-redesign-saas-application",
  },
  {
    id: 3,
    title: "Custom Analytics Dashboard",
    description:
      "Created a custom analytics dashboard to provide actionable insights for business stakeholders.",
    slug: "custom-analytics-dashboard",
  },
];

const skills = [
  "UX/UI Design",
  "Frontend Development (React, Next.js, Tailwind CSS)",
  "Data Visualization and Analytics",
  "Project Management and Collaboration",
];

const featuredPortfolioItems = [
  {
    id: 1,
    title: "E-Commerce Website Redesign",
    description: "Enhanced UX for a large e-commerce platform.",
    slug: "ecommerce-website-redesign",
  },
  {
    id: 2,
    title: "Personal Blog Platform",
    description: "Developed a custom blogging platform with CMS features.",
    slug: "personal-blog-platform",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Built a data visualization dashboard for business intelligence.",
    slug: "analytics-dashboard",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express",
  "GraphQL",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "AWS",
  "Firebase",
  "Git",
  "Figma",
  "Adobe XD",
  // Add more technologies as needed
];

const workExperience = [
  {
    company: "Tech Solutions",
    logo: "/images/tech-solutions-logo.png",
    roles: [
      {
        title: "Senior UX Designer",
        dateRange: "Jan 2018 - Present",
        duration: "3 years, 10 months",
        description:
          "Led the UX/UI redesign for a major SaaS platform, improving user engagement by 20%.",
      },
      {
        title: "UX Designer",
        dateRange: "May 2016 - Jan 2018",
        duration: "1 year, 8 months",
        description:
          "Collaborated on design systems and improved usability for cross-platform applications.",
      },
    ],
  },
  {
    company: "Web Innovations",
    logo: "/images/web-innovations-logo.png",
    roles: [
      {
        title: "Frontend Developer",
        dateRange: "May 2015 - Dec 2017",
        duration: "2 years, 7 months",
        description:
          "Developed responsive web applications and optimized performance for faster loading times.",
      },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center mb-8">Experience</h1>

        {/* About Me */}
        <section className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            I’m Dan Humpherson, a passionate developer and designer with a
            strong focus on user experience and innovative solutions. With years
            of experience in design and development, I strive to create
            impactful digital products.
          </p>
        </section>

        {/* Skills */}
        <section className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Work Experience with Timeline */}
        <section className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((company, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Company Logo */}
                <Image
                  src={company.logo}
                  alt={`${company.company} logo`}
                  width={50}
                  height={50}
                  className="rounded-full border"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{company.company}</h3>
                  <div className="space-y-6 mt-4">
                    {company.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className="border-l-4 pl-4 border-blue-500"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-bold">{role.title}</h4>
                          <span className="text-sm text-gray-500">
                            {role.dateRange}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 italic">
                          {role.duration}
                        </p>
                        <p className="text-gray-700 mt-2">{role.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology - Tag Cloud */}
        <section className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Technology</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Portfolio Items */}
        <section className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Featured Portfolio Items</h2>
          <ul className="space-y-6">
            {featuredPortfolioItems.map((item) => (
              <li key={item.id} className="border-b pb-4 mb-4">
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="text-xl font-semibold text-blue-600 hover:underline"
                >
                  {item.title}
                </Link>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
