Page({
  data: {
    name: null,
    account: null,
    password: null,
    user_data: [{}]
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

  //获取密码
  get_password(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 点击注册
  register() {
    let name = this.data.name;
    let account = this.data.account;
    let password = this.data.password;
    let user_data = this.data.user_data
    if (!name) {
      console.log("请输入户主名")
      return
    }
    if (!account) {
      console.log("请输入户号")
      return
    }
    if (!password) {
      console.log("请输入密码")
      return
    }
    console.log(user_data)
    console.log("注册", name, account, password)
    let isRegisted = false
    // 判断用户是否已经注册
    for (var i = 0; i < user_data.length; i++) {
      if (user_data[i].account === account) {
        isRegisted = true
      }
    }
    if (isRegisted) {
      console.log("已注册");
    } else {
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
   
        wx.switchTab({
          url: '../myIndex/myIndex',
        })
      
    }
  },

  // 点击登录
  login() {
    let name = this.data.name;
    let account = this.data.account;
    let password = this.data.password;
    let user_data = this.data.user_data
    if (!name) {
      console.log("请输入户主名")
      return
    }
    if (!account) {
      console.log("请输入户号")
      return
    }
    if (!password) {
      console.log("请输入密码")
      return
    }
    console.log(user_data)
    console.log("登录", name, account, password)
    let isRegisted = false
    // 判断用户是否已经注册
    for (var i = 0; i < user_data.length; i++) {
      if (user_data[i].account === account) {
        isRegisted = true
        // 判断户主名和密码是否正确
        if (user_data[i].name === name && user_data[i].account === account && user_data[i].password === password) {
            wx.switchTab({
              url: '../myIndex/myIndex',
            })
          console.log("登录成功");
        } else {
          console.log("输入信息有误");
        }
      }
    }
    if (!isRegisted) {
      console.log("未注册");
    }
  },


  //获取所有用户的数据
  getUserData() {
    wx.getStorage({
      key: 'user_data',
      success: (res) => {
        console.log("su", res)
        // 将数据设置为全局
        this.setData({
          user_data: res.data
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
  // 用于处理表单提交事件
  loginHandle: function (e) {
    console.log(e)
    if(e.detail.value.username==="admin"&&e.detail.value.password==="1234"){
      
    }
    navigatorIndex:{
      wx.switchTab({
        url: '../myIndex/myIndex',
      })
    }
    
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    this.getUserData();
  },
})