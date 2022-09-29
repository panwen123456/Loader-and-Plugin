//一个plugin就是一个函数，class也是函数，apply为class的方法，与loader类似，此处为ES6写法
class HelloWorldPlugin {
  constructor(options) {//此处可以获取到webpack.config.js里传递的参数{a: 1}
    //console.log(options)
  }

  //当Webpack执行插件时，就会执行插件对象的apply方法，调用apply方法时把编译对象对象编译器compiler传递进来
  //webpack.config.js此处new了插件对象new HelloWorldPlugin({a: 1}),
  apply(compiler) {
    //console.log(compiler.options.output.path)
    // compiler.plugin('done', function() {
    //   console.log('Hello World!')
    // })
    //插件对象可以监听事件，监听完后做出响应，完成功能，其中done为监听的事件，compilation为其中编译的过程
    //当所有的编译过程完成之后（done），监听到done，执行回调，输出hello world
    compiler.hooks.done.tap('HelloWorldPlugin', compilation => {
      //可以执行查看具体的内容
      //console.log(compilation) 
      console.log('helllo world!!!!')
    })
  }
}

module.exports = HelloWorldPlugin