// 1.1 导入 fs 文件系统模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配<style></style> 和 <script></script>标签
//     其中 \s 表示匹配空白字符； \S 表示匹配非空白字符；*表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function(err, dataStr) {
    // 2.2 读取 HTML 文件失败
    if (err) return console.log('读取 HTML 文件失败！' + err.message);
    // 2.3 读取 HTML 文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3.1 定义处理 CSS 样式方法
// 干掉前后的style标签，写入新的文件中
function resolveCSS(htmlStr) {
    // 3.2 使用正则提取对应的 <style></style> 标签内容
    const r1 = regStyle.exec(htmlStr)
    // 3.3 将提取出来的样式字符串，进行字符串 replace 替换操作，将开头与结尾的<style>和</style>替换为空
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // 3.4 调用fs.writeFile() 方法 ，将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
        if (err) return console.log('写入 CSS 文件失败！' + err.message);
        console.log('写入 CSS 样式文件成功！');
    })
}

// 4.1 定义处理 JS 脚本的方法
// 干掉前后的script标签，写入js文件中
function resolveJS(htmlStr) {
    // 4.2 使用正则提取对应的 <script></script> 标签内容
    const r2 = regScript.exec(htmlStr)
    // 4.3 将提取出来的内容 进行script替换
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 4.4 将处理的结果 写入到 clock 目录中的 index.js 文件中  
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
        if (err) return console.log('写入 Javascript 脚本文件失败！' + err.message); 
        console.log('写入 JavaScript 脚本文件成功！');
    })
}

// 5.1 定义处理 HTML 结构的方法
// 将html中的script或style 替换为 引入文件的方式， 写入index.html中
function resolveHTML(htmlStr) {
    // 5.2 字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script标签
   const newHTML =  htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>')
   // 5.3 写入 index.html 这个文件
   fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
        if (err) return console.log('写入 HTML 页面文件失败！' + err.message)
        console.log('写入 HTML 页面文件成功！')
   })
}