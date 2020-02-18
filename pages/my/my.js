var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    yue: null,
    name: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function () {
    
  },

  onShow: function() {
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
    });
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  navigatorBill(){
    wx.navigateTo({
      url: '../bill/bill',
    })
  },
  navigatorYue(){
    wx.navigateTo({
      url: '../yue/yue',
    })
  },
  back(){
    wx.navigateTo({
      url: '../index/index',
    })
  }
})