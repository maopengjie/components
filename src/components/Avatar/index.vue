<template>
    <img class="avatar-container" :src="url" :style="{ width: size + 'px', height: size + 'px' }" />
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Avatar',
    props: {
        url: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 100
        }
    }
}
</script>

<style scoped>
    /* 带有作用域的样式 */
    .avatar-container {
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }
</style>
