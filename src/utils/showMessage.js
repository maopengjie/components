/*
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-08 10:46:13
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-14 18:46:54
 * @FilePath: /components/src/utils/showMessage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon/index.vue";
import styles from "./showMessage.module.less";
// let isAnimating = false;
/**
 * 弹出消息
 * @param {*} content 消息内容
 * @param {*} type  消息类型 info error success waring
 * @param {*} container 容器，消息会显示到该容器的正中；如果不传则显示在页面的正中
 * @param {*} duration 显示时间，单位ms
 */
export default function (options = {}) {
  //   if (isAnimating) return;
  //   isAnimating = true;
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  //创建元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  div.className = `${styles.message} ${styles[`message-${type}`]}`;
  // 容器的position是否改动过
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);
  // 浏览器强行渲染
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  div.clientHeight; // 导致reflow
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;
  const timerId = setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener(
      "transitionend",
      function () {
        div.remove();
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        options.callback && options.callback();
        // isAnimating = false;
        clearTimeout(timerId);
      },
      { once: true }
    );
  }, duration);
}
