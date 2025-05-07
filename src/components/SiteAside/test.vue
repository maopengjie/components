<template>
    <div class="test-container">
        <SiteAside></SiteAside>
    </div>
</template>

<script>
import SiteAside from './index.vue'
export default {
    name: 'SiteAsideTest',
    components: {
        SiteAside
    },
}
</script>

<style scoped>
    .test-container {
        width: 250px;
        height: 600px;
        border: 2px solid;
        margin: 0 auto;
    }
</style>
