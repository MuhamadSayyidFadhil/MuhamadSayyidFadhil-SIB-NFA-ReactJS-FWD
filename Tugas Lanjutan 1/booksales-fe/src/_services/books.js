import API from "../_api";

// Ambil semua buku
export const getBooks = async () => {
  try {
    const { data } = await API.get("/books");
    return data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// Tambah buku baru
export const createBook = async (bookData) => {
  try {
    const response = await API.post("/books", bookData);
    return response.data;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }
};

export default createBook;