import {projects} from "../data.js";
const esc = x => String(x).replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]));
const art = {
  vision:'<div class="art-frame" aria-hidden="true"><i></i></div>',
  orbis:'<div class="art-story" aria-hidden="true"><strong>Orbis / Story OS</strong><div><span>世界观</span><span>人物关系</span><span>章节结构</span></div></div>',
  playorder:'<div class="art-table" aria-hidden="true"><strong>PLAYORDER / OPERATIONS</strong><i></i><i></i><i></i></div>',
  matching:'<div class="art-pair" aria-hidden="true"><span></span><b>→</b><span></span></div>'
};
function card(p,i){
  const tags=p.tags.map(t=>'<span>'+esc(t)+'</span>').join('');
  return '<article class="project-card"><div class="project-art '+esc(p.visual)+'">' +
    '<span class="project-index">PROJECT / 0'+(i+1)+'</span>'+(art[p.visual]||'')+
    '<span class="project-visual-label">VISUAL CONCEPT</span></div>' +
    '<div class="project-details"><span class="type">'+esc(p.type)+'</span><h3>'+esc(p.title)+'</h3>' +
    '<p>'+esc(p.description)+'</p><div class="project-tags"><div>'+tags+'</div><small>'+esc(p.status)+'</small></div></div></article>';
}
export function projectsSection(){
 return '<section id="work" class="section wrap"><div class="section-head"><span class="eyebrow">02 / SELECTED WORK</span>' +
   '<h2 class="section-title">Ideas built with<br><em class="serif">intention.</em></h2>' +
   '<p class="section-desc">从工业视觉的工程问题，到独立软件产品的探索。每个项目都是一次将技术与真实使用场景连接的尝试。</p></div>' +
   '<div class="projects-grid">'+projects.map(card).join('')+'</div></section>';
}
