/*
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-26 16:36:36
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-06-05 08:45:11
 * @FilePath: /components/src/api/blog.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";
/**
 *获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}
/**
 * 获取博客分类数据
 */
export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}
/**
 * 获取详情
 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}
/**
 * 提交评论
 */
export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo);
}
/**
 * 获取评论
 */
export async function getComments(blogid, page = 1, limit = 10) {
  return request.get(`/api/comment`, {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
