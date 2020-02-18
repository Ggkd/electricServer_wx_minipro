// pages/myIndex/myIndex.js
let app = getApp();
import Toast from '../../dist1/toast/toast';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    name: "",
    yue: 0
  },
  t(){
    Toast('正在开发中~');
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
        this.setData({
          name: obj.name,
          yue: res.data
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

  },
  navigatorPay(){
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  navigatorSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  navigatorElectric(){
    wx.navigateTo({
      url: '../electric/electric',
    })
  },
  navigatorRepair(){
    wx.navigateTo({
      url: '../repair/repair',
    })
  },
  navigatorBill(){
    wx.navigateTo({
      url: '../bill/bill',
    })
  },
  navigatorMy(){
    wx.switchTab({
      url: '../my/my',
    })
  }


  
})