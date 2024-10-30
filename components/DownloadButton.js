// components/DownloadButton.js
import { FaDownload } from "react-icons/fa";

export default function DownloadButton() {
  return (
    <div className="m-8">
      <a
        href="/cv.pdf" // Path to your CV file in the public directory
        download
        className="font-inter bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-center space-x-4 w-auto sm:w-auto sm:max-w-xs sm:mx-auto text-center"
      >
        <FaDownload className="text-lg" />
        <span>Download my CV</span>
      </a>
    </div>
  );
}
