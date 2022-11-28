<!-- <script src="./echarts.js"></script> -->
<script setup name="HeaderName">
import ControlDetails from './ControlDetails.vue'
import peopleNum from './peopleNum.vue'
import './echarts.js'
const { proxy } = getCurrentInstance()
console.log(echarts.init)
const chart1 = ref(null)
const peoples = ref([
    5, 10, 20, 30, 40
])
onMounted(() => {
    initChart1()
    window.addEventListener('resize', () => {
        this.chart1.resize()
    })
})
function drawPeople() {
    for (let i = 0; i < peoples.value.length - 1; i++) {
        for (let j = 0; j < peoples.value.length - 1; j++) {
            if (peoples.value[j] < peoples.value[j + 1]) {
                let a = peoples.value[j]
                peoples.value[j] = peoples.value[j + 1]
                peoples.value[j + 1] = a
            }
        }
    }
    return peoples.value
}
// console.log(drawPeople())
const MostPeople = computed(() => {
    // let index = peoples.value[0]
    for (let i = 0; i < peoples.value.length - 1; i++) {
        for (let j = 0; j < peoples.value.length - 1; j++) {
            if (peoples.value[j] < peoples.value[j + 1]) {
                let a = peoples.value[j]
                peoples.value[j] = peoples.value[j + 1]
                peoples.value[j + 1] = a
            }
        }
    }
    return peoples.value
})
const MostOnePeople = computed(() => {
    return peoples.value[0]
})
function initChart1() {
    // 初始化
    chart1.value = echarts.init(proxy.$refs.chart1)
    // 配置数据
    let option = {

        xAxis: [
            {
                axisLine: {
                    lineStyle: {
                        color: '#e2e2e2'
                    }
                },
                type: 'category',
                data: ['2017年', '2018年', '2019年', '2020年', '2021年', '2022年'],
                axisPointer: {
                    type: 'shadow'
                },
                axisTick: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#e2e2e2'
                    }
                },
                legend: {
                    padding: -50
                },
                type: 'value',
                min: 0,
                max: 8,
                interval: 4,
                axisLabel: {
                    formatter: '{value} 人'
                },
                label: {
                    textStyle: {
                        color: '#e2e2e2'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Evaporation',
                type: 'bar',
                barWidth: 30,
                itemStyle: {
                    color: '#00DADB'
                },
                data: [
                    2.0, 4.9, 7.0, 2.0, 4.9, 7.0
                ]
            },

            {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 0,
                itemStyle: {
                    color: '#ffb200'
                },
                data: [
                    2.0, 4.9, 7.0, 2.0, 4.9, 7.0
                ]
            }
        ]
    }
    // 传入数据
    chart1.value.setOption(option)
}
</script>
<template>
    <div class="control">
        <div class="control1">
            <el-card shadow="never" class="card">
                <div class="statistics">系统统计</div>
                <div class="details">
                    <ControlDetails out_title="客户数" number="256" out_unit="台" w="11.6406vw" h="8.828vw" />
                    <ControlDetails out_title="设备数" number="526" out_unit="台" w="11.6406vw" h="8.828vw" />
                    <ControlDetails out_title="报警" number="1" out_unit="台" w="11.6406vw" h="8.828vw" />
                </div>
            </el-card>
            <el-card shadow="never" class="card card_order">
                <div class="statistics">工单统计</div>
                <div class="details">
                    <ControlDetails out_title="工单数" number="1" out_unit="单" w="9.6875vw" h="8.4375vw" />
                    <ControlDetails out_title="已处理" number="1" out_unit="单" w="9.6875vw" h="8.4375vw" />
                    <ControlDetails out_title="待处理" number="1" out_unit="单" w="9.6875vw" h="8.4375vw" />
                    <ControlDetails out_title="处理中" number="1" out_unit="单" w="9.6875vw" h="8.4375vw" />
                </div>
            </el-card>
        </div>
        <div class="control1">
            <el-card shadow="never" class=" card card_user">
                <div class="statistics">客户增长</div>
                <div ref="chart1" class="rise" />
            </el-card>
            <el-card shadow="never" class="card card_add">
                <div class="statistics">客户城市分布排行</div>
                <div class="last_details">
                    <peopleNum v-for="(val, index) in MostPeople" :key="index" class="peoNum"
                        :w="val / MostOnePeople * 448 * 1.25 / 19.2 + 'vw'" :num="val" h="1.5625vw" />
                </div>
            </el-card>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$param: 100 / 1920;

* {
    margin: 0;
    padding: 0;
}

:deep(.ControlCard1[data-v-13877386]) {
    margin: 0 !important;
}

.control {
    .control1 {
        display: flex;
        margin-bottom: 25vw * $param * 1.3;
        justify-content: space-around;

        .last_details {
            width: 609vw * $param * 1.5;
            height: 207vw * $param * 1.5;
            overflow: auto;

            .peoNum {
                margin-top: 10vw * $param * 1.5;
                margin-left: 27vw * $param * 1.5;
            }
        }
    }

    .card {
        width: 576vw * $param * 1.5;
        height: 236vw * $param * 1.5;
        background-color: #006aa4;

        :deep(.el-card__body) {
            padding: 0;
            margin: 0;
        }

        .statistics {
            padding-top: 18vw * $param * 1.5;
            padding-left: 20vw * $param * 1.5;
            font-size: 18vw * $param * 1.5;
            color: white;
            height: 61vw * $param * 1.5;
            width: 100%;
            border-bottom: 1px solid rgb(214 214 214 / 50%);
        }

        .details {
            width: 100%;
            height: 175vw * $param * 1.5;
            padding-top: 19vw * $param * 1.5;
            display: flex;
            justify-content: space-around;
        }

        .rise {
            width: 566vw * $param * 1.34;
            height: 255vw * $param * 1.33;
            position: absolute;
            top: 458vw * $param * 1.35;
            left: 100vw * $param;
        }
    }

    .card_order,
    .card_add {
        width: 609vw * $param * 1.5;
    }

    .card_user,
    .card_add {
        margin-bottom: 0;
    }
}
</style>
