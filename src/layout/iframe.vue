<script setup name="IframeLayout">
const { proxy } = getCurrentInstance()
const route = useRoute()

const iframe = ref({
    loading: true,
    src: ''
})

onMounted(() => {
    iframe.value.src = route.meta.link
    proxy.$refs.iframeRef.onload = () => {
        iframe.value.loading = false
    }
})
</script>

<template>
    <div v-loading="iframe.loading" class="iframe">
        <iframe ref="iframeRef" :src="iframe.src" frameborder="0" />
    </div>
</template>

<style lang="scss" scoped>
.iframe,
iframe {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
}
</style>
