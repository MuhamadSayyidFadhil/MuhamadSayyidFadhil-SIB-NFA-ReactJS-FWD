export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            Temukan <span className="text-indigo-600">Buku Favoritmu</span> di Sini 📚
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            Jelajahi ribuan koleksi buku dari berbagai genre — fiksi, non-fiksi, hingga buku pelajaran.
            Semua bisa kamu temukan dengan mudah hanya di <span className="font-semibold text-indigo-600">TokoBuku</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/books"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-base font-medium shadow-md transition"
            >
              Buku Terlaris
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
            alt="Books illustration"
            className="w-80 h-auto mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
