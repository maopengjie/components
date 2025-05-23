<template>
    <div class="home-container" ref="container" @wheel="handleWheel" v-loading="isLoading">
        <ul class="carousel-container" :style="{marginTop}" @transitionend="handleTransitionEnd">
            <li v-for="item in data" :key="item.id">
                <Carouselitem :carousel="item" />
            </li>
        </ul>
        <div v-show="index>0" class="icon icon-up" @click="switchTo(index-1)">
            <Icon type="arrowUp" />
        </div>
        <div v-show="index<data.length-1" class="icon icon-down" @click="switchTo(index+1)">
            <Icon type="arrowDown" />
        </div>
        <ul class="indicator">
            <li :class="{active:index===i}" v-for="(item,i) in data" :key="item.id" @click="switchTo(i)"></li>
        </ul>
        <!-- <Loading v-if="isLoading" /> -->
    </div>
</template>

<style scoped lang="less">
    @import "@/styles/var.less";
    @import "@/styles/mixin.less";
    .home-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        ul {
            margin: 0;
            list-style: none;
            padding: 0;
        }
    }
    .carousel-container {
        width: 100%;
        height: 100%;
        transition: 500ms;
        li {
            width: 100%;
            height: 100%;
        }
    }
    .icon {
        .self-center();
        font-size: 30px;
        @gap: 25px;
        color: @gray;
        cursor: pointer;
        transform: translateX(-50%);
        &.icon-up {
            top: @gap;
            animation: jump-up 2s infinite;
        }
        &.icon-down {
            top: auto;
            bottom: @gap;
            animation: jump-down 2s infinite;
        }
        @jump: 5px;
        @keyframes jump-up {
            0% {
                transform: translateY(@jump);
            }
            50% {
                transform: translateY(-@jump);
            }
            100% {
                transform: translateY(@jump);
            }
        }
        @keyframes jump-down {
            0% {
                transform: translateY(-@jump);
            }
            50% {
                transform: translateY(@jump);
            }
            100% {
                transform: translateY(-@jump);
            }
        }
    }
    .indicator {
        .self-center();
        // transform: translateY(-50%);
        left: auto;
        right: 20px;
        li {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            cursor: pointer;
            margin-bottom: 10px;
            background: @words;
            border: 1px solid #fff;
            box-sizing: border-box;
            &.active {
                background: #fff;
            }
        }
    }
</style>

<script>
import { getBanner } from "@/api/banner";
import Carouselitem from './Carouselitem.vue';
import Icon from '@/components/Icon/index.vue'
// import Loading from "@/components/Loading/index.vue";
import fetchData from "@/mixins/fetchData";

export default {
    mixins: [fetchData([])],
    components: {
        Carouselitem,
        Icon,
        // Loading,
    },
    data () {
        return {
            // data: [],
            containerHeight: 0,
            index: 0,
            switching: false,
            // isLoading: true,
        }
    },
    // async created () {
    //     this.data = await getBanner()
    //     this.isLoading = false
    // },
    mounted () {
        if (this.$refs.container) {
            this.containerHeight = this.$refs.container.clientHeight;
            window.addEventListener('resize', this.handleResize)
        }
    },
    unmounted () {
        window.removeEventListener('resize', this.handleResize)
    },
    computed: {
        marginTop () {
            return -this.index * this.containerHeight + "px";
        }
    },
    methods: {
        async fetchData () {
            return await getBanner()
        },
        switchTo (i) {
            this.index = i
        },
        handleResize () {
            this.containerHeight = this.$refs.container.clientHeight;
        },
        handleWheel (e) {
            if (this.switching) return
            // console.log(e.deltaY, '----');
            if (e.deltaY > 10 && this.index < this.data.length - 1) {
                this.index++
                this.switching = true
            } else if (e.deltaY < -10 && this.index > 0) {
                this.index--
                this.switching = true
            }
        },
        handleTransitionEnd () {
            this.switching = false
        }
    },

}
</script>

