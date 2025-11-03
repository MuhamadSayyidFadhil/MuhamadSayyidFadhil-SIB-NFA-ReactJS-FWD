import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createGenre from "../../../_services/genres";

export default function GenreCreate() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createGenre({ name });
      navigate("/admin/genres");
    } catch (error) {
      console.error(error);
      alert("Gagal menambah genre.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Tambah Genre Baru
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Genre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="Masukkan nama genre"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
}
