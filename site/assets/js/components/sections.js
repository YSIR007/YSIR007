import {expertise, notes} from "../data.js";
const esc = x => String(x).replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]));
export function about(){
 return '<section class="section wrap" id="about"><div class="bento-stage">' +
  '<img class="landscape-bento" data-media="bento" loading="lazy" alt="自然风光作为技术介绍区的氛围背景">' +
  '<div class="section-head"><span class="eyebrow">01 / IN PRACTICE</span>' +
  '<h2 class="section-title">A quieter kind of<br><em class="serif">ambition.</em></h2>' +
  '<p class="section-desc">用克制的设计表达复杂的技术：AI、机器视觉、软件产品，以及持续将它们落地的工程实践。</p></div>' +
  '<div class="bento-grid">' +
  '<article class="bento-card feature"><div><span class="num">01 / PERSPECTIVE</span><h3>不是只做算法，<br>而是把系统<br><em class="serif">真正做出来。</em></h3><p>在工业现场理解问题，在代码里验证路径，在产品中打磨体验。</p></div><div><p class="feature-quote">Clarity over complexity.<br>Utility over novelty.</p><a href="#work">探索代表项目 <span>↗</span></a></div></article>' +
  '<article class="bento-card"><div><span class="num">02 / PERCEPTION</span><h3>视觉与几何</h3><p>工程图纸、真实图像、检测与分割、特征匹配、空间标定。</p></div><div class="bento-lines"><i></i><i></i><i></i></div></article>' +
  '<article class="bento-card"><div><span class="num">03 / INTEGRATION</span><h3>系统与设备</h3><p>工业相机、机械臂、PLC、上位机、边缘推理与通信协作。</p></div><div class="bento-lines"><i></i><i></i><i></i></div></article>' +
  '<article class="bento-card"><div><span class="num">04 / INTELLIGENCE</span><h3>AI 与自动化</h3><p>模型推理、工具调用、Agent 工作流以及面向具体问题的 AI 应用。</p></div><div class="bento-lines"><i></i><i></i><i></i></div></article>' +
  '<article class="bento-card"><div><span class="num">05 / CREATION</span><h3>独立软件</h3><p>Orbis、PlayOrder 与小型工具探索，尝试积累可以持续迭代的软件资产。</p></div><div class="bento-lines"><i></i><i></i><i></i></div></article>' +
  '</div></div></section>';
}
export function expertiseSection(){
  const cards=expertise.map((x,i)=>
    '<article class="expertise-item"><span class="number">0'+(i+1)+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.description)+'</p>'+
    '<div class="skill-tags">'+x.tags.map(t=>'<span>'+esc(t)+'</span>').join('')+'</div></article>').join('');
  return '<section id="expertise" class="section wrap"><div class="toolkit-stage">' +
    '<div class="section-head"><span class="eyebrow">03 / THE TOOLKIT</span><h2 class="section-title">Across disciplines,<br><em class="serif">toward solutions.</em></h2>' +
    '<p class="section-desc">技术栈不是目的，而是把抽象方案变成稳定系统和可用产品的工具。</p></div>'+
    '<div class="expertise-grid">'+cards+'</div></div></section>';
}
export function thinkingSection(){
 const list=notes.map((x,i)=>'<article class="thinking-note"><span class="code">Lab / 0'+(i+1)+'</span><div><h3>'+esc(x.title)+'</h3><p>'+esc(x.desc)+'</p></div></article>').join('');
 return '<section id="thinking" class="section wrap"><div class="thinking-grid"><div><span class="eyebrow">04 / NOTES & THINKING</span>' +
 '<h2 class="thinking-title">Still curious.<br><em class="serif">Always building.</em></h2>' +
 '<p class="thinking-description">这些是我长期关注和持续实践的方向，不是已经完成的正式研究成果列表。</p></div><div>'+list+'</div></div></section>';
}
export function closing(){
 return '<section id="contact" class="section wrap"><div class="closing">' +
   '<img class="landscape-cta" data-media="contact" loading="lazy" alt="暖色自然风景作为个人主页的结束背景">' +
   '<div class="closing-content"><span class="eyebrow">LET US CONNECT</span>' +
   '<h2>Make things<br><em class="serif">matter.</em></h2>' +
   '<p>从 AI、工业自动化到独立产品创造，如果你也在解决有趣的实际问题，欢迎在 GitHub 交流。</p>' +
   '<a href="https://github.com/YSIR007" target="_blank" rel="noopener noreferrer">Visit my GitHub <span>↗</span></a></div></div></section>';
}
export function footer(){
 return '<footer class="footer wrap"><strong>YSIR007 / DIGITAL STUDIO</strong><span>Engineering · Intelligence · Independent Products</span><span>© 2026 YSIR007. Built with intention.</span></footer>';
}
