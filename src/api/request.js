/*
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-09 14:05:48
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-14 18:50:20
 * @FilePath: /components/src/api/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
import showMessage from "../utils/showMessage";

const ins = axios.create();
ins.interceptors.response.use(function (params) {
  if (params.data.code !== 0) {
    showMessage({
      message: params.data.msg,
      type: "error",
      duration: 2000,
    });
    return null;
  }
  return params.data.data;
});
export default ins;
