//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用ElementUI
// Vue.use(ElementUI);

// 注册组件, 样式会自动分析引入（配置babel.config.js就行）
// 第一个参数: 我们定义的组件名, 也可以使用组件的默认名字, button.name 就是 el-button
// 第二个参数: 要注册的组件
Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker', DatePicker);

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
})
