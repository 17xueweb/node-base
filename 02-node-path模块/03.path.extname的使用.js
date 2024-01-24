const path = require('path')

const fPath = '/a/b/c/index.html'

// 获取文件名后缀
const fext = path.extname(fPath)
console.log(fext); // .html