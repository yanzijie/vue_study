import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入饿了么 ui
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'

// 导入自己的scss文件
import './assets/my.scss'
// 导入所有bootstrapjs
import * as bootstrap from 'bootstrap'

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(router)

app.mount('#app')
