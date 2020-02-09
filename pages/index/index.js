// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : null,
    account : null,
    password: null,
    user_data : [{}]
  },

  //获取户主名
  get_name(e){
    this.setData({
      name : e.detail.value
    })
  },

  //获取账号
  get_account(e) {
    this.setData({
      account: e.detail.value
    })
  },

  //获取密码
  get_password(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 点击注册
  register(){
    let name = this.data.name;
    let account = this.data.account;
    let password = this.data.password;
    let user_data = this.data.user_data
    console.log(user_data)
    console.log("注册",name, account, password)
    let isRegisted = false
    // 判断用户是否已经注册
    for (var i = 0; i < user_data.length;i++){
      if (user_data[i].account === account) {
        isRegisted = true
      }
    }
    if (isRegisted){
      console.log("已注册");
    }else{
      // 将数据写入缓存
      let obj = {}
      obj["name"] = name
      obj["account"] = account
      obj["password"] = password
      user_data.push(obj)
      wx.setStorage({
        key: 'user_data',
        data: user_data,
      })
    }
  },

  // 点击登录
  login() {
    console.log("登录",this.data.name, this.data.account, this.data.password)
    let name = this.data.name;
    let account = this.data.account;
    let password = this.data.password;
    let user_data = this.data.user_data
    console.log(user_data)
    console.log("注册", name, account, password)
    let isRegisted = false
    // 判断用户是否已经注册
    for (var i = 0; i < user_data.length; i++) {
      if (user_data[i].account === account) {
        isRegisted = true
        // 判断户主名和密码是否正确
        if (user_data[i].name === name && user_data[i].account === account && user_data[i].password === password){
          console.log("登录成功");
        }else{
          console.log("输入信息有误");
        }
      }
    }
    if (!isRegisted) {
      console.log("未注册");
    }
  },


 //获取所有用户的数据
  getUserData(){
    wx.getStorage({
      key: 'user_data',
      success: (res) => {
        console.log("su", res)
        // 将数据设置为全局
        this.setData({
          user_data : res.data
        })
      },
      fail: function (res) {
        console.log("fail", res)
        wx.setStorage({
          key: 'user_data',
          data: [],
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserData();
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