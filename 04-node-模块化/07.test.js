// 外界使用 require 导入自定义模块时，得到的就是 module.exports 所指向的对象
const m = require('./06.module.exports介绍')

console.log(m); // {}