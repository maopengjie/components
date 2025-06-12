<!--
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-06-05 09:04:03
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-06-05 14:15:35
 * @FilePath: /components/src/components/MessageArea/DataFrom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <form id="data-form-container" ref="form" class="data-form-container" @submit.prevent="handleSubmit">
        <div class="form-item">
            <div class="input-area">
                <input type="text" v-model="formData.nickname" placeholder="用户昵称" maxlength="10">
                <span class="tip">{{formData.nickname.length}}/10</span>
            </div>
            <div class="error">{{ error.nickname }}</div>
        </div>
        <div class="form-item">
            <div class="text-area">
                <textarea v-model="formData.content" placeholder="输入内容" maxlength="300"></textarea>
                <span class="tip">{{formData.content.length}}/10</span>
            </div>
            <div class="error">{{ error.content }}</div>
        </div>
        <div class="form-item">
            <div class="button-area">
                <button :disabled="isSubmiting">{{ isSubmiting?'提交中...':'提交' }}</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data () {
        return {
            formData: {
                nickname: '',
                content: '',
            },
            error: {
                nickname: "",
                content: "",
            },
            isSubmiting: false,
        }
    },
    methods: {
        handleSubmit () {
            this.error.nickname = this.formData.nickname ? '' : '请填写昵称'
            this.error.content = this.formData.content ? '' : '请填写内容'
            if (this.error.nickname || this.error.content) {
                return
            }
            this.isSubmiting = true
            this.$emit("submit", this.formData, (successMsg) => {
                this.$showMessage({
                    content: successMsg,
                    type: "success",
                    duration: 1000,
                    container: this.$refs.form,
                    callback: () => {
                        this.isSubmiting = false;
                        this.formData.nickname = '';
                        this.formData.content = '';
                    },
                })
            })
        }
    }
}
</script>

<style scoped lang="less">
    @import "@/styles/var.less";
    .data-form-container {
        margin-bottom: 20px;
        overflow: hidden;
    }
    .form-item {
        margin-bottom: 8px;
    }
    .input-area {
        width: 50%;
        position: relative;
    }
    .text-area {
        position: relative;
    }
    input,
    textarea {
        width: 100%;
        box-sizing: border-box;
        border: 1px dashed @gray;
        color: @words;
        outline: none;
        font-size: 14px;
        border-radius: 4px;
        &:focus {
            border-color: @primary;
        }
    }
    input {
        padding: 0 15px;
        height: 40px;
    }
    textarea {
        resize: none;
        padding: 8px 15px;
        height: 120px;
    }
    button {
        cursor: pointer;
        border: none;
        outline: none;
        width: 100px;
        height: 34px;
        border-radius: 4px;
        background: @primary;
        &:hover {
            background: darken(@primary, 10%);
        }
        &:disabled {
            background: lighten(@primary, 20%);
            cursor: not-allowed;
        }
    }
    .error {
        margin-top: 6px;
        color: @danger;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }
    .tip {
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #b4b8bc;
        font-size: 12px;
    }
</style>