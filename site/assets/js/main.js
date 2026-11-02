import {media} from "./data.js";
import {navigation} from "./components/navigation.js";
import {hero} from "./components/hero.js";
import {about,expertiseSection,thinkingSection,closing,footer} from "./components/sections.js";
import {projectsSection} from "./components/projects.js";

// 装配层：index.html 只负责引入入口模块；内容、组件、样式分别维护。
const root=document.getElementById("app");
root.innerHTML=navigation()+hero()+about()+projectsSection()+expertiseSection()+thinkingSection()+closing()+footer();

const toggle=document.getElementById("menu-toggle");
const menu=document.getElementById("mobile-menu");
toggle.addEventListener("click",()=>{
  const next=toggle.getAttribute("aria-expanded")!=="true";
  toggle.setAttribute("aria-expanded",String(next));
  toggle.setAttribute("aria-label",next?"关闭菜单":"打开菜单");
  menu.classList.toggle("open",next);
});
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded","false");
  toggle.setAttribute("aria-label","打开菜单");
}));

// 氛围图片先使用用户提供的参考素材，若图源失效则切到备用风景照。
// 仅装饰性素材；不会声称其为真实项目摄影。
document.querySelectorAll("[data-media]").forEach(img=>{
  const key=img.dataset.media;
  const fallback=media["fallback"+key.charAt(0).toUpperCase()+key.slice(1)];
  img.onerror=()=>{
    if(img.dataset.fallbackApplied==="yes")return;
    img.dataset.fallbackApplied="yes";
    img.src=fallback;
  };
  img.src=media[key];
});
