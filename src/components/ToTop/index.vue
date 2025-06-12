<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-06-12 16:05:51
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-06-12 17:38:14
 * @FilePath: /components/src/components/ToTop/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="to-top-container" @click="handleClick" v-show="show">
        Top
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false
        }
    },
    created () {
        this.$bus.on("mainScroll", this.handleScroll)
    },
    unmounted () {
        this.$bus.off("mainScroll", this.handleScroll)
    },
    methods: {
        handleScroll (dom) {
            if (!dom) {
                this.show = false
                return
            }
            this.show = dom.scrollTop >= 500
        },
        handleClick () {
            this.$bus.emit("setMainScroll", 0)
        },
    }
}
</script>

<style scoped lang="less">
    @import "@/styles/var.less";
    .to-top-container {
        background: @primary;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: fixed;
        z-index: 99;
        right: 50px;
        bottom: 50px;
        cursor: pointer;
        line-height: 50px;
        color: #fff;
        text-align: center;
    }
</style>