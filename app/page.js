// app/page.js
"use client";

import { redirect } from "next/navigation";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

// export const metadata = {
//   title: "Dan Humpherson",
//   description: "Experience Design Specialist.",
//   openGraph: {
//     title: "Dan Humpherson",
//     description: "Experience Design Specialist.",
//     url: "https://objetd.co.uk",
//     images: [
//       {
//         url: "/images/work-og-image.jpg",
//         width: 800,
//         height: 600,
//       },
//     ],
//     type: "website",
//   },
// };

const brandLogos = [
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
  "/logos/logo-cloudThing.png",
];

const employers = [
  {
    id: 1,
    name: "Company A",
    logo: "/logos/logo-cloudThing.png",
    dateRange: "Nov 2007 - Jan 2019",
    description: "Led design and development projects for enterprise clients.",
  },
  {
    id: 2,
    name: "Company B",
    logo: "/logos/logo-cloudThing.png",
    dateRange: "Feb 2019 - May 2021",
    description: "Managed UX/UI improvements for SaaS products.",
  },
  {
    id: 3,
    name: "Company C",
    logo: "/logos/logo-cloudThing.png",
    dateRange: "Jun 2021 - Aug 2022",
    description: "Collaborated on frontend solutions for e-commerce platforms.",
  },
  {
    id: 4,
    name: "Company D",
    logo: "/logos/logo-cloudThing.png",
    dateRange: "Sep 2022 - Present",
    description:
      "Led design initiatives to improve accessibility and usability.",
  },
];

const recentEmployers = employers.slice(-4);

export default function Home() {
  const isPageReady = false;

  if (!isPageReady) {
    redirect("/experience");
  }

  return (
    <main>
      {/* Introduction Section */}
      <div className="p-8 sm:p-20 bg-none shadow">
        <div className="flex flex-col gap-0 items-start sm:items-start w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-600">Hello</h2>
        </div>
      </div>

      {/* Experience Section */}
      <div className="p-8 sm:p-20 bg-teal-500 shadow-md">
        <div className="flex flex-col gap-8 items-start sm:items-start w-full max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-2 sm:mb-8 text-white">
            Experience
          </h1>
          <section className="w-full max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-100">About Me</h2>
            <p className="text-gray-200 pb-4">
              I’m Dan Humpherson, a seasoned and affable solution leader.
            </p>
            <div className="mt-6 space-x-4">
              {/* <a
                href="/documents/Dan_Humpherson_CV_Latest.pdf"
                download
                className="mb-4 sm:mb-0 inline-flex items-center px-5 py-3 bg-white text-slate-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-200"
              >
                <FaDownload className="mr-2" />
                View experience
              </a> */}
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

      {/* Employers Section */}
      <div className="p-8 sm:p-20 bg-none shadow-md">
        <div className="flex flex-col gap-8 items-end sm:items-end w-full max-w-5xl mx-auto">
          <section className="w-full max-w-6xl mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-5xl sm:text-6xl mb-2 sm:mb-8 text-slate-600">
                  Previous Employers
                </h1>
                <p className="text-gray-700">
                  Here is a selection of the companies I’ve worked with.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {recentEmployers.map((employer) => (
                  <div
                    key={employer.id}
                    className="p-4 bg-gray-100 rounded-lg shadow-md flex items-start"
                  >
                    <div className="w-16 h-16 mr-4">
                      <Image
                        src={employer.logo}
                        alt={employer.name}
                        width={64}
                        height={64}
                        className="rounded-full object-contain"
                      />
                    </div>
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

      {/* Brand Logos */}
      <div className="p-8 sm:p-20 bg-slate-100">
        <div className="flex flex-col gap-0 items-center sm:items-center w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-600">
            Organisations I&apos;ve worked with …
          </h2>
          <section className="w-full max-w-6xl mx-auto py-12">
            <div className="grid grid-cols-2 sm:grid-cols-5 grid-rows-2 gap-8">
              {brandLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-4 bg-none border border-slate-300 rounded-lg"
                >
                  <Image
                    src={logo}
                    alt={`Brand logo ${index + 1}`}
                    width={100}
                    height={100}
                    className="grayscale opacity-50 max-h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
