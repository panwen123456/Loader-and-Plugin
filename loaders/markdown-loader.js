const { getOptions } = require('loader-utils')
//校验用户使用loader的options参数是发正确
const validateOptions = require('schema-utils')
//除此外还需一个将markdown转换成html的工具
const MarkdownIt  = require('markdown-it')


//用于校验参数是否符合规则，参数用户可设置
const schema = {
  type: 'object',
  properties: {
    html: {
      type: 'boolean'
    },
    xhtmlOut: {
    	type: 'boolean'
    },
    langPrefix: {
    	type: 'string'
    },
    linkify: {
    	type: 'boolean'
    }
  }
}
//loader本身导出函数使用，将source调用markdown工具
module.exports =  function(source) {

  const options = getOptions(this)
  const md = MarkdownIt(options)

  validateOptions(schema, options)

  // 对资源应用一些转换……

  //this.callback(null, md.render(source))
  //let callback = this.async()
  //callback(null, md.render(source))
  return md.render(source)
}