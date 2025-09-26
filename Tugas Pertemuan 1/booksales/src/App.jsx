function App() {
  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none me-2"
            >
              <i className="fa-solid fa-book" style={{ color: "#74C0FC" }}></i>
            </a>
            <span className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              Bookstore
            </span>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="#team" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>

        {/* Hero Section */}
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

        {/* Product */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller Book</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">
                  Views
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Other Book
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Our Team</h2>
              <p className="text-muted">
                Meet the people behind this bookstore project.
              </p>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              <div className="col">
                <div className="card shadow-sm h-100 text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text text-muted">Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100 text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Jane Smith</h5>
                    <p className="card-text text-muted">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100 text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/85.jpg"
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Michael Lee</h5>
                    <p className="card-text text-muted">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-5">
          <h2 className="pb-2 border-bottom text-center">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="p-4 shadow rounded bg-light">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">
              &copy; 2024 NF Academy
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
