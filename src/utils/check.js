export const check = {
  // 字符串是否是合法的 url
  isUrl: (url) => {
    try {
      return Boolean(new URL(url))
    } catch (error) {
      return false
    }
  },
  // 是否是空数组
  isEmpty: (value) => {
    if (Array.isArray(value)) {
      return value.length === 0
    } else {
      return value === '' || value == null
    }
  },
}
