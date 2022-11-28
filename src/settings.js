let globalSettings = {
    // 应用
    app: {
        /**
         * 主题
         * default 默认
         * sys_green 绿色
         * sys_orange 橙色
         * sys_pink 粉色
         * sys_grey 灰色
         * sys_yellow 黄色
         */
        theme: 'default',
        /**
         * 颜色方案
         * 留空 跟随系统
         * light 明亮模式
         * dark 暗黑模式
         */
        colorScheme: 'light',
        /**
         * Element Plus 组件默认尺寸
         * default 默认
         * large 大号
         * small 小号
         */
        elementSize: 'default',
        // 默认语言，留空则跟随系统
        defaultLang: '',
        /**
         * 是否开启权限功能，权限功能提供以下鉴权支持：
         * 1、路由鉴权
         * 2、鉴权组件：<Auth></Auth>、<AuthAll></AuthAll>
         * 3、鉴权指令：v-auth、v-auth-all
         * 4、鉴权函数：$auth()、$authAll()
         */
        enablePermission: false,
        // 是否开启载入进度条
        enableProgress: true,
        // 是否开启动态标题
        enableDynamicTitle: false,
        // localStorage sessionStorage 前缀
        storagePrefix: 'fa_',
        // 是否开启页面水印
        enableWatermark: false,
        // 是否在非开发环境开启错误日志功能，具体业务代码在 ./util/error.log.js
        enableErrorLog: false,
        /**
         * 路由数据来源
         * frontend 前端
         * backend 后端
         * filesystem 文件系统
         */
        routeBaseOn: 'frontend'
    },
    // 控制台
    dashboard: {
        // 是否开启
        enable: true,
        // 控制台名称
        title: '控制台'
    },
    // 布局
    layout: {
        /**
         * 页宽模式，当设置为非 adaption 时，请去 ./src/assets/styles/layout.scss 里设置 --g-app-width
         * adaption 自适应
         * adaption-min-width 自适应（有最小宽度）
         * center 定宽居中
         * center-max-width 定宽居中（有最大宽度）
         */
        widthMode: 'adaption',
        // 是否开启移动端适配，开启后当页面宽度小于 992px 时自动切换为移动端展示
        enableMobileAdaptation: true
    },
    // 导航栏
    menu: {
        /**
         * 数据来源，当 app.routeBaseOn 为 filesystem 时生效
         * frontend 前端
         * backend 后端
         */
        baseOn: 'frontend',
        /**
         * 导航栏模式
         * side 侧边栏模式（含主导航）
         * head 顶部模式
         * single 侧边栏模式（无主导航）
         * only-side 侧边栏精简模式
         * only-head 顶部精简模式
         */
        menuMode: 'head',
        /**
         * 导航栏填充风格
         * 留空 默认
         * radius 圆角
         */
        menuFillStyle: '',
        /**
          * 导航栏激活风格
          * 留空 默认
          * arrow 箭头
          * line 线条
          * dot 点
          */
        menuActiveStyle: '',
        // 切换主导航同时跳转页面
        switchMainMenuAndPageJump: false,
        // 次导航只保持一个子项的展开
        subMenuUniqueOpened: true,
        // 次导航只有一个导航时自动隐藏
        subMenuOnylOneHide: false,
        // 次导航是否收起
        subMenuCollapse: false
    },
    // 顶栏
    topbar: {
        // 是否固定
        fixed: true,
        // 是否切换显示标签栏和工具栏的显示位置，设置为 false 标签栏在工具栏上面，设置为 true 工具栏在标签栏上面
        switchTabbarAndToolbar: false
    },
    // 标签栏
    tabbar: {
        // 是否开启
        enable: false,
        /**
         * 标签栏风格
         * fashion 时尚
         * card 卡片
         * square 方块
         */
        style: 'fashion',
        // 是否合并标签页，设置为 true 时，会将设置过 activeMenu 的路由与 activeMenu 指向的目标路由合并为一个
        mergeTabs: false
    },
    // 工具栏
    toolbar: {
        // 是否开启侧边栏展开收起按钮
        enableSidebarCollapse: false,
        // 是否开启导航搜索
        enableNavSearch: true,
        // 是否开启通知中心
        enableNotification: false,
        // 是否开启国际化
        enableI18n: false,
        // 是否开启全屏
        enableFullscreen: false,
        // 是否开启页面刷新
        enablePageReload: false,
        // 是否开启颜色主题
        enableColorScheme: false,
        // 是否开启应用配置（建议在生产环境关闭）
        enableAppSetting: false
    },
    // 面包屑导航
    breadcrumb: {
        // 是否开启
        enable: true,
        /**
         * 标签栏风格
         * 留空 默认
         * modern 现代
         */
        style: ''
    },
    // 底部版权
    copyright: {
        // 是否开启，同时在路由 meta 对象里可以单独设置某个路由是否显示底部版权信息
        enable: true,
        // 版权信息配置，格式为：Copyright © [dates] <company> <beian>
        dates: '2020-2022',
        company: 'Fantastic-admin',
        website: 'https://hooray.github.io/fantastic-admin/',
        beian: ''
    }
}

import settingsCustom from './settings.custom.json'
Object.assign(globalSettings, settingsCustom)

export default globalSettings
