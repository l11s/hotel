<script setup name="HeaderName">
// width: 448px;
//         height: 22px;
import { defineProps } from 'vue'
const props = defineProps(['w', 'h', 'num'])
</script>
<template>
    <div class="control">
        <span :style="'line-height:'+h+';'">济南</span>
        <div class="c1" :style="'width:'+w+';'+'height:'+h+';'" />
        <span :style="'line-height:'+h+';'">{{ num }}人</span>
    </div>
</template>
<style lang="scss" scoped>
.control {
    display: flex;
    >span:first-child {
        font-size: 14px;
        color: white;
        margin-right: 13px;
    }
    >span:last-child {
        font-size: 14px;
        color: white;
        margin-left: 22px;
    }
    .c1 {
        background: linear-gradient(90deg, #e6b02c 0%, #e6b02c 0%, #e37e26 99%, #e37e26 100%);
    }
}
</style>
