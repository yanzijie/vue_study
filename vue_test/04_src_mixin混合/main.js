//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

// main.js中也可以引入混合，这个是全局混合，在组件内部就不用一个一个的引入了
// import {hunhe,hunhe2} from './mixin'

//关闭Vue的生产提示
Vue.config.productionTip = false

// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})
