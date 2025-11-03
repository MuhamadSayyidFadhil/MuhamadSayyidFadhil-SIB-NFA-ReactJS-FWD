import { API } from "../_api";

export const getAuthors = async () => {
  try {
    const { data } = await API.get("/authors");
    return data.data;
  } catch (error) {
    console.log("Error fetching authors:", error);
    throw error;
  }
};

export const createAuthor = async (authorData) => {
  try {
    const response = await API.post("/authors", authorData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.log("Error creating author:", error);
    throw error;
  }
};

export const showAuthor = async (Id) => {
  try {
    const { data } = await API.get(`/authors/${Id}`);
    return data.data;
  } catch (error) {
    console.log("Error fetching author:", error);
    throw error;
  }
};

export const updateAuthor = async (Id, data) => {
  try {
    const response = await API.post(`/authors/${Id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.log("Error updating author:", error);
    throw error;
  }
};

export const deleteAuthor = async (Id) => {
  try {
    await API.delete(`/authors/${Id}`);
  } catch (error) {
    console.log("Error deleting author:", error);
    throw error;
  }
};

export default getAuthors;
