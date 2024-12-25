import {owner, repo} from "../conf/index.js";
import {writeFileSync} from "fs";


let page = 1;
let pageSize = 100;
let allIssues = [];

const issueUrl = () => {
  return `https://api.github.com/repos/${owner}/${repo}/issues?page=${page}&per_page=${pageSize}&state=all`;
}

// 获取 github issues 列表
async function fetchIssues() {
  const requestUrl = issueUrl()
  const issues = await fetch(requestUrl)
    .then(response => response.json())

  if (issues.length > 0) {
    page += 1;
    allIssues = allIssues.concat(issues);
    return fetchIssues();
  }

  await writeFileSync(`./data.json`, JSON.stringify(allIssues, null, 2))
  return allIssues;
}

function processIssueItem(issue, idx) {
  let title = issue.title;
  const number = issue.number;

  if (title.includes('[Question]')) {
    title = title.replace('[Question]', '')
  }

  let content = `
  #### [${idx + 1} ${title}](https://github.com/${owner}/${repo}/issues/${number})\n\n`

  const questioner = issue.user

  if (issue.labels?.find(i => i.name === 'question')) {
    content += `> ❓ Questioner: [${questioner.login}](${questioner.html_url})\n`
  }
  if (issue.labels?.find(i => i.name === 'resolved')) {
    content += `>\n> ✅ This question has been solved.\n\n`
  }

  return content
}

export async function processIssues() {
  const issues = await fetchIssues()

  let directory = "\n\n## 二、常见问题与解决方案\n\n";
  issues.forEach((issue, idx) => directory += processIssueItem(issue, idx));

  return directory
}
