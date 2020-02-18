let appData = getApp();
Page({
  data: {
    errShow: false
  },

  // 用于处理表单提交事件
  loginHandle: function (e) {
    let username = e.detail.value.username;
    let account = e.detail.value.account;
    let password = e.detail.value.password

    wx.request({
    url: 'http://localhost:8080/user/login', 
    data: {
      username: username,
      userid: account,
      password: password
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    method: "POST",
    success : (res) => {
      // console.log(res)
      if (res.data.code == 0 ) {
        console.log("faild")
        this.setData({
          errShow: true
        });
        return
      }

      let name = res.data.object.username
      let userid = res.data.object.userid
          // 将数据缓存
      let obj = { "name": name, "userid":userid}
          wx.setStorage({
            key: "user",
            data: obj,
            success: () => {
              console.log("缓存成功")
            }
          });

      navigatorIndex: {
        wx.switchTab({
          url: '../myIndex/myIndex'
        })
      }
      
    },
    fail(res){
      console.log(res)
    }
  })
  },
})