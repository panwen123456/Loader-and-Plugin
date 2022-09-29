//2.通过loader-utils的get方法获取options参数
const { getOptions } = require('loader-utils')

module.exports = function(source) {
  //实现将option的name属性小写转化为大写
  let options = getOptions(this)
  console.log(options)
  return source.replace(options.name, options.name.toUpperCase());
}