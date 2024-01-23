// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用readFile() 读取文件内容
fs.readFile('./files/成绩.txt', 'utf8', function(err, dataStr) {
    // 3. 判断文件是否读取成功
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }

    console.log('文件读取成功！' + dataStr);
})