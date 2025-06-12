<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-27 11:07:30
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-06-04 09:25:16
 * @FilePath: /components/src/views/Blog/components/BlogCategory.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="blog-category-container">
        <h2>文章分类</h2>
        <RightList :list="list" @select="handleSelect" />
    </div>
</template>

<script>
import RightList from './RightList.vue';
import fetchData from '@/mixins/fetchData';
import { getBlogCategories } from '@/api/blog';
export default {
    mixins: [fetchData([])],
    components: {
        RightList,
    },
    data () {
        return {
        }
    },
    computed: {
        categoryId () {
            return +this.$route.params.categoryId || -1;
        },
        limit () {
            return +this.$route.query.limit || 10;
        },
        list () {
            const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);
            const result = [
                { name: '全部', id: -1, articleCount: totalArticleCount },
                ...this.data
            ]
            return result.map(it => ({
                ...it,
                isSelect: it.id === this.categoryId,
                aside: `${it.articleCount}篇`,
            }))
        },
    },
    methods: {
        async fetchData () {
            return await getBlogCategories()
        },
        handleSelect (item) {
            const query = {
                page: 1,
                limit: this.limit,
            };
            if (item.id === -1) {
                this.$router.push({
                    name: "Blog",
                    query,
                })
            } else {
                this.$router.push({
                    name: "CategoryBlog",
                    params: {
                        categoryId: item.id,
                    }
                })
            }
        }
    }
}
</script>

<style scoped lang="less">
    .blog-category-container {
        width: 300px;
        padding: 20px;
        position: relative;
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
        h2 {
            font-weight: bold;
            font-size: 1em;
            margin: 0;
            letter-spacing: 2px;
        }
    }
</style>