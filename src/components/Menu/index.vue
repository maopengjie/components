<template>
    <nav class="menu-container">
        <RouterLink v-for="(item,index) in items" :key="index" :to="item.link" active-class="selected" exact-active-class="">
            <div class="icon">
                <Icon :type="item.icon"></Icon>
            </div>
            <span>{{ item.title }}</span>
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
                    link: "/",
                    title: "首页",
                    icon: "home",
                },
                {
                    link: "/blog",
                    title: "文章",
                    icon: "blog",
                    startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
                },
                {
                    link: "/about",
                    title: "关于我",
                    icon: "about",
                },
                {
                    link: "/project",
                    title: "项目&效果",
                    icon: "code",
                },
                {
                    link: "/message",
                    title: "留言板",
                    icon: "chat",
                },
            ],
        }
    },
    computed: {

    },
    methods: {
        isSelected (item) {
            const link = item.link.toLowerCase(); // 菜单的链接地址
            const curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
            if (item.startWith) {
                return curPathname.startsWith(link);
            } else {
                return curPathname === link;
            }
        },
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
