import API from "../_api";

export const getGenres = async () => {
  try {
    const { data } = await API.get("/genres");
    return data.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};

export const createGenre = async (genreData) => {
  try {
    const response = await API.post("/genres", genreData);
    return response.data;
  } catch (error) {
    console.error("Error creating genre:", error);
    throw error;
  }
};

export default createGenre;
