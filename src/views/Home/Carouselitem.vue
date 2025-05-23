<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-16 13:35:32
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-22 21:36:34
 * @FilePath: /components/src/views/Home/Carouselitem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="carousel-item-contarner" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="carousel-img" ref="image" :style="imagePosition">
            <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="this.showWords" />
        </div>
        <div class="title" ref="title">{{ carousel.title }}</div>
        <div class="desc" ref="desc">{{ carousel.description }}</div>
    </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index.vue";
export default {
    props: ["carousel"],
    components: {
        ImageLoader,
    },
    data () {
        return {
            titleWidth: 0,
            descWidth: 0,
            containerSize: null,
            innerSize: null,
            mouseX: 0,
            mouseY: 0,
        }
    },
    mounted () {
        this.titleWidth = this.$refs.title.offsetWidth;
        this.descWidth = this.$refs.desc.offsetWidth;
        this.setSize()
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
    },
    computed: {
        imagePosition () {
            if (!this.containerSize || !this.innerSize) return
            const extraWidth = this.containerSize.width - this.innerSize.width;
            const extraHeight = this.containerSize.height - this.innerSize.height;
            const left = (extraWidth / this.containerSize.width) * this.mouseX;
            const top = (extraHeight / this.containerSize.height) * this.mouseY;
            // console.log(extraWidth, 'extraWidth', extraHeight, 'extraHeight');
            // console.log(this.mouseX, 'mouseX', this.mouseY, 'mouseY');
            // console.log(left, 'left', top, 'top');
            // console.log((extraWidth / this.containerSize.width), 'left--', (extraHeight / this.containerSize.height), 'top--');
            return {
                transform: `translate(${left}px, ${top}px)`,
            }
        },
        center () {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2,
            }
        }
    },
    methods: {
        showWords () {
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            this.$refs.title.clientWidth;
            this.$refs.title.style.transition = '1s'
            this.$refs.title.style.width = this.titleWidth + 'px'

            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            this.$refs.desc.clientWidth;
            this.$refs.desc.style.transition = '1s'
            this.$refs.desc.style.width = this.descWidth + 'px'
        },
        setSize () {
            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            }
            this.innerSize = {
                width: this.$refs.image.clientWidth,
                height: this.$refs.image.clientHeight,
            }
        },
        handleMouseMove (e) {
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave () {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        },
    },
}
</script>

<style scoped lang="less" >
    @import "@/styles/var.less";
    .carousel-item-contarner {
        background: @words;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .carousel-img {
        width: 110%;
        height: 110%;
        position: absolute;
        left: 0;
        top: 0;
        transition: 0.3s;
    }
    .title,
    .desc {
        position: absolute;
        color: #fff;
        left: 30px;
        letter-spacing: 3px;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5),
            -1px 0 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
    }
    .title {
        top: calc(50% - 40px);
        font-size: 2em;
    }
    .desc {
        top: calc(50% + 40px);
        font-size: 1.2em;
        color: lighten(@words, 20%);
    }
</style>