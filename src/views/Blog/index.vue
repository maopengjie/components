<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-07 15:44:44
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-27 11:09:18
 * @FilePath: /components/src/views/Blog/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <Layout>
        <BlogList />
        <template #right>
            <BlogCategory />
        </template>
    </Layout>
</template>

<script>
import Layout from '@/components/Layout/index.vue';
import BlogList from './components/BlogList.vue';
import BlogCategory from './components/BlogCategory.vue';
export default {
    components: {
        Layout,
        BlogList,
        BlogCategory,
    },
}
</script>

<style>
</style>