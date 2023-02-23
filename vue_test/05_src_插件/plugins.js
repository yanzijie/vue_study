// 暴露插件
export default {
    // 插件必须写 install () {}
    // 形参 Vue 是vue的对象实例vm, x,y,z是使用插件时候一起传递进来的参数
	install(Vue,x,y,z){
		console.log(x,y,z)

        // 过滤器：
		// 		定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
		// 		语法：
		// 				1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
        //              2.使用过滤器：{{ 变量名 | 过滤器名}}  或  v-bind:属性 = "变量名 | 过滤器名"
        // 备注：
		// 		1.过滤器也可以接收额外参数、多个过滤器也可以串联
        //      2.并没有改变原本的数据, 是产生新的对应的数据


		//全局过滤器
		Vue.filter('mySlice',function(value){
            // 切割返回value的前4个字符
			return value.slice(0,4)
		})

		//定义全局指令
		Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		})

		//定义混入, 把混入写入插件中，就不需要在组件中逐个引入，全局引入插件就行了
		Vue.mixin({
			data() {
				return {
					x:100,
					y:200
				}
			},
		})

		//给Vue原型上添加一个方法（vm和vc就都能用了）
		Vue.prototype.hello = ()=>{alert('你好啊')}
	}
}
