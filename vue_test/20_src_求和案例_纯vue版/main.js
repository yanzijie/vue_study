//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		// 命名为 $bus 是为了符合vue的设计, $xxx 是给程序员用的
		//安装全局事件总线
		Vue.prototype.$bus = this
	},
})