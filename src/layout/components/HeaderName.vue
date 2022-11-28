<script setup name="HeaderName">
const props = defineProps(['title'])
</script>
<template>
    <div>
        <span class="span1">
            {{ props.title }}
            <span class="div_slot">
                <slot />
            </span>
        </span>
    </div>
</template>
<style lang="scss" scoped>
$param:100 / 1920;
.span1 {
    display: inline-block;
    padding-top: 24vw * $param;
    font-size: 22vw * $param;
    padding-left: 31vw * $param;
    padding-right: 15vw * $param;
    width: 100%;
    height: 80vw * $param;
    color: white !important;
    background-color: #334067;
}
.div_slot {
    float: right;
}
</style>
