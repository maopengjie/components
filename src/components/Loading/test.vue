<template>
    <div class="test-container">
        <Loading v-if="isLoading" />
        <button @click="isLoading=!isLoading">显示/隐藏</button>
    </div>
</template>

<script>
import Loading from "./index.vue"
export default {
    components: {
        Loading
    },
    data () {
        return {
            isLoading: false,
        }
    }
}
</script>

<style scoped>
    .test-container {
        position: relative;
    }
</style>