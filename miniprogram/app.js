//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'a-1-6d185c',
      traceUser: true
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
