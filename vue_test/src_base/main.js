/*
	该文件是整个项目的入口文件, 执行npm run serve 的时候，就是执行 01_src脚手架分析/main.js
*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象---vm
new Vue({
    //render函数完成了这个功能：将App组件放入容器中
  render: h => h(App),
    // render:q=> q('h1','你好啊')

    // template:`<h1>你好啊</h1>`,
    // components:{App},

    // 把vm挂载到id=app这个容器，在public/index.html中, 所以渲染的时候其实就是渲染public/index.html
}).$mount('#app')
