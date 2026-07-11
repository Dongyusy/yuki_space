export type ExperienceItem = {
  date: string;
  title: string;
  logo: string;
  body: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  cover: string;
  images: string[];
  tags: string[];
};

type ProjectImageModule = {
  src: string;
};

const projectImageModules = import.meta.glob<ProjectImageModule>(
  "../../project_*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const experienceLogoModules = import.meta.glob<ProjectImageModule>(
  "../../教育和实习经历/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const imageNumber = (path: string) => {
  const filename = path.split("/").pop() ?? "";
  const stem = filename.split(".")[0];
  return /^\d+$/.test(stem) ? Number.parseInt(stem, 10) : null;
};

const projectImageSrc = (folder: string, imageIndex: number) => {
  const entry = Object.entries(projectImageModules).find(([path]) => {
    return path.includes(`/${folder}/`) && imageNumber(path) === imageIndex;
  });

  if (!entry) {
    throw new Error(`Missing image ${imageIndex} in ${folder}`);
  }

  return entry[1].src;
};

const projectDetailImages = (folder: string) =>
  Object.entries(projectImageModules)
    .filter(([path]) => {
      const index = imageNumber(path);
      return path.includes(`/${folder}/`) && index !== null && index > 0;
    })
    .sort(([a], [b]) => (imageNumber(a) ?? 0) - (imageNumber(b) ?? 0))
    .map(([, image]) => image.src);

const experienceLogoSrc = (filename: string) => {
  const entry = Object.entries(experienceLogoModules).find(([path]) => path.endsWith(`/${filename}`));

  if (!entry) {
    throw new Error(`Missing experience logo ${filename}`);
  }

  return entry[1].src;
};

export const education: ExperienceItem[] = [
  {
    date: "2019.9 - 2020.6",
    title: "江南大学 机械工程学院 机械电子工程",
    logo: experienceLogoSrc("2019.9江南机械.jpg"),
    body: "GPA 3.88/4.0，专业第一名，转专业进入设计学院",
  },
  {
    date: "2020.9 - 2024.6",
    title: "江南大学 设计学院 工业设计",
    logo: experienceLogoSrc("2020.9江大设计.jpg"),
    body: "GPA 3.86/4.0，主修工业设计、服务设计、社会创新，获国家奖学金",
  },
  {
    date: "2024.9 - 2027.6",
    title: "北京理工大学 设计与艺术学院 设计学",
    logo: "/images/logos/bit.jpg",
    body: "研究方向：色彩科学、文化遗产及色彩设计等，获IF设计奖",
  },
];

export const internships: ExperienceItem[] = [
  {
    date: "2025.12 - 2026.6",
    title: "美团｜食杂零售｜小象超市供应链",
    logo: "/images/logos/meituan.jpg",
    body: "参与小象超市B端商品及物流设计，负责服务站、物流巡检等需求落地；实践AICoding交付能力，在职期间跑通设计师端到端交付流程",
  },
  {
    date: "2024.12 - 2025.9",
    title: "滴滴｜网约车出行｜品类及场景出行",
    logo: "/images/logos/didi.jpg",
    body: "负责场景及品类出行的UIUX与视觉需求。包括老人及商旅出行场景、用增活动、专车豪华车场站营销，在职期间交付需求落地20+",
  },
  {
    date: "2023.10 - 2024.3",
    title: "字节跳动｜本地生活｜商家端",
    logo: "/images/logos/bytedance.jpg",
    body: "参与商家端产品抖音来客的体验度量工作，在职期间输出报告20+，分析问题40+，有效推动产品优化",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "group-buy",
    title: "滴滴全城拼团活动",
    year: "2026",
    category: "C端 增长设计",
    summary: "滴滴全城拼团活动项目展示。",
    cover: projectImageSrc("project_01_多人拼团", 0),
    images: projectDetailImages("project_01_多人拼团"),
    tags: ["C端", "增长设计"],
  },
  {
    id: "salinity-warning",
    title: "美团小象温盐管理系统",
    year: "2025",
    category: "B端 体验设计 信息设计",
    summary: "美团小象温盐管理系统项目展示。",
    cover: projectImageSrc("project_02_温盐预警", 0),
    images: projectDetailImages("project_02_温盐预警"),
    tags: ["B端", "体验设计", "信息设计"],
  },
  {
    id: "ai-coding",
    title: "AI Coding项目实践",
    year: "2025",
    category: "设计提效 前端 D2C",
    summary: "AI Coding项目实践展示。",
    cover: projectImageSrc("project_03_AI Coding", 0),
    images: projectDetailImages("project_03_AI Coding"),
    tags: ["设计提效", "前端", "D2C"],
  },
  {
    id: "experience-metrics",
    title: "抖音来客体验度量",
    year: "2024",
    category: "B端 数据分析",
    summary: "抖音来客体验度量项目展示。",
    cover: projectImageSrc("project_04_体验度量", 0),
    images: projectDetailImages("project_04_体验度量"),
    tags: ["B端", "数据分析"],
  },
  {
    id: "didi-more",
    title: "其他项目",
    year: "2024",
    category: "C端 视觉",
    summary: "其他项目展示。",
    cover: projectImageSrc("project_05_DiDi其他", 0),
    images: projectDetailImages("project_05_DiDi其他"),
    tags: ["C端", "视觉"],
  },
  {
    id: "fun-run",
    title: "Q - Running",
    year: "2024",
    category: "Experience Design",
    summary: "Q - Running项目展示。",
    cover: projectImageSrc("project_06_趣跑", 0),
    images: projectDetailImages("project_06_趣跑"),
    tags: ["Experience Design"],
  },
  {
    id: "wanju",
    title: "Toy Gathering",
    year: "2023",
    category: "Service System Design",
    summary: "Toy Gathering项目展示。",
    cover: projectImageSrc("project_07_玩聚", 0),
    images: projectDetailImages("project_07_玩聚"),
    tags: ["Service System Design"],
  },
  {
    id: "donation",
    title: "E - System",
    year: "2023",
    category: "UI/UX and System Design",
    summary: "E - System项目展示。",
    cover: projectImageSrc("project_08_益捐", 0),
    images: projectDetailImages("project_08_益捐"),
    tags: ["UI/UX and System Design"],
  },
  {
    id: "visualight",
    title: "VISUALiGHT",
    year: "2022",
    category: "Intelligent product Design",
    summary: "VISUALiGHT项目展示。",
    cover: projectImageSrc("project_09_VISUALiGHT", 0),
    images: projectDetailImages("project_09_VISUALiGHT"),
    tags: ["Intelligent product Design"],
  },
  {
    id: "other",
    title: "Others",
    year: "2022",
    category: "more projects",
    summary: "Others项目展示。",
    cover: projectImageSrc("project_10_Other", 0),
    images: projectDetailImages("project_10_Other"),
    tags: ["more projects"],
  },
];
