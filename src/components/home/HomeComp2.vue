<template>
    <div class="home-comp">
    	homecomp2
    	<Child/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Child from './HomeComp2Child.vue'

export default defineComponent({
    name: "HomeComp2",
    components: {
    	Child
    },
    setup() {
        
    },

})
</script>