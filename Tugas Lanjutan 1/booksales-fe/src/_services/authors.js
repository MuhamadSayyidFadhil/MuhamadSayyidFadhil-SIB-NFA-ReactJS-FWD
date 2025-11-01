import API from "../_api";

export const getAuthors = async () => {
  try {
    const { data } = await API.get("/authors");
    return data.data;
  } catch (error) {
    console.error("Error fetching authors:", error);
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
    console.error("Error creating author:", error);
    throw error;
  }
};

export default getAuthors;
