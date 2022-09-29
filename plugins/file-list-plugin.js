function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  //compiler.plugin('emit', function(compilation, callback) {
  //编译器监听emit事件，获取打包模块的信息，写入文件
  compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => { 
  // Create a header string for the generated file:
    var filelist = 'In this build:\n\n';

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    //添加字符串的编译内容
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }

    console.log(compilation.assets)
    
    // Insert this list into the Webpack build as a new file asset:
    //编译后,dist下生成filelist.md文件
    compilation.assets['filelist.md'] = {
      //返回文件内容
      source: function() {
        return filelist;
      },
      //返回文件长度
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};

module.exports = FileListPlugin;