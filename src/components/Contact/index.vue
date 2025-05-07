<template>
    <ul class="contact-container">
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="github" />
                </div>
                <span>DuYi-Edu</span>
            </a>
        </li>
        <li>
            <a href="mailto:23423424234@qq.com">
                <div class="icon">
                    <Icon type="mail" />
                </div>
                <span>23423424234@qq.com</span>
            </a>
        </li>
        <li>
            <a href="tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div class="icon">
                    <Icon type="qq" />
                </div>
                <span>844985551</span>
                <div class="pop">
                    <img src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png" alt="">
                </div>
            </a>
        </li>
        <li>
            <a>
                <div class="icon weixin">
                    <Icon type="weixin" />
                </div>
                <span>dsfggasas</span>
            </a>
            <div class="pop">
                <img src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png" alt="" />
            </div>
        </li>
    </ul>
</template>

<script>
import Icon from '@/components/Icon/index.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Contact',
    components: {
        Icon
    },

}
</script>

<style lang="less" scoped>
    @import '@/styles/var.less';
    .contact-container {
        list-style: none;
        padding: 20px;
        margin: 0;
        color: @gray;
        @itemHeight: 30px;
        li {
            height: @itemHeight;
            line-height: @itemHeight;
            position: relative;
            &:hover {
                .pop {
                    transform: scale(1);
                }
            }
        }
        a {
            cursor: pointer;
            display: flex;
            align-items: center;
            font-size: 14px;
        }
        .icon {
            font-size: 14px;
            width: @itemHeight;
        }
        .pop {
            position: absolute;
            left: 0;
            bottom: @itemHeight + 5px;
            padding: 10px 15px;
            background: #fff;
            border-radius: 5px;
            transform: scale(0);
            transform-origin: center bottom;
            transition: 0.3s;
            img {
                width: 150px;
                height: 150px;
            }
            &::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%) translateY(50%) rotate(45deg);
                width: 8px;
                height: 8px;
                background: #fff;
                bottom: 0;
            }
        }
    }
</style>
