<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-06 13:49:27
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-20 16:42:41
 * @FilePath: /components/src/components/ImageLoader/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="image-loader-container">
        <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="">
        <img @load="handleLoad" :src="src" alt="" :style="{opacity:originOpacity,transition: `${duration}ms`}">
    </div>
</template>

<script>
export default {
    name: 'ImageLoader',
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 5000,
        },
    },
    data () {
        return {
            originLoaded: false,
            everythingDone: false,
        };
    },
    computed: {
        originOpacity () {
            return this.originLoaded ? 1 : 0
        }
    },
    methods: {
        handleLoad () {
            this.originLoaded = true;
            setTimeout(() => {
                this.everythingDone = true;
                this.$emit('load');
            }, this.duration);
        }
    }
}
</script>

<style scoped lang="less">
    @import "@/styles/mixin.less";
    .image-loader-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img {
            .self-fill();
            object-fit: cover;
        }
        .placeholder {
            filter: blur(2vw);
        }
    }
</style>
