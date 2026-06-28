import { useEffect, useState } from "react";
import User from "./user";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState("torvalds");
  const [user, setUser] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      setError("");
      setUser(null);
      setUserRepos([]);

      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${userName}`),
          fetch(`https://api.github.com/users/${userName}/repos`),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("User not found.");
        }

        const [userData, reposData] = await Promise.all([
          userResponse.json(),
          reposResponse.json(),
        ]);

        if (!ignore) {
          setUser(userData);
          setUserRepos(reposData);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [userName]);

  function handleSubmit(e) {
    e.preventDefault();

    const value = inputValue.trim();

    if (value === "") return;

    setUserName(value);
  }

  return (
    <div className="card">
      <h1>github explorer</h1>
      <h2>Find any GitHub user</h2>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          className="inputText"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}
      {console.log(userRepos)}
      {!loading && !error && user && userRepos && (
        <User userData={user} userRepos={userRepos} />
      )}
    </div>
  );
}
