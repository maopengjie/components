<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-05 17:17:12
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-06 11:11:39
 * @FilePath: /components/src/components/Pager/test.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h1 class="title">分页器</h1>
        <Pager :total="total" :current="current" @pageChange="handlePageChange($event)" />
    </div>
</template>

<script >
import Pager from './index.vue'
export default {
    name: 'PagerTest',
    components: {
        Pager,
    },
    data () {
        return {
            current: 1,
            total: 302,
        }
    },
    methods: {
        handlePageChange (newPage) {
            this.current = newPage
            console.log('加载当前页数据')
        },
    },
}
</script>

<style scoped>
    .title {
        text-align: center;
    }
</style>

