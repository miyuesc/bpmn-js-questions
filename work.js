/**
 * @desc work
 * @author MiyueFE <https://github.com/miyuesc>
 * @since 2024/9/3 10:04
 */
import { writeFileSync } from "fs"
import { readmePrefix, readmeSuffix } from './template.js'

const owner = "miyuesc";
const repo = "bpmn-js-questions";
let page = 1;
let allIssues = [];

const url = () => {
  return `https://api.github.com/repos/${owner}/${repo}/issues?page=${page}&per_page=100&state=all`;
}

async function fetchIssues() {
  const requestUrl = url()
  const issues = await fetch(requestUrl)
      .then(response => response.json())
  if (issues.length > 0) {
    page += 1;
    allIssues = allIssues.concat(issues);
    return fetchIssues();
  } else {
    return allIssues;
  }
}

async function processIssues() {
  const issues = await fetchIssues()

  let directory = "";
  issues.forEach(issue => {
    const title = issue.title;
    const number = issue.number;
    directory += `- [${title}](https://github.com/${owner}/${repo}/issues/${number})\n`;
  });

  return directory
}

async function mdGenerator() {
  const questions = await processIssues()

  await writeFileSync(`./README.md`, `${readmePrefix}${questions}${readmeSuffix}`)

  console.log("README 写入成功~")
}

mdGenerator()