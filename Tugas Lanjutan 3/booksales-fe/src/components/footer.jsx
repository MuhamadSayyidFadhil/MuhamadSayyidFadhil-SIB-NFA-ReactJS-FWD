import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-2 bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        {/* NAVIGATION LINKS */}
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <Link to="/" className="mx-4 hover:text-indigo-600 hover:underline transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="mx-4 hover:text-indigo-600 hover:underline transition">
              Buku Terlaris
            </Link>
          </li>
          <li>
            <Link to="/blog" className="mx-4 hover:text-indigo-600 hover:underline transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/services" className="mx-4 hover:text-indigo-600 hover:underline transition">
              Layanan
            </Link>
          </li>
        </ul>

        {/* COPYRIGHT */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link to="/" className="hover:underline font-semibold text-indigo-600">
            TokoBuku
          </Link>
          . Semua Hak Dilindungi.
        </span>
      </div>
    </footer>
  );
}
