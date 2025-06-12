<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-28 15:17:05
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-06-12 16:00:53
 * @FilePath: /components/src/views/Blog/Detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <Layout>
        <div ref="mainContainer" class="main-container" v-loading="isLoading">
            <BlogDetail v-if="data" :blog="data" />
            <blog-comment v-if="!isLoading" />
        </div>
        <template #right>
            <div class="right-container">
                <BlogTOC :toc="data.toc" v-if="data" />
            </div>
        </template>
    </Layout>
</template>

<script>
import BlogComment from './components/BlogComment.vue';
import BlogTOC from './components/BlogTOC.vue';
import BlogDetail from './components/BlogDetail.vue';
import Layout from '@/components/Layout/index.vue'
import fetchData from '@/mixins/fetchData.js'
import { getBlog } from "@/api/blog.js"
export default {
    mixins: [fetchData(null)],
    components: {
        BlogDetail,
        BlogTOC,
        Layout,
        BlogComment,
    },
    data () {
        return {

        }
    },
    mounted () {
        this.$refs.mainContainer.addEventListener("scroll", this.handleScroll)
        // this.$nextTick(() => {
        //     const hash = location.hash
        //     if (hash) {
        //         setTimeout(() => {
        //             const el = document.getElementById(hash.replace('#', ''))
        //             // if (el) {
        //             location.hash = ''
        //             location.hash = hash  // 平滑滚动可选
        //             // }
        //         }, 100) // 确保 DOM 完全渲染
        //     }
        // })
    },
    unmounted () {
        if (this.$refs.mainContainer) {
            this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
        }
    },
    methods: {
        async fetchData () {
            return await getBlog(this.$route.params.id)
        },
        handleScroll () {
            this.$bus.emit("mainScroll", this.$refs.mainContainer)
        },
    },
    // updated () {
    //     console.log('updated 被触发了');
    //     const hash = location.hash
    //     location.hash = ''
    //     setTimeout(() => {
    //         location.hash = hash
    //     }, 1000)
    // },
}
</script>

<style scoped lang="less">
    .main-container {
        overflow-y: scroll;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        padding: 20px;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    .right-container {
        box-sizing: border-box;
        width: 300px;
        height: 100%;
        overflow-y: scroll;
        padding: 20px;
        position: relative;
    }
</style>