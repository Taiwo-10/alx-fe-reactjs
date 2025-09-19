import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]); // store multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUserData(query);

      // If the API returns a single user (users endpoint)
      if (data && data.login) {
        setUsers([data]); // put it in an array so we can use map
      }
      // If the API returns multiple users (search endpoint)
      else if (data && data.items) {
        setUsers(data.items);
      } else {
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub user..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded px-3 py-2 flex-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="font-bold">{user.login}</h2>
              {user.html_url && (
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
