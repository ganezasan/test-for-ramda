import fs from 'fs';
import axios from 'axios';

const githubApiEndpoint = (org, project) => `https://api.github.com/repos/${org}/${project}/branches`;
const token = process.env.GITHUB_TOKEN;
const url = githubApiEndpoint('cheekit', 'branch-filter');

const main = async () => {
  let branches = [];
  let page = 1;
  
  while(1) {
    const response = await axios.get(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': token,
      },
      params: {
        'per_page': 100,
        'page': page,
      }
    });
    if( response.data.length === 0) break;
    branches = [...branches, ...response.data];
    page += 1;
    console.log(page);
  }
  
  fs.writeFileSync("branches.json", JSON.stringify(branches));
};

main();
