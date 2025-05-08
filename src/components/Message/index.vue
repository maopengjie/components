<template>
    <div class="message-container">
        <div>
            <slot></slot>
        </div>
        <button>确定</button>
        <button>关闭</button>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Message'
}
</script>

<style>
</style>