<script setup name="Layout">
import useSettingsStore from '@/store/modules/settings'
import useKeepAliveStore from '@/store/modules/keepAlive'
import useMenuStore from '@/store/modules/menu'
import { isExternalLink } from '@/util'
import { useWatermark } from '@/util/useWatermark'
import Header from './components/Header/index.vue'
import HeaderName from './components/HeaderName.vue'
import equipment from './components/equipment.vue'
import gaodeMap from './components/gaodeMap.vue'
import MapDeatil from './components/MapDeatil.vue'
import AddEquipment from './components/AddEquipment.vue'
import ControlCard from './components/ControlCard.vue'
import { ref } from 'vue'
const { proxy } = getCurrentInstance()
const routeInfo = useRoute(), router = useRouter()

const settingsStore = useSettingsStore()
const keepAliveStore = useKeepAliveStore()
const menuStore = useMenuStore()
const radio1 = ref('地图模式')
useWatermark()

const showCopyright = computed(() => {
    return typeof routeInfo.meta.copyright !== 'undefined' ? routeInfo.meta.copyright : settingsStore.copyright.enable
})

watch(() => settingsStore.menu.subMenuCollapse, val => {
    if (settingsStore.mode === 'mobile') {
        if (!val) {
            document.querySelector('body').classList.add('hidden')
        } else {
            document.querySelector('body').classList.remove('hidden')
        }
    }
})

watch(() => routeInfo.path, () => {
    if (settingsStore.mode === 'mobile') {
        settingsStore.$patch(state => {
            state.menu.subMenuCollapse = true
        })
    }
})

onMounted(() => {
    proxy.$hotkeys('f5', e => {
        if (settingsStore.toolbar.enablePageReload) {
            e.preventDefault()
            reload()
        }
    })
})
onUnmounted(() => {
    proxy.$hotkeys.unbind('f5')
})
provide('reload', reload)
function reload() {
    router.push({
        name: 'reload'
    })
}

provide('switchMenu', switchMenu)
function switchMenu(index) {
    menuStore.setActived(index)
    if (settingsStore.menu.switchMainMenuAndPageJump) {
        if (isExternalLink(menuStore.sidebarMenusFirstDeepestPath)) {
            window.open(menuStore.sidebarMenusFirstDeepestPath, '_blank')
        } else {
            router.push(menuStore.sidebarMenusFirstDeepestPath)
        }
    }
}
function c_title() {
    let a = ''
    switch (routeInfo.name) {
        case 'controlpanel':
            a = '控制台'
            break
        case 'facility':
            a = '设备'
            break
        case 'addfacility':
            a = '新增设备'
            break
    }
    return a
}
</script>

