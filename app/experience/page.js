// app/experience/page.js
import Link from "next/link";
import Image from "next/image";
import workExperienceData from "./workExperienceData";
import skillsData from "./skillsData";
import technologiesData from "./technologiesData";
import recentProjectData from "./recentProjectData";
import { FaDownload } from "react-icons/fa";

export const metadata = {
  title: "Dan Humpherson",
  description: "Experience Design Specialist.",
  openGraph: {
    title: "Dan Humpherson",
    description: "Experience Design Specialist.",
    url: "https://objetd.co.uk",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function ExperiencePage() {
  return (
    <main>
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
            <div className="mt-6">
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

      <div className="min-h-screen p-8 sm:p-20 pb-20">
        <div className="flex flex-col gap-8 items-start sm:items-start w-full max-w-5xl mx-auto">
          <section className="w-full max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-2 sm:mb-8 text-slate-600">
              Work Experience
            </h2>
            <div className="space-y-8">
              {workExperienceData.map((company, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Image
                    src={company.logo}
                    alt={`${company.company} logo`}
                    width={50}
                    height={50}
                    className="rounded-full border"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-500 pt-2">
                      {company.company}
                    </h3>
                    <div className="space-y-6 mt-4">
                      {company.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="border-l-4 pl-4 border-teal-600 border-opacity-25 pb-2"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-medium text-slate-600 pb-1">
                              {role.title}
                            </h4>
                            <span className="text-sm text-slate-500">
                              {role.dateRange}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500">
                            {role.duration}
                          </p>
                          {role.description
                            .split(" / ")
                            .map((line, lineIndex) => (
                              <p
                                key={lineIndex}
                                className="text-slate-600 mt-2 text-sm"
                              >
                                {line.trim()}
                              </p>
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full max-w-3xl mb-6">
            <h2 className="text-3xl font-bold mb-4 text-slate-600">
              Education
            </h2>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-teal-500 pt-2">
                Hamstead Hall School
              </h3>
              <span className="text-sm text-slate-500">
                Sep 1995 - Jul 2000
              </span>
            </div>
            <div className="space-y-6 mt-4">
              <div className="pb-1 border-l-4 pl-4 border-teal-600 border-opacity-25">
                <h4 className="text-md font-medium text-slate-600 pb-1">
                  9 GCSEs (including Maths, English and Science)
                </h4>
                <p className="text-slate-600 mt-2 text-sm">
                  English Literature (A), English Language (B), Maths (C),
                  Science (C / C), French (D), Geography (B), History (E) & Food
                  Technology (A)
                </p>
              </div>
            </div>
          </section>

          <section className="w-full max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-600">
              Technology & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesData
                .slice()
                .sort((a, b) => a.localeCompare(b))
                .map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 border-2 border-teal-600 border-opacity-25 bg-teal-50 text-teal-500 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </section>

          <section className="w-full max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-600">
              Skills & Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              {skillsData.map((skillsCategory, index) => (
                <div key={index} className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-teal-500 mb-4">
                    {skillsCategory.category}
                  </h3>
                  <ul className="list-disc list-aligned space-y-2 pl-4">
                    {skillsCategory.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-600 text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="w-full max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-slate-600">
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
          </section> */}
        </div>
      </div>
    </main>
  );
}
