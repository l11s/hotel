<script setup name="ControlDetails">
const props = defineProps(['w', 'h', 'out_title', 'out_unit', 'number'])
// console.log(props.out_title)
</script>
<template>
    <el-card shadow="never" class="card1" :style="'width:'+w+';height:'+h+';'">
        <span class="title">{{ out_title }}</span>
        <span class="num">{{ number }}</span>
        <span class="unit">{{ out_unit }}</span>
    </el-card>
</template>
<style lang="scss" scoped>
$param:100 / 1920;
.card1 {
    padding-top: 27vw * $param;
    padding-left: 21vw * $param;
    background-color: #004f60;
    box-sizing: border-box;
    border: 1vw * $param solid #b7f1fa;
    box-shadow: inset 0 0 11vw * $param 0 rgb(124 224 255 / 80%);
    color: white;
    .title {
        display: block;
        font-size: 18vw * $param;
        margin-bottom: 16vw * $param;
    }
    .num {
        font-size: 50vw * $param;
        color: #25cbff;
        margin-right: 10vw * $param;
    }
    .unit {
        font-size: 12vw * $param;
    }
}
</style>
