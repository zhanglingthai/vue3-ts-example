<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
	name:"Container",
	components:{

	},
	setup(){
		
	}
	
})
</script>
<style lang="scss" scoped>
.container {
    background-color: #eee;
    padding: 10px;
}
</style>