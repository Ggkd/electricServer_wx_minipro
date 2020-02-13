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
        id:2,
        name:'电费账单'
      },
			{
				id:3,
				name:'常规家电'
			},
			{
				id:4,
				name:'智能家电'
			},
		],
		dishesList:[
			[
        {
          name: "12月电费",
          price: -89,
          date: "2019-12-31 12:21",
          num: 1,
          id: 20
        },
        {
          name: "11月电费",
          price: -78,
          date:"2019-11-30 08: 21",
          num: 1,
          id: 21
        },
        {
          name: "10月电费",
          price: -66,
          date: "2019-10-31 09:23",
          num: 1,
          id: 22
        },
        {
          name: "缴纳电费",
          price: 300,
          date: "2019-10-23 10:23",
          num: 1,
          id: 23
        },
        {
          name: "09月电费",
          price: -78,
          date: "2019-09-30 11:48",
          num: 1,
          id: 24
        },
				{
					name:"冰箱",
					price:38,
          date: "2019-10-30 11:48",
					num:1,
					id:1
				},
				{
					name:"微波炉",
					price:58,
					num:1,
          date: "2019-04-30 11:48",
					id:29
				},
				{
					name:"智能电视",
					price:88,
					num:1,
          date: "2019-05-22 11:48",
					id:2
        },
        {
					name:"扫地机器人",
					price:88,
          date: "2019-06-10 11:48",
					num:1,
					id:23
				}
			],
      [
        {
          name: "12月电费",
          price: -89,
          date: "2019-12-31 12:21",
          num: 1,
          id: 20
        },
        {
          name: "11月电费",
          price: -78,
          date: "2019-11-30 08: 21",
          num: 1,
          id: 21
        },
        {
          name: "10月电费",
          price: -66,
          date: "2019-10-31 09:23",
          num: 1,
          id: 22
        },
        {
          name: "缴纳电费",
          price: 300,
          date: "2019-10-23 10:23",
          num: 1,
          id: 23
        },
        {
          name: "09月电费",
          price: -78,
          date: "2019-09-30 11:48",
          num: 1,
          id: 24
        },
      ],
			[
        {
          name: "冰箱",
          price: 38,
          date: "2019-10-30 11:48",
          num: 1,
          id: 1
        },
        {
          name: "微波炉",
          price: 58,
          num: 1,
          date: "2019-04-30 11:48",
          id: 29
        },
			],
			[
        {
          name: "智能电视",
          price: 88,
          num: 1,
          date: "2019-05-22 11:48",
          id: 2
        },
        {
          name: "扫地机器人",
          price: 88,
          date: "2019-06-10 11:48",
          num: 1,
          id: 23
        }
			],
			[]
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
		this.loadingChange()
	}
})