<template>
    <div class="Site-Aside-Container">
        <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"></Avatar>
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
    @import '@/styles/var.less';
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
