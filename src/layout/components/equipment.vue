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
const router = useRouter()
function a() {
    router.push({
        name: 'addfacility'
    })
}
</script>
<template>
    <div class="equipment">
        <div class="top">
            <div class="left">
                <div class="div_ipt">
                    <span class="span1">地区 :</span>
                    <el-select v-model="value" class="m-2 select">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="div_ipt">
                    <span class="span1">客户 :</span>
                    <el-input
                        v-model="input"
                        class="select"
                    />
                </div>
                <div class="div_ipt">
                    <span class="span1 span2">设备类型</span>
                    <el-select v-model="value" class="m-2 select">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
            </div>
            <span class="right">
                <el-button type="primary" size="small">查询</el-button>
                <el-button size="small">重置</el-button>
            </span>
        </div>
        <el-button type="primary" class="add" @click="a">
            新增设备<el-icon>
                <Icon icon="ep:plus" />
            </el-icon>
        </el-button>
        <el-table disabled :data="tableData" style="width: 100%;">
            <el-table-column prop="ID" label="设备ID" width="180" />
            <el-table-column prop="name" label="设备名称" width="180" />
            <el-table-column prop="class" label="设备分类" />
            <el-table-column prop="agreement" label="通信协议" />
            <el-table-column prop="state" label="状态" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" style="color: #9fceff;background-color: #ecf5ff;border: 1px solid #9fceff;">查看</el-button>
                    <el-button size="small" type="primary">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style lang="scss" scoped>
$param:100 / 1920;
:deep(.el-table__row) {
    color: white;
    background-color: #334067;
}
:deep(.el-input__inner::placeholder) {
    font-size: 0;
}
.equipment {
    width: 1870vw * $param;
    height: 531vw * $param;
    background-color: #334067;
    margin: auto;
    .add {
        margin-left: 35vw * $param;
        margin-top: 36vw * $param;
        margin-bottom: 28vw * $param;
    }
    :deep(.el-table .success-row) {
        color: white;
        background-color: #334067;
    }
    :deep(.el-table__body>tbody >tr>td:nth-child(5)>.cell) {
        color: #07b9b9;
    }
    .el-table .el-table_body tr:hover td {
        background-color: #222b45 !important;
    }
    :deep(.is-leaf) {
        color: white;
        background-color: #222b45 !important;
    }
    .top {
        padding-top: 38vw * $param;
        padding-left: 43vw * $param;
        padding-right: 32vw * $param;
        display: flex;
        justify-content: space-between;
        .left {
            display: flex;
            font-size: 18vw * $param;
            >div {
                display: flex;
                margin-right: 45vw * $param;
            }
            .select {
                width: 152vw * $param;
                height: 34vw * $param;
            }
            .span1 {
                width: 60vw * $param;
                height: 32vw * $param;
                line-height: 32vw * $param;
                color: white;
            }
            .span2 {
                width: 90vw * $param;
            }
        }
    }
}
:deep(.el-table tbody tr:hover > td) {
    background-color: rgb(31 44 83) !important;
}
</style>
