<template>
    <div class="home">
        <Container>
            <br>
            当前数：{{testNum}}
            <br>
            前个数：{{oldTestNum ? oldTestNum:'暂无'}}
            <br>
            testStr1:{{teststr1}}
            testStr2:{{teststr2}}
            <el-button @click="addNum">add 1</el-button>
            <el-button @click="teststr88">commit 88</el-button>
            <el-button @click="teststr99">dispatch 99</el-button>
            <br>
            <br>
            <home-comp></home-comp>
            <transition name="slide-fade">
                <component :is="comp2" v-if="teststr1%2 == 0"></component>
            </transition>
        </Container>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch, computed, defineAsyncComponent } from 'vue'
import HomeComp from '@/components/home/HomeComp.vue'

import { useStore, mapState } from 'vuex'
import { DataMap, AddNum } from '@/types'
import * as types from '@/store/mutation-types'

export default defineComponent({
    name: "Home",
    components: {
        HomeComp,
        HomeComp2: defineAsyncComponent(() =>
            import('@/components/home/HomeComp2.vue')
        )
    },
    setup() {
        const store = useStore()
        console.log(store.getters)
        const dataMap: DataMap = reactive({
            testStr: 'teststr',
            testObj: {
                key1: 'k1'
            },
            testArray: ['child1'],
            testNum: 1,
            oldTestNum: 0

        })

        const comp2 = "home-comp2"

        const addNum: AddNum = async () => {

            dataMap.testNum++
            store.commit('app/' + types.SET_TEST1, dataMap.testNum)
            store.dispatch('app/settest2', dataMap.testNum)
        }

        onMounted(() => {
            console.log('mounted')
        })

        watch(() => dataMap.testNum, (nv, ov) => {
            dataMap.oldTestNum = ov
            console.log('watch')
        })

        return {
            comp2,
            ...toRefs(dataMap),
            addNum,
            teststr1: computed(() => store.state.app.testStr1),
            teststr2: computed(() => store.getters['app/testStr2ingetter']),
            teststr88: () => store.commit('app/' + types.SET_TEST1, '88'),
            teststr99: () => store.dispatch('app/settest2', 99)
        }
    },

})
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>