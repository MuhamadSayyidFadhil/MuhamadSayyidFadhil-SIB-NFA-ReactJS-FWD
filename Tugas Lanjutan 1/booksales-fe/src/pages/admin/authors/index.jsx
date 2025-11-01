import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAuthors from "../../../_services/authors";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchData();
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Author List
          </h2>
          <Link
            to={"/admin/authors/create"}
            className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            + Tambah Author
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Foto</th>
                <th className="px-4 py-3">Bio</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {authors.length > 0 ? (
                authors.map((author) => (
                  <tr key={author.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">{author.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                      {author.name}
                    </td>
                    <td className="px-4 py-3">
                      {author.photo ? (
                        <img
                          src={`${import.meta.env.VITE_API_URL}/storage/${author.photo}`}
                          alt={author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                          N/A
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {author.bio || "-"}
                    </td>
                    <td className="px-4 py-3 flex items-center justify-end relative">
                      <button
                        onClick={() => toggleDropdown(author.id)}
                        className="inline-flex items-center p-0.5 text-sm text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>

                      {openDropdownId === author.id && (
                        <div className="absolute right-0 mt-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <Link
                                to={`/admin/authors/edit/${author.id}`}
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </Link>
                            </li>
                          </ul>
                          <div className="py-1">
                            <Link
                              to={`/admin/authors/delete/${author.id}`}
                              className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    Data tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
