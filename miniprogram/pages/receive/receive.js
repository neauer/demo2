// pages/receive/receive.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    deliveryList: [

    ]
  },
  
  //订单列表从数据库的调用开始
  getdeliveryList: function (e) {
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'login',
      // 传递给云函数的参数
      success: res => {
        // output: res.result === 3
        console.log(res)
        this.setData({
          openid: res.result.openid
        })
      },
      fail: err => {
        // handle error
      },
      complete: () => {
        // ...
      }
    })
    db.collection('receive').where({
      _openid:this.data.openid,
    })
      .get({
        success: res => {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data);
          // console.log(Page);

          this.setData({
            deliveryList: this.data.deliveryList.concat(res.data)
          })
          console.log(deliveryList)

        }
      })
  },
  //订单列表从数据库的调用结束
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdeliveryList();
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