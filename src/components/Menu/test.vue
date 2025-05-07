
<template>
    <div class="test-container">
        <Menu></Menu>
    </div>
</template>

<script>
import Menu from './index.vue'
export default {
    name: 'MenuTest',
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Menu,
    }
}
</script>

<style>
    .test-container {
        width: 400px;
        height: 600px;
        border: 2px solid red;
        background: #000;
        margin: 0 auto;
    }
</style>
