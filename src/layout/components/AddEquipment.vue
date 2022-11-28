<script setup name="HeaderName">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
const value = ref('')
const input = ref('')
const options = [
    {
        value: 'Option1',
        label: 'Option1'
    },
    {
        value: 'Option2',
        label: 'Option2'
    },
    {
        value: 'Option3',
        label: 'Option3'
    },
    {
        value: 'Option4',
        label: 'Option4'
    },
    {
        value: 'Option5',
        label: 'Option5'
    }
]
const tableData = [
    {
        ID: '213EFAD',
        name: '济南东方大酒店(张庄路店)一楼餐厅',
        class: '节能燃气灶',
        agreement: 'MQTT',
        state: '正常连接中'
    },
    {
        ID: '213EFAD',
        name: '济南东方大酒店(张庄路店)一楼餐厅',
        class: '节能燃气灶',
        agreement: 'MQTT',
        state: '正常连接中'
    },
    {
        ID: '213EFAD',
        name: '济南东方大酒店(张庄路店)一楼餐厅',
        class: '节能燃气灶',
        agreement: 'MQTT',
        state: '正常连接中'
    },
    {
        ID: '213EFAD',
        name: '济南东方大酒店(张庄路店)一楼餐厅',
        class: '节能燃气灶',
        agreement: 'MQTT',
        state: '正常连接中'
    }
]
function rowStyle(row, rowIndex) {
    // console.log(row)
    // console.log(col)
    // console.log(cell)
    // console.log(event)
    // event.preventDefault()
    // cell.bgColor = 0xD8BFD8
    // col.bgColor = 0xD8BFD8
    // row.bgColor = 0xD8BFD8
    // row.bgColor=""
}
function cleaript() {
    document.querySelector('.ipt').value = ''
    console.log(this)
    // this.$refs.ipt.Value = ''
}
</script>
<template>
    <div class="equipment1">
        <p class="title">设备信息</p>
        <div class="top">
            <div>
                <span>设备ID</span>
                <el-input
                    class="input1"
                />
            </div>
            <div>
                <span>设备类型</span>
                <el-select v-model="value" class="m-2 input1">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
            <div>
                <span>通信方式</span>
                <el-select v-model="value" class="m-2 input1">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
            <div>
                <span>设备协议</span>
                <el-select v-model="value" class="m-2 input1">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <div class="divleft">
            <span>关联客户:</span>
            <el-select v-model="value" class="m-2 input2">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>
        <div class="divleft">
            <span>设备名称:</span>
            <el-input
                ref="ipt"
                v-model="input"
                clearable
                class="input2 ipt"
            />
        </div>
        <div class="div_btn">
            <el-button type="primary" size="small">保存</el-button>
            <el-button type="danger" size="small">取消</el-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$param:100 / 1920;
.equipment1 {
    position: relative;
    color: white;
    margin: auto;
    width: 1850vw * $param;
    height: 371vw * $param;
    box-sizing: border-box;
    background-color: #334067;
    .title {
        font-size: 22vw * $param;
        padding-top: 14vw * $param;
        padding-left: 23vw * $param;
        padding-bottom: 21vw * $param;
        margin: 0;
    }
    .div_btn {
        position: absolute;
        bottom: 5vw * $param;
        left: 450vw * $param;
        margin: 0 auto;
    }
    .divleft {
        padding-left: 58vw * $param;
        margin-bottom: 15vw * $param;
        >span {
            display: inline-block;
            width: 92vw * $param;
            height: 32vw * $param;
        }
        .input2 {
            width: 280vw * $param;
            height: 40vw * $param;
        }
    }
    .top {
        display: flex;
        padding-left: 58vw * $param;
        >div {
            margin-right: 32vw * $param;
            margin-bottom: 24vw * $param;
            display: flex;
            .input1 {
                width: 152vw * $param;
                height: 35vw * $param;
            }
            span {
                width: 92vw * $param;
                height: 31vw * $param;
            }
        }
    }
    .input2 {
        width: 280vw * $param;
        height: 40vw * $param;
    }
}
</style>
