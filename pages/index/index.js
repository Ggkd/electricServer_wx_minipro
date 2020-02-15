Page({
  data: {
 
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
    
  }
})