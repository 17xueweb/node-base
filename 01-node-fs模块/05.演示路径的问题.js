const fs = require('fs')

// 出现径拼接错误的问题，是因为提供了 ./ 或 ../开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
// 代码运行时，会执行node命令时所处的目录，动态拼接出完整路径

/* fs.readFile("./files/1.txt", 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }
    console.log('文件读取成功！' + dataStr);
}) */

// 移植性差，不利于维护
/* fs.readFile("/Users/learn/node/heima/code/node基础/node-base/01-node-fs模块/05.演示路径的问题.js", 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }
    console.log('文件读取成功！' + dataStr);
}) */

// __dirname 表示当前代码所在的文件 所处的目录
console.log(__dirname); // /Users/learn/node/heima/code/node基础/node-base/01-node-fs模块

// 注意：不能这么写 __dirname + './files/1.txt'
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }

    console.log('文件读取成功！' + dataStr);
})