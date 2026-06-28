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

## What I learned

"This was my first React app that talks to a real API. I struggled with handling the case where the user doesn't exist — I had to learn to check the response status before trying to use the data. I also got confused by useEffect cleanups (still working on that one)."

## How to run it locally

```
git clone [https://github.com/Anshuman56/github-explorer]
cd github-explorer
npm install
npm run dev
```
