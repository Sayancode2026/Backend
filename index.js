require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

//https://api.github.com/users/Sayancode2026
const githubData= {"login": "Sayancode2026",
"id": 212570146,
"node_id": "U_kgDODKuQIg",
"avatar_url": "https://avatars.githubusercontent.com/u/212570146?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/Sayancode2026",
"html_url": "https://github.com/Sayancode2026",
"followers_url": "https://api.github.com/users/Sayancode2026/followers",
"following_url": "https://api.github.com/users/Sayancode2026/following{/other_user}",
"gists_url": "https://api.github.com/users/Sayancode2026/gists{/gist_id}",
"starred_url": "https://api.github.com/users/Sayancode2026/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/Sayancode2026/subscriptions",
"organizations_url": "https://api.github.com/users/Sayancode2026/orgs",
"repos_url": "https://api.github.com/users/Sayancode2026/repos",
"events_url": "https://api.github.com/users/Sayancode2026/events{/privacy}",
"received_events_url": "https://api.github.com/users/Sayancode2026/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": null,
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": null,
"twitter_username": null,
"public_repos": 14,
"public_gists": 0,
"followers": 1,
"following": 3,
"created_at": "2025-05-20T14:49:26Z",
"updated_at": "2026-07-03T18:24:04Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res)=>{
  res.send('sayandotcom')
})

app.get('/login',(req,res)=>{
     res.send('<h1>please login at sayandotcom</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send('<h2>please subscribe runtime decoded</h2>')
});

app.get('/github', (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});