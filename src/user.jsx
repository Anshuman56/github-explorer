import Repos from "./repos";

export default function User({ userData, userRepos }) {
  console.log(userData);
  return (
    <>
      <div className="header">
        <div className="avatar">{userData.login.slice(0, 2).toUpperCase()}</div>
        <div>
          <h3>{userData.name}</h3>
          <p className="tagline">@{userData.login}</p>
        </div>
      </div>
      <p className="bio">
        {userData.bio || "GitHub's friendly mascot, here to greet you."}
      </p>
      <hr />
      <div className="repo-follower">
        <div className="data">
          <p>{userData.public_repos}</p>
          <p>Repos</p>
        </div>
        <div className="data">
          <p>{(userData.followers / 1000).toFixed(1)}k</p>
          <p>Followers</p>
        </div>
        <div className="data">
          <p>{userData.following}</p>
          <p>Following</p>
        </div>
      </div>
      <hr />
      <Repos repos={userRepos} />
    </>
  );
}
