import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
function getLoadingImg() {
  return document.querySelector("[data-role=loading");
}
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}
export default function (el, binding) {
  const curImg = getLoadingImg();
  if (binding.value) {
    if (!curImg) {
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}
