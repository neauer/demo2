// pages/delive/delive.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    phoneNumber: '',
    deliveName:'',
    deliveId: "",
    pay: '',
    address: '',
    remark: '',
    price: 0
  },
  userNameChange(e) {
    this.setData({
      userName: e.detail 
    })
  },
  phoneNumberChange(e) {
    this.setData({
     phoneNumber: e.detail
    })
  },
  deliveNameChange(e) {
    this.setData({
      deliveName: e.detail
    })
  }, 
  deliveIdChange(e) {
    this.setData({
      deliveId: e.detail
    })
  },  
   payChange(e) {
    this.setData({
      pay: e.detail,
      price: e.detail
    })
  },
   addressChange(e) {
    this.setData({
     address: e.detail
    })
  },
 remarkChange(e) {
    this.setData({
      remark: e.detail
    })
  },
  onSubmit:function(){
    if (this.data.userName.length == 0 || this.data.phoneNumber.length == 0 || this.data.deliveId.length == 0 || this.data.pay.length == 0 || this.data.address.length == 0 || this.data.deliveName.length == 0){
      wx.showModal({
        title: '提示',
        content: '请将内容填写完整',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else if (this.data.phoneNumber.length != 11){
      wx.showModal({
        title: '提示',
        content: '手机号格式错误',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else if (this.data.deliveName.length < 3){
      wx.showModal({
        title: '提示',
        content: '请填入完整快递名称',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else{
      wx.showLoading({
        title: '提交中',
      })
      db.collection('user').add({
        data: {
          userName: this.data.userName,
          phoneNumber: this.data.phoneNumber,
          deliveName:this.data.deliveName,
          deliveId: this.data.deliveId,
          pay: this.data.pay,
          address: this.data.address,
          remark: this.data.remark
        }
      }).then(res => {
        wx.showToast({
          title: '提交成功',
          duration:1000
        })
        wx.switchTab({
          url: '../profile/profile'
        })
        this.setData({
          userName: '',
          phoneNumber: '',
          deliveId: '',
          deliveName:'',
          pay: '',
          address: '',
          remark: '',
          price:''
        })
        wx.hideLoading();
      }).catch(err => {
        wx.showToast({
          title: '提交失败',
          duration:1000
        })
        wx.hideLoading();
      })
 
    }
    
  },
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