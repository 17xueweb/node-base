const custom = require('./03.模块作用域')

// 打印出空对象，并没有username和sayHello，这就证明了在默认情况下 node里面是有模块作用域的 在模块内定义的成员无法被外界访问
console.log(custom); // {} 