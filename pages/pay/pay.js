// pages/pay/pay.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:11,
    userInfo: {},
    userid:null,
    userIdName:null,
    yue:null,
    address: null,
    money:50,
    resp: ""
  },

  // 选择三个固定金额的事件
  b1(){
    this.setData({
      color:11,
      money: 50,
    })
  },
  b2(){
    this.setData({
      color:22,
      money: 100,
    })
  },
  b3(){
    this.setData({
      color:33,
      money: 150,
    })
  },


  // 光标在输入框时
  focu(){
    this.setData({
      money: 0,
      color: 0,
      }
    )
  },

  // 当光标失去焦点时
  blur(e){
    this.setData({
      money: e.detail.value
    })
  },

  // 点击充值
  pay(){
    console.log(this.data.money)
    wx.request({
      url: 'http://localhost:8080/user/pay',
      data: {
        userid: this.data.userid,
        money: this.data.money
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "POST",
      success: (res) => {
        console.log(res)
        this.setData({
          resp: "缴费成功"
        })
      },
      fail : (res) => {
        this.setData({
          resp: "缴费失败，请刷新重试"
        })
      }
    })
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
    let obj = wx.getStorageSync("user")
    wx.request({
      url: 'http://localhost:8080/user/query',
      data: {
        userid: obj.userid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success: (res) => {
        // console.log(res)
        this.setData({
          yue: res.data,
          address: obj.address,
          userIdName: obj.userid+"("+obj.name+")",
          userid: obj.userid
        })
      }
    })
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