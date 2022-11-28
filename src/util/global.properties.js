import api from '@/api'
import { auth, authAll } from '@/util'
import router from '@/router'
import useSettingsStore from '@/store/modules/settings'
import useTabbarStore from '@/store/modules/tabbar'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Cookies from 'js-cookie'
import hotkeys from 'hotkeys-js'
import QRCode from 'qrcode'
import mitt from 'mitt'
import Notify from '@wcjiang/notify'

export default function globalProperties(app) {
    const settingsStore = useSettingsStore()
    const tabbarStore = useTabbarStore()
    // 请求
    app.config.globalProperties.$api = api
    // 鉴权
    app.config.globalProperties.$auth = auth
    app.config.globalProperties.$authAll = authAll
    // 标签栏关闭
    app.config.globalProperties.$tabbar = {
        getId: () => {
            return settingsStore.tabbar.mergeTabs ? (router.currentRoute.value.meta.activeMenu || router.currentRoute.value.fullPath) : router.currentRoute.value.fullPath
        },
        closeById: tabId => {
            let activedTabId = settingsStore.tabbar.mergeTabs ? (router.currentRoute.value.meta.activeMenu || router.currentRoute.value.fullPath) : router.currentRoute.value.fullPath
            // 如果关闭的标签正好是当前路由，并且标签栏数目大于 1
            if (tabId == activedTabId && tabbarStore.list.length > 1) {
                let index = ~~Object.keys(tabbarStore.list).find(i => {
                    return tabbarStore.list[i].tabId == tabId
                })
                if (index < tabbarStore.list.length - 1) {
                    router.push(tabbarStore.list[index + 1].fullPath)
                } else {
                    router.push(tabbarStore.list[index - 1].fullPath)
                }
            }
            if (tabbarStore.list.length > 1) {
                tabbarStore.remove(tabId)
            } else {
                ElMessage.error('当前只有一个标签页，已阻止关闭')
            }
        },
        close: to => {
            let tabId = settingsStore.tabbar.mergeTabs ? (router.currentRoute.value.meta.activeMenu || router.currentRoute.value.fullPath) : router.currentRoute.value.fullPath
            tabbarStore.remove(tabId)
            router.push(to)
        }
    }
    // 主页面最大化
    app.config.globalProperties.$mainPageMaximize = status => {
        settingsStore.setMainPageMaximize(status)
    }
    dayjs.locale('zh-cn')
    app.config.globalProperties.$dayjs = dayjs
    app.config.globalProperties.$cookies = Cookies
    app.config.globalProperties.$hotkeys = hotkeys
    app.config.globalProperties.$qrcode = QRCode
    app.config.globalProperties.$eventBus = mitt()
    app.config.globalProperties.$iNotify = options => new Notify(options)
}
