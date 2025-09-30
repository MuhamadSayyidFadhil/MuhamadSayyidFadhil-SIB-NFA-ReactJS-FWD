import books from "../../../utils/books";

export default function Product() {
  const bestSeller = books.slice(0, 3);

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller Book</h1>
            <p className="lead text-muted">
              Koleksi buku pilihan terbaik kami. Cocok untuk menemani waktu
              luangmu dan menambah wawasan.
            </p>
            <p>
              <a href="/books" className="btn btn-primary my-2 m-2">
                View All Books
              </a>
              <a href="/books" className="btn btn-secondary my-2">
                Other Books
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {bestSeller.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="bd-placeholder-img card-img-top"
                    alt={book.title}
                    style={{ height: "225px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">{book.author}</p>
                    <p className="fw-bold">Rp {book.price.toLocaleString()}</p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                        >
                          Detail
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-success"
                        >
                          Beli
                        </button>
                      </div>
                      <small className="text-muted">Best Seller</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}