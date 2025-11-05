import { API } from "../_api";

export const getBooks = async () => {
  try {
    const { data } = await API.get("/books");
    return data.data;
  } catch (error) {
    console.log("Error fetching books:", error);
    throw error;
  }
};

export const createBook = async (bookData) => {
  try {
    const response = await API.post("/books", bookData);
    return response.data;
  } catch (error) {
    console.log("Error creating book:", error);
    throw error;
  }
};

export const showBook = async (Id) => {
  try {
    const { data } = await API.get(`/books/${Id}`);
    return data.data;
  } catch (error) {
    console.log("Error fetching book detail:", error);
    throw error;
  }
};

export const updateBook = async (Id, data) => {
  try {
    const response = await API.post(`/books/${Id}`, data);
    return response.data;
  } catch (error) {
    console.log("Error updating book:", error);
    throw error;
  }
};

export const deleteBook = async (Id) => {
  try {
    await API.delete(`/books/${Id}`);
  } catch (error) {
    console.log("Error deleting book:", error);
    throw error;
  }
};

export default createBook;
