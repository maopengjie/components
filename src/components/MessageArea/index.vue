<template>
    <div class="message-area-container">
        <data-form v-bind="$attrs" />
        <h3>
            {{ title }}
            <span>{{ subTitle }}</span>
        </h3>
        <DataList :list="list" />
        <div class="loading" v-loading="isListLoading"></div>
    </div>
</template>

<script>
import DataForm from './DataForm.vue';
import DataList from './DataList.vue';
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        },
        isListLoading: {
            type: Boolean,
            default: false,
        },
        subTitle: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        }
    },
    components: {
        DataForm,
        DataList,
    }

}
</script>

<style scoped lang="less">
    .message-area-container {
    }
    .loading {
        position: relative;
        height: 100px;
    }
</style>