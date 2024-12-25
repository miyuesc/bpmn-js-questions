/**
 * @desc work
 * @author MiyueFE <https://github.com/miyuesc>
 * @since 2024/9/3 10:04
 */
import { writeFileSync, readFileSync } from "fs"
import { getCurrentDate, replaceKeywords } from "./utils/index.js";
import { processIssues } from "./works/issue.js";
import {processColumnArticles} from "./works/juejin.js";


async function mdGenerator() {
  const column = await processColumnArticles()
  const questions = await processIssues()

  const readmePrefix = readFileSync('./templates/prefix.md', 'utf-8')
  const readmeSuffix = readFileSync('./templates/suffix.md', 'utf-8')

  const currentDate = getCurrentDate()

  const md = `${replaceKeywords(readmePrefix, () => currentDate)}\n${column}\n${questions}\n${readmeSuffix}`

  await writeFileSync(`./README.md`, md)

  console.log("README 写入成功~")
}

// getCurrentDate()
mdGenerator()
