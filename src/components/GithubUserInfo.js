import { useEffect, useState } from "react";
import axios from "axios";

function GithubUserInfo({ username }) {
  const [userData, setUserDate] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserDate(response.data);
      } catch (e) {
        console.error("error fetching user data: ", e);
      }
    };
    fetchUserData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>
      <p>Company: {userData.company}</p>
    </div>
  );
}

export default GithubUserInfo;
