import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import pinia from './store'
app.use(pinia)

import router from './router'
app.use(router)

import { useI18n } from './locales'
useI18n(app)

/* importElementPlusPlaceholder */

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
app.use(ContextMenu)

import globalProperties from '@/util/global.properties'
globalProperties(app)

// 自定义指令
import directive from '@/util/directive'
directive(app)

// 错误日志上报
import errorLog from '@/util/error.log'
errorLog(app)

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 加载 iconify 图标
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'
if (icons.useType === 'offline') {
    for (const info of icons.collections) {
        downloadAndInstall(info)
    }
}

// 全局样式
import 'uno.css'
import '@/assets/styles/globals.scss'

// PWA
// import './pwa'

app.mount('#app')
