/**
 * @desc work
 * @author MiyueFE <https://github.com/miyuesc>
 * @since 2024/9/3 10:04
 */
import { writeFileSync, readFileSync } from "fs"

const owner = "miyuesc";
const repo = "bpmn-js-questions";
let page = 1;
let pageSize = 100;
let allIssues = [];

const url = () => {
  return `https://api.github.com/repos/${owner}/${repo}/issues?page=${page}&per_page=${pageSize}&state=all`;
}

async function fetchIssues() {
  const requestUrl = url()
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
  ### [${idx + 1} ${title}](https://github.com/${owner}/${repo}/issues/${number})\n\n`

  const questioner = issue.user

  if (issue.labels?.find(i => i.name === 'question')) {
    content += `> ❓ Questioner: [${questioner.login}](${questioner.html_url})\n\n`
  }
  if (issue.labels?.find(i => i.name === 'resolved')) {
    content += `> ✅ This question has been solved.\n\n`
  }

  return content
}

async function processIssues() {
  const issues = await fetchIssues()

  let directory = "";
  issues.forEach((issue, idx) => directory += processIssueItem(issue, idx));

  return directory
}

async function mdGenerator() {
  const questions = await processIssues()

  const readmePrefix = readFileSync('./templates/prefix.md', 'utf-8')
  const readmeSuffix = readFileSync('./templates/suffix.md', 'utf-8')

  await writeFileSync(`./README.md`, `${readmePrefix}\n${questions}\n${readmeSuffix}`)

  console.log("README 写入成功~")
}

mdGenerator()