<template>
    <div class="home-container" ref="container">
        <h1>首页</h1>
        <button @click="handleClick">点击弹框</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick () {
            console.log(this.$refs.container, 'container');
            this.$showMessage({
                content: 'Hello, this is a message!',
                type: 'success',
                duration: 3000,
                container: this.$refs.container,
                callback: function () {
                    console.log('弹框关闭了');
                }
            });
        }
    }
}
</script>

<style scoped>
    .home-container {
        background: lightblue;
        width: 300px;
        height: 500px;
        border: 1px solid;
        margin: 50px auto;
    }
</style>