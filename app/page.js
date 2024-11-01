import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import recentProjectData from "./experience/recentProjectData";

export const metadata = {
  title: "Dan Humpherson",
  description: "Experience Design Specialist.",
  openGraph: {
    title: "Dan Humpherson",
    description: "Experience Design Specialist.",
    url: "https://objetd.co.uk", // Replace with your actual URL
    images: [
      {
        url: "/images/work-og-image.jpg", // Replace with your OG image path
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

const brandLogos = [
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
  "/logos/logo-capita.png",
];

const employers = [
  {
    id: 1,
    name: "Company A",
    logo: "/logos/logo-capita.png",
    dateRange: "Nov 2007 - Jan 2019",
    description: "Led design and development projects for enterprise clients.",
  },
  {
    id: 2,
    name: "Company B",
    logo: "/logos/logo-capita.png",
    dateRange: "Feb 2019 - May 2021",
    description: "Managed UX/UI improvements for SaaS products.",
  },
  {
    id: 3,
    name: "Company C",
    logo: "/logos/logo-capita.png",
    dateRange: "Jun 2021 - Aug 2022",
    description: "Collaborated on frontend solutions for e-commerce platforms.",
  },
  {
    id: 4,
    name: "Company D",
    logo: "/logos/logo-capita.png",
    dateRange: "Sep 2022 - Present",
    description:
      "Led design initiatives to improve accessibility and usability.",
  },
  // Add more employers as needed
];

// Filter for the last 4 employers
const recentEmployers = employers.slice(-4);

export default function Home() {
  return (
    <main>
      <div className="p-8 sm:p-20 bg-none shadow">
        <div className="flex flex-col gap-0 items-start sm:items-start w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-600">Hello</h2>
        </div>
      </div>

      <div className="p-8 sm:p-20 bg-teal-500 shadow-md">
        <div className="flex flex-col gap-8 items-start sm:items-start w-full max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-2 sm:mb-8 text-white">
            Experience
          </h1>
          <section className="w-full max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-100">About Me</h2>
            <p className="text-gray-200 pb-4">
              I’m Dan Humpherson, a seasoned and affable solution leader, I
              bring a proven ability to communicate effectively with customers,
              colleagues, and stakeholders at all levels, earning credibility
              through my actions and results. I excel as a collaborative team
              player, capable of delivering innovative solutions even in
              complex, fast-paced, or less-than-ideal conditions.
            </p>
            <p className="text-gray-200 pb-4">
              My enthusiasm for achieving exceptional outcomes is matched by a
              meticulous attention to detail, ensuring that no aspect of a
              project is overlooked. With strong emotional intelligence, I build
              trusted relationships and foster a supportive, high-performance
              culture, whether working independently or leading cross-functional
              and remote teams.
            </p>
            <p className="text-gray-200 pb-4">
              I thrive in both independent roles and team-driven environments,
              consistently meeting tight deadlines and delivering results. My
              ability to manage global teams, including close collaboration with
              remote teams, is underpinned by a flexible and adaptable approach.
            </p>
            <p className="text-gray-200 pb-4">
              As a lifelong learner, I am committed to continually broadening my
              knowledge and skillset to stay at the forefront of evolving
              technologies and business challenges. Happiest when empowered to
              lead under my own direction, I am fully confident in providing
              strategic solutions that align with business goals, while also
              leveraging support when necessary to ensure optimal outcomes.
            </p>
            <div className="mt-6 space-x-4">
              <a
                href="/documents/Dan_Humpherson_CV_Latest.pdf"
                download
                className="mb-4 sm:mb-0 inline-flex items-center px-5 py-3 bg-white text-slate-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-200"
              >
                <FaDownload className="mr-2" />
                View experience
              </a>
              <a
                href="/documents/Dan_Humpherson_CV_Latest.pdf"
                download
                className="mb-4 sm:mb-0 inline-flex items-center px-5 py-3 bg-white text-slate-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-200"
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="p-8 sm:p-20 bg-none shadow-md">
        <div className="flex flex-col gap-8 items-end sm:items-end w-full max-w-5xl mx-auto">
          <section className="w-full max-w-6xl mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Column: Heading and Paragraph */}
              <div>
                <h1 className="text-5xl sm:text-6xl mb-2 sm:mb-8 text-slate-600">
                  Previous Employers
                </h1>
                <p className="text-gray-700">
                  Here is a selection of the companies I’ve had the pleasure of
                  working with, where I contributed my skills in various roles
                  and helped deliver impactful projects.
                </p>
              </div>

              {/* Second Column: 2 Columns for Employers */}
              <div className="grid grid-cols-2 gap-4">
                {recentEmployers.map((employer) => (
                  <div
                    key={employer.id}
                    className="p-4 bg-gray-100 rounded-lg shadow-md flex items-start"
                  >
                    {/* Left Column: Logo */}
                    <div className="w-48 h-48 mr-4">
                      <img
                        src={employer.logo}
                        alt={employer.name}
                        className="w-full rounded-full object-contain"
                      />
                    </div>

                    {/* Right Column: Company Name, Date, Description */}
                    <div className="flex flex-col">
                      <p className="text-gray-800 font-semibold">
                        {employer.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {employer.dateRange}
                      </p>
                      <p className="text-gray-600 text-xs mt-2">
                        {employer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="p-8 sm:p-20 bg-none">
        <div className="flex flex-col gap-0 items-start sm:items-start w-full max-w-5xl mx-auto">
          <section className="w-full max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-slate-600 text-center">
              Recent Projects
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full">
              {recentProjectData.map((project) => (
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
            <div className="mt-12 text-right">
              <a
                href="/documents/Dan_Humpherson_CV_Latest.pdf"
                download
                className="mb-4 sm:mb-0 inline-flex items-center px-5 py-3 bg-white text-slate-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-200"
              >
                <FaDownload className="mr-2" />
                View all projects
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="p-8 sm:p-20 bg-slate-100">
        <div className="flex flex-col gap-0 items-center sm:items-center w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-600">
            Organisations I've worked with …
          </h2>
          <section className="w-full max-w-6xl mx-auto py-12">
            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 grid-rows-2 gap-8">
              {brandLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-4 bg-none border border-slate-300 rounded-lg"
                >
                  <img
                    src={logo}
                    alt={`Brand logo ${index + 1}`}
                    className="grayscale opacity-50 max-h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="p-8 sm:p-20 pb-20">
        <div className="flex flex-col gap-8 items-start sm:items-start w-full max-w-5xl mx-auto">
          <section className="w-full max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-600">
              Recent Blog Posts
            </h2>
            <div className="mt-12 text-left">
              <a
                href="/documents/Dan_Humpherson_CV_Latest.pdf"
                download
                className="mb-4 sm:mb-0 inline-flex items-center px-5 py-3 bg-white text-slate-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-200"
              >
                <FaDownload className="mr-2" />
                View all posts
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
