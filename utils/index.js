/**
 * @desc index
 * @author DragonTeam <https://www.bpmport.com>
 * @since 2024/9/20 10:16
 */

/**
 * 在指定位置插入字符串
 *
 * @param {string} str - 原始字符串
 * @param {number} index - 插入位置的索引
 * @param {string} insertStr - 要插入的字符串
 * @returns {string} - 插入后的新字符串
 */
export function insertString(str, index, insertStr) {
  return str.substring(0, index) + insertStr + str.substring(index)
}

/**
 * 使用正则表达式匹配双大括号之间的内容并进行二次处理
 * @param {string} str
 * @param {(string) => string} callback
 * @return {string}
 */
export function replaceKeywords(str, callback) {
  const pattern = /{{(.*?)}}/g
  const matches = str.match(pattern)

  if (matches) {
    const processedMatches = matches.map((match) => callback(match.replace(/{{|}}/g, "").trim()))

    return str.replace(pattern, () => processedMatches.shift())
  }

  return str
}

/**
 * 获取当前格式化时间
 * @return {string}
 */
export function getCurrentDate() {
  const currentDate = new Date()
  const timezoneOffsetMinutes = currentDate.getTimezoneOffset()
  const timezoneOffsetHours = timezoneOffsetMinutes / 60

  function formatDateWithTimezone(date, offsetHours) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours() + offsetHours).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }
  const formattedTime = formatDateWithTimezone(currentDate, timezoneOffsetHours)
  console.log(currentDate, timezoneOffsetMinutes, timezoneOffsetHours, formattedTime)

  return formattedTime
}