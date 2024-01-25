// 在一个自定义模块中，默认情况下，module.exports = {}
const age = 10

// 向 module.exports 上挂载 username 属性
module.exports.username = 'zs'
// 向 module.exports 上挂载 sayHello() 方法
module.exports.sayHello = function() {
    console.log('hello');
}

module.exports.age = age 