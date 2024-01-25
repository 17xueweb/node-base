const m1 = require('./01.m1')
// 注意：(1) 使用require加载其他模块时，会执行被加载模块中的代码
//      (2) 使用require 可以省略.js后缀名
console.log(m1); // {}