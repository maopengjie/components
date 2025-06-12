<template>
    <nav class="menu-container">
        <RouterLink v-for="item in items" :key="item.path" :to="item.path" custom v-slot="{ isActive, isExactActive, navigate }">
            <a :class="{ selected: new RegExp(item.match).test($route.path) }" @click="navigate">
                <div class="icon">
                    <Icon :type="item.icon"></Icon>
                </div>
                <span>{{ item.title }}</span>
            </a>
        </RouterLink>
    </nav>
</template>

<script>
import Icon from '@/components/Icon/index.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    name: 'Menu',
    components: {

        Icon
    },
    data () {
        return {
            items: [
                {
                    title: "首页",
                    icon: "home",
                    name: "Home",
                    path: "/",
                    match: "^/$",  // 精确匹配首页
                },
                {
                    title: "文章",
                    icon: "blog",
                    name: "Blog",
                    path: "/article",
                    match: "^/article", // 所有以 /article 开头的路径都高亮
                },
                {
                    title: "关于我",
                    icon: "about",
                    name: "About",
                    path: "/About",
                    match: "^/About",
                },
                {
                    title: "项目&效果",
                    icon: "code",
                    name: "Project",
                    path: "/Project",
                    match: "^/Project",
                },
                {
                    title: "留言板",
                    icon: "chat",
                    name: "Message",
                    path: "/Message",
                    match: "^/Message",
                },
            ],
        }
    },
    computed: {

    },
    methods: {
    },
}
</script>

<style scoped lang="less">
    @import "@/styles/var.less";
    .menu-container {
        color: @gray;
        margin: 24px 0;
        a {
            padding: 0 50px;
            display: block;
            display: flex;
            align-items: center;
            height: 45px;
            &.selected {
                background: darken(@words, 3%);
            }
            .icon {
                width: 24px;
            }
            &:hover {
                color: #fff;
            }
        }
    }
</style>
