<template>
    <div class="test-container">
        <message></message>
    </div>
</template>

<script>
import Message from './index.vue'
export default {
    name: 'MessageTest',
    components: {
        Message
    }
}
</script>

<style scoped>
    .test-container {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid;
        padding: 20px;
    }
</style>