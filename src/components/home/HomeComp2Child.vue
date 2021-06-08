<template>
    <div class="home-comp2-child">
        {{childStr}}
    </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, toRef, ref } from 'vue'

export default defineComponent({
    name: "HomeComp2Child",
    components: {

    },
    props: {
        tit: String
    },
    setup(props, { attrs, slots, emit }) {
        //如果prop非必传，用toRefs会报错
        // const { title } = toRefs(props)
        // console.log(title.value)
        const title = toRef(props, 'title')
        console.log(title.value)

        // Attribute (非响应式对象)
        console.log(attrs)
        // 插槽 (非响应式对象)
        console.log(slots)
        // 触发事件 (方法)
        console.log(emit)

        const childStr = ref('child')
        console.log(childStr.value)

        return {
            childStr
        }


    },

})
</script>