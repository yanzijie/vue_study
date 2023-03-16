// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import DetailQuery from "@/pages/DetailQuery"
import DetailParams from "@/pages/DetailParams"

//创建并暴露一个路由器, 多级路由
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							// 这样写就是给路由起个名字,好处是router-link 指向的时候 不用写 path: '/home/message/detail'
							// 直接写 name: "detail_1" 就可以了，就是一个简化的功能
							// 接受 params 要使用 name 的方式，并且要在路径上注明参数
							// 但如果是 query传参，path中就不能注明参数，只能写 path: 'detail'
							name:"detailParams",
							path:'detailParams/:id/:title',
							component:DetailParams,
						},
						{
							name:"detailQuery",
							path:'detailQuery',
							component:DetailQuery,
						}
					]
				}
			]
		}
	]
})
