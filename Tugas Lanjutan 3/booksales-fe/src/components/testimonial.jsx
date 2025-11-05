export default function Testimonial() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-12 mx-auto text-center lg:py-20 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-4 text-indigo-500 dark:text-indigo-400"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>

          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              “Belanja buku di <span className="text-indigo-600 font-semibold">TokoBuku</span> 
              sangat menyenangkan! Koleksinya lengkap, pengiriman cepat, dan kualitas bukunya selalu terjaga. 
              Sekarang saya bisa membaca novel favorit kapan pun tanpa repot keluar rumah.”
            </p>
          </blockquote>

          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://i.pravatar.cc/100?img=12"
              alt="Foto pelanggan"
            />
            <div className="flex items-center divide-x-2 divide-gray-400 dark:divide-gray-700">
              <div className="pr-3 font-semibold text-gray-900 dark:text-white">
                Aulia Rahma
              </div>
              <div className="pl-3 text-sm font-light text-gray-600 dark:text-gray-400">
                Pembaca & Pelanggan Setia
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
