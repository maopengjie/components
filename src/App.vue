<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-05 17:14:49
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-06-12 16:09:53
 * @FilePath: /components/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE

-->
<template>
    <div class="app-container">
        <Layout>
            <template #left>
                <div class="aside">
                    <SiteAside />
                </div>
            </template>
            <template #default>
                <RouterView />
            </template>
        </Layout>
        <ToTop />
    </div>
</template>
  
  <script>
import Layout from "./components/Layout/index.vue";
import SiteAside from "./components/SiteAside/index.vue";
import ToTop from "@/components/ToTop/index.vue"
export default {
    components: {
        Layout,
        SiteAside,
        ToTop
    },
};
  </script>
  
  <style lang="less" scoped>
    @import "@/styles/mixin.less";
    .app-container {
        .self-fill(fixed);
    }
    .aside {
        width: 250px;
        height: 100%;
    }
</style>
  
  