const del = require('del');
const validateOptions = require('schema-utils');
const path = require('path');

//exclude属性用于排除文件夹
const schema = {
  type: 'object',
  properties: {
    exclude: {
      type: 'string'
    }
  }
};

module.exports = class CleanPlugin {
  //验证字符串是否符合规范
  constructor(options = {exclude: ''}) {
    this.options = options;
    validateOptions(schema, options, 'Clean Plugin');
  }

  apply(compiler) {
    //在文件导出之前监听（emit），删除文件del
    compiler.hooks.emit.tapAsync('CleanPlugin', (complation, callback) => {
      //删除dist下的所有文件，排除当前文件的其他文件，排除的文件在exclude设置里(webpack.config.js)
      let delFiles = [`${compiler.options.output.path}/**`, `!${compiler.options.output.path}/${this.options.exclude}`];
      console.log(delFiles);
      del(delFiles)
        .then(() => {
          callback()
        });
    });
  }
}