import App from './App.vue'

// 注意：浏览器不支持这种ES6写法，就是上面那个import, 这种是脚手架里面才可以用

new Vue({
	el: '#root',                // 绑定id=root的 div, 在这个div中渲染内容
	template: `<App></App>`,	// 在页面中使用 App 组件模版
	components: { App },		// 注册组件 App 组件
})
