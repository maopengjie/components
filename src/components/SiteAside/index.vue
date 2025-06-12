<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-06 14:33:48
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-06-12 15:34:55
 * @FilePath: /components/src/components/SiteAside/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="Site-Aside-Container">
        <!-- <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"></Avatar> -->
        <h1 class="title">龙傲天的小窝</h1>
        <Menu></Menu>
        <Contact></Contact>
        <p class="footer">
            黑ICP备17001719号
        </p>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar/index.vue'
import Menu from '@/components/Menu/index.vue'
import Contact from '@/components/Contact/index.vue'
export default {
    name: 'SiteAside',
    components: {
        Avatar,
        // eslint-disable-next-line vue/no-reserved-component-names
        Menu,
        Contact
    }
}
</script>

<style scoped lang="less">
    @import "@/styles/var.less";
    .Site-Aside-Container {
        width: 100%;
        height: 100%;
        background: @dark;
        padding: 20px 0;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .avatar-container {
        margin: 0 auto;
    }
    .title {
        font-size: 1.2em;
        color: #fff;
        text-align: center;
    }
    .footer {
        text-align: center;
        font-size: 12px;
    }
</style>
