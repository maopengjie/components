<template>
    <div class="test-container">
        <Layout>
            <template #left>
                <div class="aside">
                    <SiteAside></SiteAside>
                </div>
            </template>
            <template #default>
                中间主区域
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/Layout/index.vue'
import SiteAside from '@/components/SiteAside/index.vue'
export default {
    name: 'OverallTest',
    components: {
        Layout,
        SiteAside
    }
}
</script>

<style scoped lang="less">
    @import "@/styles/mixin.less";
    .test-container {
        .self-fill(fixed);
    }
    .aside {
        width: 250px;
        height: 100%;
    }
</style>