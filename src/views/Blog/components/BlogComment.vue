
<template>
    <div class="blog-comment-container">
        <MessageArea :list="data.rows" :title="'评论列表'" :subTitle="`(${data.total})`" @submit="handleSubmit" :isListLoading="isLoading" />
    </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'
import MessageArea from '@/components/MessageArea/index.vue'
import { getComments, postComment } from '@/api/blog.js'
export default {
    mixins: [fetchData({})],
    props: {

    },
    components: {
        MessageArea,
    },
    data () {
        return {
            page: 1,
            limit: 10,
        }
    },
    created () {
        this.$bus.on("mainScroll", this.handleScroll)
    },
    unmounted () {
        this.$bus.off("mainScroll", this.handleScroll)
    },
    computed: {
        haMore () {
            return this.data.rows.length < this.data.total
        }
    },
    methods: {
        handleScroll (dom) {
            if (this.isLoading || !dom) {
                return
            }
            const range = 100
            const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
            if (dec <= range) {
                this.fetchMore()
            }
        },
        async fetchMore () {
            if (!this.haMore) {
                return
            }
            this.isLoading = true
            this.page++
            const resp = await this.fetchData();
            this.data.total = resp.total
            this.data.rows = this.data.rows.concat(resp.rows)
            this.isLoading = false
        },
        async fetchData () {
            return await getComments(this.$route.params.id, this.page, this.limit)
        },
        async handleSubmit (formData, callback) {
            if (!callback) return
            const resp = await postComment({
                blogId: this.$route.params.id,
                ...formData,
            });
            this.data.rows.unshift(resp);
            this.data.total++;
            callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
        }
    }
}
</script>

<style scoped lang="less">
    .blog-comment-container {
    }
</style>