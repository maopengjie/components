
<template>
    <div>
        <h1 class="title">无数据</h1>
        <div class="test-container">
            <Empty></Empty>
        </div>
    </div>
</template>

<script>
import Empty from './index.vue'
export default {
    name: 'EmptyTest',
    components: {
        Empty
    },
}
</script>

<style scoped>
    .title {
        text-align: center;
    }
    .test-container {
        width: 500px;
        height: 400px;
        border: 2px solid;
        margin: 0 auto;
        position: relative;
    }
</style>
