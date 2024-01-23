// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用readFile() 读取文件内容
fs.readFile('./files/成绩.txt', 'utf8', function(err, dataStr) {
    // 3. 判断文件是否读取成功
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }
    //   console.log('文件读取成功！' + dataStr);

    // 4.1 先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })

    // 4.3 把新数组的每一项，进行合并，得到第一个新的字符串
    const newStr = arrNew.join('\r\n')

    // 5. 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新的文件中
    fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('成绩写入失败！' + err.message);
        }

        console.log('成绩写入成功！');
    })
    

})