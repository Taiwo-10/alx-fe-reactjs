import axios from "axios";

const BASE_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
