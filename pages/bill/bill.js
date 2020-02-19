var app = getApp()
Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'所有账单'
			},
      {
        id: 2,
        name: '电费账单'
      },
			{
				id:3,
				name:'维修账单'
			},
			{
				id:4,
				name:'新电账单'
			},
		],
		dishesList:[],
		dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},2000)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜单
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let flag = true;
		let	cart = this.data.cart;
		
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
				}
			})
		}
		if(flag) cart.push(dish);
		this.setData({
			cartTotal:cart.length
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange();
    
	},
  onShow: function () {
    let obj = wx.getStorageSync("user");
    wx.request({
      url: 'http://localhost:8080/bill/billInfo',
      data: {
        userid: obj.userid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success: (res) => {
        console.log(res)
        this.setData({
          dishesList: res.data
        })

      },
      fail(res) {
        console.log(res)
      }
    })
  },
})