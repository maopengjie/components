<template>
    <div class="empty-container">
        <Icon type="empty" />
        <p>{{ text }}</p>
    </div>
</template>

<script>
import Icon from '../Icon/index.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Empty',
    props: {
        text: {
            type: String,
            default: '暂无数据'
        }
    },
    components: {
        Icon
    },
}
</script>

<style scoped lang="less">
    @import '@/styles/mixin.less';
    @import '@/styles/var.less';
    .empty-container {
        .self-center();
        color: @gray;
        text-align: center;
    }
    .icon-container {
        font-size: 72px;
    }
</style>
