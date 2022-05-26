import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"

import 'vant/lib/index.css';
import { vant } from '~/vant';
const app = createApp(App)
vant(app);
app.use(ElementPlus)
app.mount('#app')
