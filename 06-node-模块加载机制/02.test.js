// 调用三次require 只打印一次 ok
// 模块在第一次加载后会被缓存，require() 不会导致模块的代码被执行多次
require('./01.require导入缓存机制')
require('./01.require导入缓存机制')
require('./01.require导入缓存机制')