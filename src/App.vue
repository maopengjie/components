<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-05 17:14:49
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-06 15:43:50
 * @FilePath: /components/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import demoRoutes from './router/demos' // 引入动态路由

// 提取所有的路由路径，用于动态渲染 RouterLink
const routePaths = demoRoutes.map((route) => route.path.replace('/', '')) // 去掉前导的 '/'
</script>

<template>
    <header>
        <nav>
            <!-- 使用 v-for 动态渲染所有路由链接 -->
            <RouterLink v-for="(path, index) in routePaths" :key="index" :to="'/' + path">
                {{ path }}
            </RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
    header {
        line-height: 1.5;
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
