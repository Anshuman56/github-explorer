# GitHub Explorer

Search any GitHub username and see their profile and top repositories.

[Live Demo](https://github-explorer-green-delta.vercel.app/)
![Alt text](image.png "Screen Shot")

## Features List

- Search any GitHub user by username
- View profile info, bio, and stats
- See top repositories sorted by stars
- Handles loading and error states
  Responsive design — works on mobile

## Tech stack

Built with React, Vite, and the GitHub REST API.

What I learned
Building this taught me how to manage three states for an async operation — loading, error, and data — using useEffect and the fetch API. I also learned the importance of cleanup in effects to prevent memory leaks when users search rapidly.

## How to run it locally

````git clone [https://github.com/Anshuman56/github-explorer]
cd github-explorer
npm install
npm run dev```
````
