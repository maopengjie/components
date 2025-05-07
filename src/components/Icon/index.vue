<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-06 13:38:46
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-06 13:39:19
 * @FilePath: /components/src/components/Icon/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
    home: "iconzhuye",
    success: "iconzhengque",
    error: "iconcuowu",
    close: "iconguanbi",
    warn: "iconjinggao",
    info: "iconxinxi",
    blog: "iconblog",
    code: "iconcode",
    about: "iconset_about_hov",
    weixin: "iconweixin",
    mail: "iconemail",
    github: "icongithub",
    qq: "iconsign_qq",
    arrowUp: "iconiconfonticonfonti2copy",
    arrowDown: "iconiconfonticonfonti2",
    empty: "iconempty",
    chat: "iconliuyan",
};
export const types = Object.keys(classMap);
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Icon',
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    computed: {
        // 图标类样式
        fontClass () {
            return classMap[this.type];
        },
    },
};
</script>

<style scoped>
    @import '//at.alicdn.com/t/font_2164449_nalfgtq7il.css';
    .iconfont {
        color: inherit;
        font-size: inherit;
    }
</style>

