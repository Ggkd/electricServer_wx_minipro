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
        id: 1,
        name: '所有预约'
      },
			{
				id:2,
				name:'维修预约'
			},
			{
				id:3,
				name:'家电预约'
			},
		],
		dishesList:[
			[
        {
          "title": "维修电脑",
          "detail": "电脑接电后无法开机",
          "date": "2019-12-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "预约中",
        },
        {
          "title": "维修路由器",
          "detail": "路由器无网络信号",
          "date": "2019-10-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "已维修",
        },
        {
          "title": "维修空凋",
          "detail": "空凋漏水",
          "date": "2019-09-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "已取消",
        },
        {
          "title": "TCL电视",
          "date": "2019-12-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "预约中",
        },
        {
          "title": "MacBook Pro",
          "date": "2019-10-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "已提供",
        },
        {
          "title": "冰箱",
          "date": "2019-09-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "已取消",
        },
      ],
			[
        {
          "title": "维修电脑",
          "detail": "电脑接电后无法开机",
          "date": "2019-12-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "预约中",
        },
        {
          "title": "维修路由器",
          "detail": "路由器无网络信号",
          "date": "2019-10-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "已维修",
        },
        {
          "title": "维修空凋",
          "detail": "空凋漏水",
          "date": "2019-09-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "已取消",
        },
			],
      [
        {
          "title": "TCL电视",
          "date": "2019-12-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "预约中",
        },
        {
          "title": "MacBook Pro",
          "date": "2019-10-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "已提供",
        },
        {
          "title": "冰箱",
          "date": "2019-09-12",
          "address": "青岛市胶州市青岛工学院",
          "status": "已取消",
        },
      ],
		],
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
	// 选择菜品
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
		this.loadingChange()
	}
})