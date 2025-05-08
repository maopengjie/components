import { createApp, h } from "vue";
/**
 *
 * @param {*} comp 组件
 * @param {*} props 传递组件porps属性
 * @returns 渲染后盾DOM元素（组件的根DOM）
 */
export default function (comp, props = {}) {
  //创建一个挂载容器（不会自动添加到body上）
  const container = document.createElement("div");
  // 创建App实例
  const app = createApp({
    render: () => h(comp, props),
  });
  // 挂载App实例到容器
  const vm = app.mount(container);
  //返回组件的根DOM元素
  return container.firstElementChild;
}
