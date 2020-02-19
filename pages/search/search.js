// pages/search/search.js
var app = getApp()
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userid:"",
    name: "",
    yue: 0,
    account:null,
    msg: ""
  },

  // 点击去查询进入账单页
  searchToBill(){
    wx.navigateTo({
      url: '../bill/bill',
    })
  },

  getAccount(e){
    this.setData({
      account: e.detail
    })
  },
  // 点击查询
  query(){
    wx.request({
      url: 'http://localhost:8080/user/query',
      data: {
        userid: this.data.account,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success: (res) => {
        console.log(res)
        if (res.data) {
          this.setData({
            msg: "该账户余额：" + res.data,
          })
        }else{
          this.setData({
            msg: "查询的账户不存在",
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
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
    this.setData({
      userid: obj.userid,
      name: obj.name
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