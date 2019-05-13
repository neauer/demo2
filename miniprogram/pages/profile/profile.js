// pages/profile/profile.js
var app = getApp()
const db = wx.cloud.database()
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    myToDo:[],
    openid:"",
    imgUrls: [
      '../../imgs/1.jpg',
      '../../imgs/2.jpg',
      '../../imgs/3.jpg',
      '../../imgs/4.jpg'
    ],
    indicatordots: true,
    autoplay: true  ,
    interval: 2000,
    duration: 1000,
    circular: true,
    //订单列表开始
    deliveryList:[],
    

    //订单列表结束
  },

  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },
    circular: true ,
  //订单列表数据库调用
  getdeliveryList:function(e){
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'login',
      // 传递给云函数的参数
      success: res => {
        // output: res.result === 3
  //      console.log(res)
        this.setData({
          openid:res.result.openid
        })
      },
      fail: err => {
        // handle error
      },
      complete: () => {
        // ...
      }
    })
    db.collection('all').where({
      _openid:this.data.openid,
    })
      .get({
        success:res=> {
          // res.data 是包含以上定义的两条记录的数组
          // console.log(Page);
          if(this.data.deliveryList.length <res.data.length){
            this.setData({
              deliveryList: this.data.deliveryList.concat(res.data)
            })
          }
        }
      })
  },
//订单列表数据库调用结束

//跳转详情页面开始
jump:function(e){
app.globalData.catch = e.target.dataset.id;
  wx.reLaunch({
    url: '../deliveDetail/deliveDetail'
  });
  console.log(app.globalData.catch)
},

//跳转详情页面结束



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
    this.getdeliveryList()
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
    this.getdeliveryList();
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