// app/experience/page.js
import Link from "next/link";
import Image from "next/image";
import workExperienceData from "./workExperienceData";
import skillsData from "./skillsData";
import technologiesData from "./technologiesData";
import featuredPortfolioItemsData from "./featuredPortfolioItemsData";

export default function ExperiencePage() {
  return (
    <main>
      {/* Opening */}
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
          </section>
        </div>
      </div>

      <div className="min-h-screen p-8 sm:p-20 pb-20">
        <div className="flex flex-col gap-8 items-start sm:items-start w-full max-w-5xl mx-auto">
          {/* Work Experience with Timeline */}
          <section className="w-full max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-600">
              Work Experience
            </h2>
            <div className="space-y-8">
              {workExperienceData.map((company, index) => (
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

                          {/* Render each line of the description as a separate paragraph */}
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

          {/* Technology - Tag Cloud */}
          <section className="w-full max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-600">
              Technology & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesData
                .slice() // Create a shallow copy to avoid mutating the original array
                .sort((a, b) => a.localeCompare(b)) // Sort alphabetically (A - Z)
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

          <section className="w-full max-w-5xl mb-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-600">
              Skills & Responsibilities
            </h2>

            {/* Container for two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {skillsData.map((skillsCategory, index) => (
                <div key={index} className="flex flex-col h-full">
                  {/* Category Header */}
                  <h3 className="text-xl font-bold text-teal-500 mb-4">
                    {skillsCategory.category}
                  </h3>

                  {/* Skills List */}
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

          {/* Featured Portfolio Items */}
          <section className="w-full max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-slate-600">
              Featured Portfolio Items
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full">
              {featuredPortfolioItemsData.map((project) => (
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
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
