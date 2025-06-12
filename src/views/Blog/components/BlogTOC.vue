<template>
    <div class="blog-toc-container">
        <h2>目录</h2>
        <right-list :list="tocWithSelect" @select="handleSelect" />
    </div>
</template>

<script>
import RightList from './RightList.vue';
import { debounce } from "@/utils"
export default {
    components: {
        RightList,
    },
    props: {
        toc: {
            type: Array
        }
    },
    data () {
        return {
            activeAnchor: '',
        }
    },
    computed: {
        tocWithSelect () {
            const getTOC = (toc = []) => {
                return toc.map(t => ({
                    ...t,
                    isSelect: t.anchor === this.activeAnchor,
                    children: getTOC(t.children)
                }));
            }
            return getTOC(this.toc)
        },
        doms () {
            const doms = []
            const addToDoms = (toc) => {
                for (const t of toc) {
                    doms.push(document.getElementById(t.anchor))
                    if (t.children && t.children.length) {
                        addToDoms(t.children)
                    }
                }
            }
            addToDoms(this.toc)
            return doms
        },
    },
    created () {
        this.setSelectDebounce = debounce(this.setSelect, 50)
        this.$bus.on("mainScroll", this.setSelectDebounce)
    },
    unmounted () {
        this.$bus.off("mainScroll", this.setSelectDebounce)
    },
    methods: {
        handleSelect (item) {
            console.log(item.anchor, '-------');
            location.hash = item.anchor
        },
        setSelect () {
            this.activeAnchor = ''
            const range = 200
            for (const dom of this.doms) {

                if (!dom) {
                    continue
                }
                const rect = dom.getBoundingClientRect()
                const style = window.getComputedStyle(dom)
                const marginTop = parseFloat(style.marginTop) || 0
                const top = rect.top + marginTop
                if (top >= 0 && top <= range) {
                    this.activeAnchor = dom.id
                    return
                } else if (top > range) {
                    return
                } else {
                    this.activeAnchor = dom.id
                }
            }
        },
    }
}
</script>

<style scoped lang="less">
    .blog-toc-container {
        h2 {
            font-weight: bold;
            letter-spacing: 2px;
            font-size: 1em;
            margin: 0;
        }
    }
</style>