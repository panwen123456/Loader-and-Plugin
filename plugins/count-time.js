
module.exports = class CountPlugin {
  
  apply(compiler) {
    let self = this
    //entryOption为编译最早的时间，传递给对象获取编译开始时间，输出start
    compiler.hooks.entryOption.tap('CountTime', (complation) => {
      //console.log(compiler)
      //console.log(this)
      self.startTime = Date.now()
      console.log('start...')
    })
    //done为编译最后的时间，获取end的时间，输出end和耗时（结束时间-初始时间）
    compiler.hooks.done.tap('CountTime', complation => {
      console.log('end...')
      self.endTime = Date.now()
      console.log(`编译耗时：${self.endTime - self.startTime} ms`)
    })
  }
}