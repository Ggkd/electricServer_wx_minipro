// miniprogram/pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: null,
    money : null
  },

  //获取金额
  get_money(e) {
    this.setData({
      money: e.detail.value
    })
  },

  //获取账号
  get_account(e) {
    this.setData({
      account: e.detail.value
    })
  },

  //点击缴费
  pay(){
    var value = wx.getStorageSync('user_data')
    console.log(value)
    let money = this.data.money;
    let account = this.data.account;
    console.log("缴费", money, account)
    let isRegisted = false
    // 判断用户是否存在
    for (var i = 0; i < value.length; i++) {
      if (value[i].account === account) {
        isRegisted = true
        var yue = Number(value[i].yue) + Number(money)
        console.log(value[i].yue = yue)
        value[i].yue = yue
        wx.setStorage({
          key: 'user_data',
          data: value,
        })
        break
      }
    }
    if (!isRegisted) {
      console.log("查询用户不存在");
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