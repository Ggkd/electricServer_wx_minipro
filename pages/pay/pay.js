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
    name:null,
    yue:null,
    address: null,
    money:50,
    inputValue:"",
    isSelect: true
  },
  b1(){
    this.setData({
      color:11,
      money: 50,
      isSelect: true
    })
  },
  b2(){
    this.setData({
      color:22,
      money: 100,
      isSelect: true
    })
  },
  b3(){
    this.setData({
      color:33,
      money: 150,
      isSelect: true
    })
  },


  // 获取自定义的金额
  getMoney(e){
    this.setData({
      money: e.detail.value
    })
  },

  // 光标在输入框时
  focu(){
    this.setData({
      money: 0,
      color: 0,
      isSelect: false
      }
    )
  },

  // 当光标失去焦点时
  blur(e){
    console.log(this.data.isSelect)
    if (this.data.isSelect) {
      this.setData({
        inputValue: ""
      })
    }
  },

  // 点击充值
  pay(){
    console.log(this.data.money)
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
    this.setData({
      userid: obj.userid,
      name: obj.name
    });
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
        this.setData({
          yue: res.data,
          address: res.address
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