import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './styles/main.less'

const app = createApp(App).mount('#app')
app.use(ElementPlus)
