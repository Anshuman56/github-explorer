export default function Repos({ repos }) {
  const topRepos = repos.slice(0, 2);
  console.log(topRepos);
  return (
    <>
      <h4>Top Repos</h4>
      {topRepos.map((repo) => (
        <div className="repo-card">
          <h3 className="repo-name">
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
          </h3>

          <p className="repo-description">{repo.description}</p>

          <div className="repo-info">
            <span>★ {(repo.stargazers_count / 1000).toFixed(1)}k</span>
            <span>• {repo.language}</span>
          </div>
        </div>
      ))}
    </>
  );
}
