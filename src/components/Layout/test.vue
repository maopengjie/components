<template>
    <div class="test-container">
        <Layout>
            <template #left>
                <div class="left">
                    asd
                </div>
            </template>
            <div class="main">
                主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏
            </div>
            <template #right>
                <div class="right">
                    右边栏区域，宽度适应内容，溢出隐藏
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from './index.vue'
export default {
    name: 'LayoutTest',
    components: {
        Layout
    }
}
</script>

<style scoped>
    .test-container {
        width: 60%;
        height: 600px;
        border: 2px solid;
        margin: 0 auto;
    }
    .left {
        width: 200px;
        height: 100%;
        background: lightcoral;
    }
    .main {
        width: 100%;
        height: 100%;
        background: lightseagreen;
    }
    .right {
        width: 150px;
        height: 100%;
        background: lightblue;
    }
</style>