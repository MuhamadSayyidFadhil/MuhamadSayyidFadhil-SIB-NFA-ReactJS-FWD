import { useState } from "react";
import booksData from "../utils/books";

export default function Books() {
  const [bookList, setBookList] = useState(booksData);

  const tambahBuku = () => {
    const bukuBaru = {
      id: bookList.length + 1,
      title: "Buku Baru " + (bookList.length + 1),
      author: "Penulis Tidak Diketahui",
      price: 50000,
      image: "https://via.placeholder.com/150x200.png?text=Buku+Baru",
    };
    setBookList([...bookList, bukuBaru]);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Koleksi Buku</h2>
      <button onClick={tambahBuku} className="btn btn-success mb-4">
        Tambah Buku
      </button>
      <div className="row">
        {bookList.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">Oleh {book.author}</p>
                <p className="fw-bold">Rp {book.price.toLocaleString()}</p>
                <button className="btn btn-primary">Beli Sekarang</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
