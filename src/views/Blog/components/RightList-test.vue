<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-23 11:23:09
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-26 16:59:10
 * @FilePath: /components/src/views/Blog/components/RightList-test.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="test-container">
        <RightList :list="list" @select="handleSelect" />
    </div>
</template>

<script>
import RightList from './RightList.vue';
import { getBlogCategories, getBlogs } from '@/api/blog';
export default {
    components: {
        RightList,
    },
    data () {
        return {
            list: [
                { name: "a", isSelect: false },
                { name: "b", isSelect: false },
                {
                    name: "c",
                    isSelect: true,
                    children: [
                        { name: "c-1", isSelect: false },
                        {
                            name: "c-2",
                            isSelect: false,
                            children: [
                                { name: "c-2-1", isSelect: false },
                                { name: "c-2-2", isSelect: false },
                                { name: "c-2-3", isSelect: false },
                                { name: "c-2-4", isSelect: false },
                            ],
                        },
                        { name: "c-3", isSelect: false },
                        { name: "c-4", isSelect: false },
                    ],
                },
                { name: "d", isSelect: false },
            ],
        }
    },
    methods: {
        async handleSelect (item) {
            console.log(item);
            await getBlogCategories().then(res => {
                console.log(res, '-------');
            })
            await getBlogs(2, 20, 3).then(res => {
                console.log(res, '-------');
            })
        }
    }
}
</script>

<style>
</style>