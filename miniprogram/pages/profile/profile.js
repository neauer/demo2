// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../imgs/001.jpg',
      '../../imgs/002.jpg',
      '../../imgs/003.jpg'
    ],
    items:[
      {
        // 导航名称
        text: '所有城市',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '温州',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: true
          },
          {
            text: '杭州',
            id: 2
          }
        ]
      }
    ],

    indicatordots: true,
    autoplay: true  ,
    interval: 1000,
    duration: 1000,

    circular: true,
  },
  // 分类选择方法
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },

  onClickItem({ detail = {} }) {
    this.setData({
      activeId: detail.id
    });
  },

// 分类选择方法结束

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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