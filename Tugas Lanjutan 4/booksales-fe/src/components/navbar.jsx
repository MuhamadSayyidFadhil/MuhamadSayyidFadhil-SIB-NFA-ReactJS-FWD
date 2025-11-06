import { Link, useNavigate } from "react-router-dom";
import { logout } from "../_services/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = async () => {
    if (token) {
      await logout({ token });
      localStorage.removeItem("userInfo");
    }
    navigate("/login");
  };
  return (
    <header className="shadow-sm sticky top-0 z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
              className="mr-3 h-8 sm:h-10"
              alt="TokoBuku Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-indigo-700 dark:text-white">
              TokoBuku
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            {token && userInfo ? (
              <>
                <Link
                  to={"/"}
                  className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition"
                >
                  {userInfo.name}
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-4 py-2 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition"
                >
                  Masuk
                </Link>

                <Link
                  to="/register"
                  className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-4 py-2 transition"
                >
                  Bergabung
                </Link>
              </>
            )}
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-700 lg:p-0 dark:text-gray-300 dark:hover:text-white transition"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-700 lg:p-0 dark:text-gray-300 dark:hover:text-white transition"
                >
                  Buku Terlaris
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-700 lg:p-0 dark:text-gray-300 dark:hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-700 lg:p-0 dark:text-gray-300 dark:hover:text-white transition"
                >
                  Layanan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
