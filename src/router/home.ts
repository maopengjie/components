/*
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-07 16:24:26
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-06-04 09:35:43
 * @FilePath: /components/src/router/home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from "@/views/Home/index.vue";
import About from "@/views/About/index.vue";
import Blog from "@/views/Blog/index.vue";
import Project from "@/views/Project/index.vue";
import Message from "@/views/Message/index.vue";
import BlogDetail from "@/views/Blog/Detail.vue"

export default [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/About", component: About },
  { name: "Blog", path: "/article", component: Blog },
  { name:"CategoryBlog",path:"/article/cate/:categoryId",component:Blog},
  { name:"BlogDetail",path:"/article/:id",component:BlogDetail},
  { name: "Project", path: "/Project", component: Project },
  { name: "Message", path: "/Message", component: Message },
];