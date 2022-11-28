import pinia from '@/store'
import useSettingsStore from '@/store/modules/settings'

// 固定路由（默认路由），
let constantRoutes = [
    {
        path: '/',
        redirect: '/controlpanel'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
        meta: {
            whiteList: true,
            title: '登录',
            i18n: 'route.login'
        }
    }
]

// 系统路由
let systemRoutes = [
    {
        path: '/dashboard',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: () => {
                return useSettingsStore().dashboard.title
            },
            breadcrumb: false
        },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/views/index.vue'),
                meta: {
                    title: () => {
                        return useSettingsStore().dashboard.title
                    },
                    i18n: 'route.dashboard',
                    breadcrumb: false
                }
            }
        ]
    },
    {
        path: '/personal',
        component: () => import('@/layout/index.vue'),
        redirect: '/personal/setting',
        meta: {
            title: '个人中心',
            breadcrumb: false
        },
        children: [
            {
                path: 'setting',
                name: 'personalSetting',
                component: () => import('@/views/personal/setting.vue'),
                meta: {
                    title: '个人设置',
                    i18n: 'route.personal.setting',
                    cache: 'personalEditPassword'
                }
            },
            {
                path: 'edit/password',
                name: 'personalEditPassword',
                component: () => import('@/views/personal/edit.password.vue'),
                meta: {
                    title: '修改密码',
                    i18n: 'route.personal.editpassword'
                }
            }
        ]
    },
    {
        path: '/reload',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '重新加载',
            breadcrumb: false
        },
        children: [
            {
                path: '',
                name: 'reload',
                component: () => import('@/views/reload.vue'),
                meta: {
                    title: '重新加载',
                    breadcrumb: false
                }
            }
        ]
    }
]
// import KeepAliveExample from './modules/keep.alive.example'
// import KeepAliveExample from './modules/keep.alive.example'
/**
import MultilevelMenuExample from './modules/multilevel.menu.example'
import BreadcrumbExample from './modules/breadcrumb.example'
import KeepAliveExample from './modules/keep.alive.example'
import menuIconExample from './modules/menu.icon.example'
import menuBadgeExample from './modules/menu.badge.example'
import tabExample from './modules/tab.example'
import ComponentBasicExample from './modules/component.basic.example'
import ComponentExtendExample from './modules/component.extend.example'
import IconExample from './modules/icon.example'
import LayoutContainerExample from './modules/layout.container.example'
import FeatureExample from './modules/feature.example'
import AnimationExample from './modules/animation.example'
import ChartExample from './modules/chart.example'
import PermissionExample from './modules/permission.example'
import MockExample from './modules/mock.example'
import JsxExample from './modules/jsx.example'
import ExternalLinkExample from './modules/external.link.example'
 */
// import PagesExample from './modules/pages.example'
// import EcologyExample from './modules/ecology.example'

// 动态路由（异步路由、导航栏路由）
// const Layout = () => import('@/layout/index.vue')
let asyncRoutes = [
    {
        meta: {
            title: '控制台',
            i18n: 'route.demo',
            icon: '控制台'
        },
        children: [
            {
                path: '/controlpanel',
                name: 'controlpanel',
                component: () => import('@/layout/index.vue'),
                meta: {
                    title: '控制台',
                    i18n: 'route.keepAlive.page'
                }
            }
        ]
    },
    {
        meta: {
            title: '设备',
            i18n: 'route.page',
            icon: '关联设备'
        },
        children: [
            {
                path: '/facility',
                name: 'facility',
                component: () => import('@/layout/index.vue'),
                meta: {
                    title: '设备',
                    i18n: 'route.keepAlive.page'
                }
            },
            {
                path: '/addfacility',
                name: 'addfacility',
                component: () => import('@/layout/index.vue'),
                meta: {
                    title: '新增设备',
                    i18n: 'route.keepAlive.page'
                }
            }
        ]
    },
    {
        meta: {
            title: '报警',
            i18n: 'route.ecology',
            icon: '报警'
        },
        children: [
            {
                path: '/callthepolice',
                name: 'callthepolice',
                component: () => import('@/layout/index.vue'),
                meta: {
                    title: '报警',
                    i18n: 'route.keepAlive.page'
                }
            }
        ]
    },
    {
        meta: {
            title: '工单',
            i18n: 'route.ecology',
            icon: '工单'
        },
        children: [
            {
                path: '/order',
                name: 'order',
                component: () => import('@/layout/index.vue'),
                meta: {
                    title: '工单',
                    i18n: 'route.keepAlive.page'
                }
            }
        ]
    },
    {
        meta: {
            title: '配置',
            i18n: 'route.ecology',
            icon: '配置'
        },
        children: [
            {
                path: '/configuration',
                name: 'configuration',
                component: () => import('@/layout/index.vue'),
                meta: {
                    title: '配置',
                    i18n: 'route.keepAlive.page'
                }
            }
        ]
    },
    {
        meta: {
            title: '用户',
            i18n: 'route.ecology',
            icon: '224用户'
        },
        children: [
            {
                path: '/user',
                name: 'user',
                component: () => import('@/layout/index.vue'),
                meta: {
                    title: '用户',
                    i18n: 'route.keepAlive.page'
                }
            }
        ]
    },
    {
        meta: {
            title: '大屏',
            i18n: 'route.ecology',
            icon: '大屏'
        },
        children: [
            {
                path: '/bigscreen',
                name: 'bigscreen',
                component: () => import('@/layout/index.vue'),
                meta: {
                    title: '大屏',
                    i18n: 'route.keepAlive.page'
                }
            }
        ]
    }
]

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

if (useSettingsStore(pinia).app.routeBaseOn === 'filesystem') {
    constantRoutes = generatedRoutes.filter(item => {
        return item.meta?.enabled !== false && item.meta?.constant === true
    })
    asyncRoutes = setupLayouts(generatedRoutes.filter(item => {
        return item.meta?.enabled !== false && item.meta?.constant !== true && item.meta?.layout !== false
    }))
}

export {
    constantRoutes,
    systemRoutes,
    asyncRoutes
}
