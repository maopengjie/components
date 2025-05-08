<script setup lang="ts">
import { RouterLink } from "vue-router";
import demoRoutes from "../../router/demos"; // 引入动态路由

// 提取所有的路由路径，用于动态渲染 RouterLink
// const routePaths = demoRoutes.map((route) => route.path.replace("/", "")); // 去掉前导的 '/'
</script>

<template>
    <header>
        <nav>
            <!-- 使用 v-for 动态渲染所有路由链接 -->
            <RouterLink v-for="(item, index) in demoRoutes" :key="index" :to="item. path">
                {{ item.name }}
            </RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
    header {
        position: sticky;
        line-height: 1.5;
        z-index: 9999;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    nav {
        width: 100%;
        font-size: 12px;
        text-align: center;
        margin-top: 2rem;
    }

    nav a.router-link-exact-active {
        color: var(--color-background);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
        border: 0;
    }

    @media (min-width: 1024px) {
        header {
            display: flex;
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }

        nav {
            text-align: left;
            margin-left: -1rem;
            font-size: 1rem;

            padding: 1rem 0;
            margin-top: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
</style>
