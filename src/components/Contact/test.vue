<template>
    <div class="test-container">
        <Contact></Contact>
    </div>
</template>

<script>
import Contact from './index.vue'
export default {
    name: 'ContactTest',
    components: {
        Contact
    },
}
</script>

<style scoped>
    .test-container {
        width: 400px;
        height: 400px;
        border: 2px solid red;
        background: #000;
        margin: 0 auto;
        padding-top: 200px;
    }
</style>
