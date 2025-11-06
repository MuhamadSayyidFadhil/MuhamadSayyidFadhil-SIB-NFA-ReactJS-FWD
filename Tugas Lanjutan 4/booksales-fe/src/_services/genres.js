import { API } from "../_api";

export const getGenres = async () => {
  try {
    const { data } = await API.get("/genres");
    return data.data;
  } catch (error) {
    console.log("Error fetching genres:", error);
    throw error;
  }
};

export const showGenre = async (id) => {
  try {
    const { data } = await API.get(`/genres/${id}`);
    return data.data;
  } catch (error) {
    console.log("Error fetching genre detail:", error);
    throw error;
  }
};

export const createGenre = async (genreData) => {
  try {
    const response = await API.post("/genres", genreData);
    return response.data;
  } catch (error) {
    console.log("Error creating genre:", error);
    throw error;
  }
};

export const updateGenre = async (id, genreData) => {
  try {
    const response = await API.put(`/genres/${id}`, genreData);
    return response.data;
  } catch (error) {
    console.log("Error updating genre:", error);
    throw error;
  }
};

export const deleteGenre = async (id) => {
  try {
    await API.delete(`/genres/${id}`);
  } catch (error) {
    console.log("Error deleting genre:", error);
    throw error;
  }
};

export default getGenres;
