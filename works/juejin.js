import {jjColumnId} from "../conf/index.js";
import {writeFileSync} from "fs";


let cursor = '';
let allArticles = [];

const jjColumnUrl = () => {
  return `https://api.juejin.cn/content_api/v1/column/articles_cursor`
}

// 获取 掘金专栏 列表
async function fetchColumnArticles() {
  const requestUrl = jjColumnUrl()
  const requestData = JSON.stringify({
    column_id: jjColumnId,
    cursor,
    limit: 20,
    sort: 2,
  })
  const response = await fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestData
  }).then(response => response.json())

  const { has_more, cursor: resCursor, err_no, data } = response
  if (err_no !== 0) {
    console.error('获取掘金专栏列表失败', response)
    return []
  }

  allArticles = allArticles.concat(data || [])

  if (has_more) {
    cursor = resCursor
    return fetchColumnArticles();
  }

  await writeFileSync(`./data.json`, JSON.stringify(allArticles, null, 2))
  return allArticles;
}


function processArticleItem(article, idx) {
  const articleId = article.article_id;
  const title = article.article_info.title;
  const articleUrl = `https://juejin.cn/post/${articleId}`
  return `
  #### [${title}](${articleUrl})\n\n
  > ${article.article_info.brief_content}`
}

export async function processColumnArticles() {
  const articles = await fetchColumnArticles()

  let directory = "## 一、bpmn-js 源码解析和实践\n\n";
  articles.forEach((issue, idx) => directory += processArticleItem(issue, idx));

  return directory
}
