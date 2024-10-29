import Image from "next/image";

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

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Home
      </main>
    </div>
  );
}
