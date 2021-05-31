<template>
    <div class="home">
        <Container>
            <br>
            当前数：{{testNum}}
            <br>
            前个数：{{oldTestNum ? oldTestNum:'暂无'}}
            <br>
            <el-button @click="addNum">add 1</el-button>
        </Container>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue'
import  {DataMap,AddNum} from '@/types'

export default defineComponent({
    name: "Home",
    components: {

    },
    setup() {

        const dataMap: DataMap = reactive({
            testStr: 'teststr',
            testObj: {
                key1: 'k1'
            },
            testArray: ['child1'],
            testNum: 1,
            oldTestNum: 0

        })

        const addNum: AddNum = async () => {
            dataMap.testNum++
        }

        onMounted(() => {
            console.log('mounted')
        })

        watch(() => dataMap.testNum, (nv, ov) => {
            dataMap.oldTestNum = ov
            console.log('watch')
        })

        return { ...toRefs(dataMap), addNum }
    }

})
</script>