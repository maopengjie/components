<template>
    <div class="test-container">
        <ImageLoader src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304" placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" @load="handleLoaded"></ImageLoader>
    </div>
</template>

<script>
import ImageLoader from './index.vue'
export default {
    name: 'ImageLoaderTest',
    components: {
        ImageLoader
    },
    methods: {
        handleLoaded () {
            console.log("ImageLoader组件load事件触发，图片加载完成");
        },
    }
}
</script>

<style  scoped>
    .test-container {
        width: 500px;
        height: 400px;
        border: 2px solid;
        margin: 0 auto;
    }
</style>
