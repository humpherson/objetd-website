// app/work/portfolio.js
export default function PortfolioLayout({ children }) {
  return (
    <section className="portfolio-layout bg-gray-50 p-6">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      {children}
    </section>
  );
}
