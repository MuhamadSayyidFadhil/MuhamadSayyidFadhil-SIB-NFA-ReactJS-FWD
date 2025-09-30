export default function Hero() {
    return (
        <>
                <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            {/* Bagian Kiri (Teks) */}
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Atomic habits : An Easy & Proven Way to Build Good Habits &
                Break Bad Ones
              </h1>
              <p className="lead">
                Cara mudah & terbukti untuk membangun kebiasaan baik &
                menghancurkan kebiasaan buruk
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Detail
                </button>
              </div>
            </div>

            {/* Bagian Kanan (Gambar) */}
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/300x225.png?text=Book+Cover"
                className="card-img-top"
                alt="Book Cover"
              />
            </div>
          </div>
        </div>
        </>
    )
}