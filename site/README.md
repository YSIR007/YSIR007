# YSIR007 Digital Studio

个人作品集网站：暖米色编辑风、大幅静态风景与毛玻璃信息面板。

## 目录架构

- index.html：只负责元信息、挂载容器、CSS 与 ES Modules 引入
- assets/css/base.css：设计 token、字体、全局基础样式
- assets/css/layout.css：网站栅格、各大区域布局
- assets/css/components.css：具体 UI 组件视觉
- assets/css/responsive.css：移动端与平板适配
- assets/js/data.js：项目、技术能力、研究方向、风景图片链接
- assets/js/components/navigation.js：导航组件
- assets/js/components/hero.js：首页首屏组件
- assets/js/components/projects.js：项目卡片模板
- assets/js/components/sections.js：关于、能力、思考和联系模块
- assets/js/main.js：组装页面、图片容错和菜单交互

## 部署方式

沿用原来的 Cloudflare Workers 静态资源配置：
wrangler.toml 指向 ./site。GitHub main 分支更新后，Cloudflare 自动部署。

不需要 npm 构建，也不需要将 CSS、JS 内联进 HTML。使用原生 ES Modules。

## 本地查看

请通过 HTTP 服务预览，不建议直接双击 index.html（ES Module 的 file:// 导入会受到浏览器安全策略限制）。

在仓库根目录：

    python -m http.server 5173

然后访问 http://localhost:5173/site/

## 编辑内容

1. 修改项目文案、标签、状态：assets/js/data.js
2. 调整页面模块：assets/js/components/*.js
3. 调整颜色和字体：assets/css/base.css
4. 调整栅格尺寸：assets/css/layout.css
5. 修改视觉细节：assets/css/components.css
6. 调整移动端：assets/css/responsive.css

图片当前来自远程引用素材，并配有 Unsplash 备用地址。后续替换为自有/授权素材后，可放入 site/assets/images/ 并修改 data.js。

目前项目卡片中的 SVG/CSS 式抽象界面属于概念插画，不是实际工程拍摄或 UI 截图。
