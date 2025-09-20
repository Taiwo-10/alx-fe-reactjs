import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
