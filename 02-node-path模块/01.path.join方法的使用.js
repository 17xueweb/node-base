const fs = require('fs')
const path = require('path')

// 注意： ../会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr); // /a/d/e

// fs.readFile(__dirname + './files/1.txt') // 不推荐这种拼接的写法

// 直接拼接 如果写./files这种 会报错，但是path.join() 会把./屏蔽掉
fs.readFile(path.join(__dirname, './files/1.txt'), "utf8", function(err, dataStr) {
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }
    console.log('文件读取成功！' + dataStr);
})