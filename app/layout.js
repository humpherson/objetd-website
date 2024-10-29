// app/layout.js
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

// Separate `viewport` export
export const generateViewport = () => "width=device-width, initial-scale=1";

// Metadata for favicon
export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const GA_ID = "G-32Y5QDKPJ7"; // Replace with your actual Google Analytics ID

  return (
    <html lang="en">
      <head />
      <body>
        {/* Google Analytics Scripts */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Page Structure */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
