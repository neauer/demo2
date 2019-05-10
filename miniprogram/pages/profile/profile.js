// pages/profile/profile.js

const db = wx.cloud.database()
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    myToDo:[],
    upData:[],
    openid:"",
    imgUrls: [
      '../../imgs/001.jpg',
      '../../imgs/002.jpg',
      '../../imgs/003.jpg'
    ],
    indicatordots: true,
    autoplay: true  ,
    interval: 1000,
    duration: 1000,
    circular: true,
    //订单列表开始
    deliveryList:[

    ],
    

    //订单列表结束
  },
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

          this.setData({
            deliveryList: this.data.deliveryList.concat(res.data)
          })

        }
      })


  },
//订单列表数据库调用结束
  //添加receive数据库开始
  receiveAdd: function (e) {
    db.collection('all').where({
      _id: e.currentTarget.dataset.id,
    })
      .get({
        success:res=> {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data)
          this.setData({
            myToDo: res.data
          })
          console.log(this.data.myToDo);
        }
      })
    db.collection('receive').add({
      data: {
        userName: this.data.myToDo[0].userName,
        phoneNumber: this.data.myToDo[0].phoneNumber,
        deliveName: this.data.myToDo[0].deliveName,
        deliveId: this.data.myToDo[0].deliveId,
        pay: this.data.myToDo[0].pay,
        address: this.data.myToDo[0].address,
        remark: this.data.myToDo[0].remark
        // upData:this.data.myToDo
      }
    }).then(res => {
      db.collection('all').doc(e.target.dataset.id).remove({
        success: res => {
          wx.showToast({
            title: '接单成功',
          })
          // this.setData({
          //   counterId: '',
          //   count: null,
          // })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '接单失败',
          })
          console.error('[数据库] [删除记录] 失败：', err)
        }
      })

    }).catch(err => {

      wx.showToast({
        title: '提交失败',
        duration: 1000

    })
    })
  },


//添加receive数据库结束





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