<template>
    <div class="layout">
        <div id="app-main" :class="{'main-page-maximize': settingsStore.mainPageMaximizeStatus}">
            <!-- <Header /> -->
            <Header class="header" />
            <div class="HeaderName">
                <HeaderName :title="c_title()">
                    <el-radio-group v-if="routeInfo.name=='facility'" v-model="radio1">
                        <el-radio-button label="地图模式" />
                        <el-radio-button label="列表模式" />
                    </el-radio-group>
                </HeaderName>
            </div>
            <!-- 控制台 -->
            <div v-if="routeInfo.name=='controlpanel'" class="ControlCard1">
                <ControlCard />
            </div>
            <!-- <div class="wrapper">
                <div class="sidebar-container" :class="{'show': settingsStore.mode === 'mobile' && !settingsStore.menu.subMenuCollapse}">
                    <MainSidebar />
                    <SubSidebar />
                </div>
                <div class="sidebar-mask" :class="{'show': settingsStore.mode === 'mobile' && !settingsStore.menu.subMenuCollapse}" @click="settingsStore.toggleSidebarCollapse()" />
                <div class="main-container" :style="{'padding-bottom': $route.meta.paddingBottom}">
                    <Topbar />
                    <div class="main">
                        <div v-show="settingsStore.mainPageMaximizeStatus" class="exit-main-page-maximize" @click="settingsStore.setMainPageMaximize()">
                            <el-icon>
                                <svg-icon name="i-ri:logout-box-line" />
                            </el-icon>
                        </div>
                        <router-view v-slot="{ Component, route }">
                            <transition name="main" mode="out-in" appear>
                                <keep-alive :include="keepAliveStore.list">
                                    <component :is="Component" :key="route.fullPath" />
                                </keep-alive>
                            </transition>
                        </router-view>
                    </div>
                    <Copyright v-if="showCopyright" />
                </div>
            </div> -->
            <!-- <el-backtop :right="20" :bottom="20" title="回到顶部" /> -->
            <!-- 设备相关 -->
            <div v-if="routeInfo.name=='facility' && radio1=='列表模式'" class="equipment">
                <equipment v-if="routeInfo.name=='facility'" />
            </div>
            <div v-if="routeInfo.name=='facility'&&radio1=='地图模式'" class="Map">
                <gaode-map />
            </div>
            <!-- {{ routeInfo.name }} -->
            <div v-if="routeInfo.name=='addfacility'" class="addequipment">
                <AddEquipment />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$param:100 / 1920;
@media screen and (max-width: 992px) {
    .layout {
        position: absolute;
        top: -4.1666vw;
        background-color: #15232e;
    }
}
html,
body,
.layout {
    width: 100vw;
    background-color: #15232e;
    padding-bottom: 1px;
    .equipment {
        margin: 0 auto;
        margin-top: 20vw * $param;
    }
    .HeaderName {
        width: 100vw;
    }
    .addequipment {
        margin-top: 0.7375vw;
        margin-right: 0.7375vw;
        margin-bottom: 0.7375vw;
    }
}
.mapDeatil {
    position: relative;
    top: 0;
}
.Map {
    width: 100%;
    height: 500vw * $param;
}
.ControlCard1 {
    margin-top: 20vw * $param;
}
.d1 {
    height: 200vw * $param;
    width: 100%;
    background-color: aqua;
}
.HeaderName {
    height: 80vw * $param;
    margin-top: 80vw * $param;
}
[data-app-width-mode="adaption"] {
    #app-main {
        width: 100%;
    }
}
[data-app-width-mode="adaption-min-width"] {
    #app-main {
        min-width: var(--g-app-width);
    }
}
[data-app-width-mode="center"] {
    #app-main {
        width: var(--g-app-width);
    }
}
[data-app-width-mode="center-max-width"] {
    #app-main {
        width: var(--g-app-width);
        max-width: 100%;
    }
}
[data-mode="mobile"] {
    #app-main {
        width: 100%;
        min-width: unset;
        max-width: unset;
    }
    .sidebar-container {
        transform: translateX(calc((var(--g-main-sidebar-width) + var(--g-sub-sidebar-width)) * -1));
        &.show {
            transform: translateX(0);
        }
    }
    .main-container {
        margin-left: 0 !important;
    }
    &[data-menu-mode="single"] {
        .sidebar-container {
            transform: translateX(calc(var(--g-sub-sidebar-width) * -1));
            &.show {
                transform: translateX(0);
            }
        }
    }
}
#app-main {
    margin: 0 auto;
    transition: var(--el-transition-all);
    // 当前标签页全屏
    &.main-page-maximize {
        header,
        .sidebar-container {
            display: none;
        }
        :deep([data-fixed-calc-width]) {
            width: 100%;
            transform: translateX(-50%);
        }
    }
}

// 主内容区动画
.main-enter-active {
    transition: 0.2s;
}
.main-leave-active {
    transition: 0.15s;
}
.main-enter-from {
    opacity: 0;
    margin-left: -20px;
}
.main-leave-to {
    opacity: 0;
    margin-left: 20px;
}
</style>
