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
		dishesList:[
			[
        {
          "title": "12月电费",
          "date": "2019-12-31 12:21",
          "money": "-89"
        },
        {
          "title": "11月电费",
          "date": "2019-11-30 08:21",
          "money": "-78"
        },
        {
          "title": "10月电费",
          "date": "2019-10-31 09:23",
          "money": "-66"
        },
        {
          "title": "缴纳电费",
          "date": "2019-10-23 10:23",
          "money": "300"
        },
        {
          "title": "冰箱",
          "money": "38",
          "date": "2019-10-23 10:23",
        },
        {
          "title": "微波炉",
          "date": "2019-06-30 11:53",
          "money": "58",
        },
        {
          "title": "9月电费",
          "date": "2019-09-30 11:48",
          "money": "-79"
        },
        {
          "title": "08月电费",
          "date": "2019-08-31 15:02",
          "money": "-40"
        },
        {
          "title": "智能电视",
          "date": "2019-07-31 18:23",
          "money": "88",
        },
        {
          "title": "扫地机器人",
          "money": "88",
          "date": "2019-09-30 11:48",
        },
        {
          "title": "07月电费",
          "date": "2019-07-31 18:23",
          "money": "-99"
        },
        {
          "title": "缴纳电费",
          "date": "2019-07-23 12:23",
          "money": "200"
        },
        {
          "title": "6月电费",
          "date": "2019-06-30 11:53",
          "money": "-71"
        },
			],
			[
        {
          "title": "12月电费",
          "date": "2019-12-31 12:21",
          "money": "-89"
        },
        {
          "title": "11月电费",
          "date": "2019-11-30 08:21",
          "money": "-78"
        },
        {
          "title": "10月电费",
          "date": "2019-10-31 09:23",
          "money": "-66"
        },
        {
          "title": "缴纳电费",
          "date": "2019-10-23 10:23",
          "money": "300"
        },
        {
          "title": "9月电费",
          "date": "2019-09-30 11:48",
          "money": "-79"
        },
        {
          "title": "08月电费",
          "date": "2019-08-31 15:02",
          "money": "-40"
        },
        {
          "title": "07月电费",
          "date": "2019-07-31 18:23",
          "money": "-99"
        },
        {
          "title": "缴纳电费",
          "date": "2019-07-23 12:23",
          "money": "200"
        },
        {
          "title": "6月电费",
          "date": "2019-06-30 11:53",
          "money": "-71"
        },
        {
          "title": "5月电费",
          "date": "2019-05-31 19:53",
          "money": "-62"
        }
			],
			[
        {
          "title": "冰箱",
          "money": "-38",
          "date": "2019-10-23 10:23",
        },
        {
          "title": "微波炉",
          "date": "2019-06-30 11:53",
          "money": "-58",
        },
			],
      [
        {
          "title": "智能电视",
          "date": "2019-07-31 18:23",
          "money": "-88",
        },
        {
          "title": "扫地机器人",
          "money": "-178",
          "date": "2019-09-30 11:48",
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