// pages/repair/repair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    actions: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
      }
    ],
    show1: false,
    actions1: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
      }
    ],
    show2: false,
    actions2: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
      }
    ]
  },
  select1(){
    this.setData({ show: true });
  },
  can1(){
    this.setData({show:false});
  },
  select2(){
    this.setData({ show1: true });
  },
  can2(){
    this.setData({show1:false});
  },
  select3(){
    this.setData({ show2: true });
  },
  can3(){
    this.setData({show2:false});
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