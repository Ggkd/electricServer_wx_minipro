// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    account: null,
  },


  //获取户主名
  get_name(e) {
    this.setData({
      name: e.detail.value
    })
  },

  //获取账号
  get_account(e) {
    this.setData({
      account: e.detail.value
    })
  },


  // 点击搜索
  search() {
    var value = wx.getStorageSync('user_data')
    console.log(value)
    let name = this.data.name;
    let account = this.data.account;
    console.log("搜索", name, account)
    let isRegisted = false
    // 判断用户是否存在
    for (var i = 0; i < value.length; i++) {
      if (value[i].account === account && value[i].name === name) {
        isRegisted = true
        console.log(value[i].yue)
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
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})