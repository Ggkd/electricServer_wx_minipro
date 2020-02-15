// pages/electric/electric.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s2:'选择网点',
    s3:"最快3小时可取",
    show: false,
    show3:false,
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2025, 12, 31).getTime(),
    currentDate: new Date().getTime(),
    show: false,
    show1: false,
    actions1: [
      {
        name: '青岛工学院1宿'
      },
      {
        name: '青岛工学院2宿'
      },
      {
        name: '青岛工学院3宿',
      }
    ],
    show2: false,
  },
  select2(){
    this.setData({ show1: true });
  },
  can2(){
    this.setData({show1:false});
  },
  select3(){
    this.setData({ show3: true });
  },
  can3(){
    this.setData({show3:false});
  },
  showPopup() {
    this.setData({ show3: true });
  },

  onClose() {
    this.setData({ show3: false });
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },

  s2(e){
    this.setData({
      s2:e.detail.name,
      show1:false
    })
  },
  s3(e){
    console.log(new Date(e.detail))
    var date = new Date(e.detail);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	    var Y = date.getFullYear() + '-';
	    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	    var D = date.getDate() + ' ';
	    var h = date.getHours() + ':';
	    var m = date.getMinutes();
    this.setData({
      s3:Y + M + D + h + m,
      show3:false
    })
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