// 网站内容数据层：更新作品、技能和介绍，从这里改即可。
// 图片为设计氛围素材，不代表真实工程项目成果；替换为自有图片时修改 media。
export const media = {
  hero: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261021_093821_db49f268-cd69-4ac0-b92b-e0b8a7062322.png",
  bento: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261021_093819_8ee49f04-c4b4-4be9-9788-e5f7030697ce.png",
  contact: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261021_093820_6e4510b1-3415-4522-80ef-8d3f9cebcfa5.png",
  fallbackHero: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=82",
  fallbackBento: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=82",
  fallbackContact: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=82"
};
export const projects = [
  {
    title: "工业视觉检测与自动化系统",
    type: "INDUSTRIAL VISION / ENGINEERING",
    description: "连接工程图纸、工业相机、机械臂、PLC 与上位机，探索从目标定位、识别分割、坐标映射到自动化采集的完整检测闭环。",
    tags: ["Python / OpenCV", "YOLO / OCR", "Robot / PLC"],
    status: "工程实践",
    visual: "vision"
  },
  {
    title: "Orbis · 故事创作工作台",
    type: "INDEPENDENT PRODUCT / CREATIVE TOOLS",
    description: "面向小说作者的大纲与世界观管理软件，围绕故事结构、人物关系与创作流程，持续探索 AI 与结构化创作的结合。",
    tags: ["Web Application", "AI Writing", "Product Design"],
    status: "持续开发",
    visual: "orbis"
  },
  {
    title: "PlayOrder · 业务 SaaS 探索",
    type: "SAAS / BUSINESS WORKFLOW",
    description: "围绕单店陪玩业务的接单、订单处理与服务流程，尝试将复杂业务规则转化为更易管理的软件系统。",
    tags: ["SaaS", "Workflow", "Product"],
    status: "产品探索",
    visual: "playorder"
  },
  {
    title: "跨模态几何匹配研究",
    type: "COMPUTER VISION / APPLIED RESEARCH",
    description: "研究 PDF 工程图和真实相机图像间的几何配准，比较轮廓、孔槽结构、特征描述子与深度匹配模型的可靠性。",
    tags: ["Homography", "LightGlue / UPAL", "RANSAC"],
    status: "持续研究",
    visual: "matching"
  }
];
export const expertise = [
  {
    title:"视觉感知与算法",
    description:"目标检测与分割、OCR、缺陷分析、局部清晰度评价和图像处理。",
    tags:["OpenCV","YOLO","PaddleOCR","Anomalib","Tenengrad"]
  },
  {
    title:"几何与空间测量",
    description:"相机标定、图纸到图像映射、结构匹配与激光轮廓测量。",
    tags:["Homography","RANSAC","LightGlue","LoFTR","3D Profiling"]
  },
  {
    title:"工业系统与边缘 AI",
    description:"相机、机器人、PLC 和上位机协同，关注部署效率与系统稳定性。",
    tags:["LabVIEW","Modbus TCP","Jetson Orin","TensorRT","ONNX"]
  },
  {
    title:"软件工程与 AI 应用",
    description:"从后端服务到前端产品，探索 LLM、Agent 与可复用的业务能力。",
    tags:["FastAPI","PostgreSQL","React","TypeScript","Ollama / LLM"]
  }
];
export const notes = [
  {title:"让工业视觉在真实环境中更可靠",desc:"清晰度、位置变化、图纸与实物差异，如何被稳定而可解释地处理。"},
  {title:"把 AI 变成可交付的系统能力",desc:"不仅关注模型效果，也关注推理延迟、接口设计、通信时序和运行稳定性。"},
  {title:"通过独立软件沉淀长期价值",desc:"从小问题与明确用户出发，持续打磨可以长期使用和演化的软件产品。"}
];
