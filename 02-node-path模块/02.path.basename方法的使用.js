const path = require('path')

// 自定义文件存放路径
const fPath = '/a/b/c/index.html'

// 获取文件名包括后缀
const fullName = path.basename(fPath)
console.log(fullName); // index.html

// 传入第二个参数，获取文件名(不包含后缀名)
const nameWithoutExit = path.basename(fPath, '.html')
console.log(nameWithoutExit); // index