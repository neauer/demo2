// pages/receive/receive.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deliveList:[]
  },
  getDeileve:function(){
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'login',
      success: res => {
        db.collection('receive').where({
          _openid:res.result.openid,
        })
          .get({
            success:res=> {
              if (this.data.deliveList.length<res.data.length){
                this.setData({
                  deliveList: this.data.deliveList.concat(res.data)
                })
              }
            }
          })
      },
      fail: err => {
        // handle error
      },
      complete: () => {
        // ...
      }
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDeileve();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})