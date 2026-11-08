export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  proceedingsUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  projectUrl?: string;
  tldr?: string;
  imageUrl?: string;
  hoverImageUrl?: string;
  videoUrl?: string;
  award?: string;
}


// Author role marks — kept identical to the CV and project pages.
//   * equal contribution   ⊙ author order decided by coin flip   ⚑ project lead   † corresponding author
const FLAG_SVG =
  '<svg viewBox="0 0 24 24" width="0.85em" height="0.85em" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:baseline" role="img" aria-label="project lead"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>';
const MARK = { equal: "*", coin: "⊙", lead: FLAG_SVG, corr: "†" } as const;
const m = (...keys: (keyof typeof MARK)[]) =>
  `<sup style="font-size:0.8em">${keys.map((k) => `<span style="margin-left:0.12em">${MARK[k]}</span>`).join("")}</sup>`;

export const authorMarkLegend = [
  `${MARK.equal} Equal contribution`,
  `${MARK.coin} Author order decided by coin flip`,
  `${MARK.lead} Project lead`,
  `${MARK.corr} Corresponding author`,
].join("&emsp;");

export const publicationData: Publication[] = [
  // Newest first.
  {
    year: "2027",
    conference: "Under review at ICRA",
    title: "WE-Dream: Generalizable Humanoid World-Action Models with Latent-Action Pretraining and Routed Attention",
    authors: `<b>Boqian Li</b>${m("equal", "coin", "lead")}, Liang Heng${m("equal", "coin")}, Weiduo Yuan${m("equal")}, Hongyi Jing, Songlin Wei, Jionghao Wang, Xiawei Liu, Muchen Xu, Haoyi Lin, Henghui Bao, Haonan Chang, Di Huang, Yue Wang${m("corr")}`,
    imageUrl: "/images/teaser-wedream.png",
  },
  {
    year: "2026",
    conference: "RSS",
    title: "Ψ0: An Open Foundation Model Towards Universal Humanoid Loco-Manipulation",
    authors: `Songlin Wei${m("equal")}, Hongyi Jing${m("equal")}, <b>Boqian Li</b>${m("equal")}, Zhenyu Zhao${m("equal")}, Jiageng Mao, Zhenhao Ni, Sicheng He, Jie Liu, Xiawei Liu, Kaidi Kang, Sheng Zang, Weiduo&nbsp;Yuan, Marco Pavone, Di Huang, Yue Wang${m("corr")}`,
    paperUrl: "https://arxiv.org/abs/2603.12263",
    proceedingsUrl: "https://www.roboticsproceedings.org/rss22/p021.html",
    tldr: "An open vision-language-action (VLA) model for humanoid loco-manipulation.",
    codeUrl: "https://github.com/physical-superintelligence-lab/Psi0",
    projectUrl: "https://psi-lab.ai/Psi0/",
    award: "🏆 Oral, Best Paper Award (3D-LLM/VLA Workshop, CVPR 2026)",
    imageUrl: "/images/teaser-psi0.png",
    hoverImageUrl: "/images/teaser-psi0.gif",
  },
  {
    year: "2026",
    conference: "ECCV",
    title: "ETCH-X: Robustify Expressive Body Fitting to Clothed Humans with Composable Datasets",
    authors: `Xiaoben Li, Jingyi Wu, Zeyu Cai, Siyuan Yu, <b>Boqian Li</b>, Yuliang Xiu${m("corr")}`,
    paperUrl: "https://arxiv.org/abs/2604.08548",
    proceedingsUrl: "https://doi.org/10.1007/978-3-032-37029-7_26",
    tldr: "Disentangled undressing and dense fitting for scalable training, enabling expressive SMPL-X fitting to partial scans.",
    codeUrl: "https://github.com/XiaobenLi00/ETCH-X",
    projectUrl: "https://xiaobenli00.github.io/ETCH-X/",
    imageUrl: "/images/teaser-etch-x.png",
    hoverImageUrl: "/images/teaser-etch-x.gif",
  },
  {
    year: "2026",
    conference: "ICLR",
    title: "UP2You: Fast Reconstruction of Yourself from Unconstrained Photo Collections",
    authors: `Zeyu Cai, Ziyang Li, Xiaoben Li, <b>Boqian Li</b>, Zeyu Wang, Zhenyu Zhang${m("corr")}, Yuliang Xiu${m("corr")}`,
    paperUrl: "https://arxiv.org/abs/2509.24817",
    proceedingsUrl: "https://proceedings.iclr.cc/paper_files/paper/2026/hash/63fa7efdd3bcf944a4bd6e0ff6a50041-Abstract-Conference.html",
    codeUrl: "https://github.com/zcai0612/UP2You",
    projectUrl: "https://zcai0612.github.io/UP2You/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "3D avatar reconstruction from unconstrained photo collections.",
    imageUrl:
      "/images/teaser-up2you.png",
    hoverImageUrl: "/images/teaser-up2you.gif",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "ICCV",
    title: "ETCH: Generalizing Body Fitting to Clothed Humans via Equivariant Tightness",
    authors: `<b>Boqian Li</b>, Haiwen Feng${m("lead")}, Zeyu Cai, Michael&nbsp;J.&nbsp;Black, Yuliang Xiu${m("corr")}`,
    paperUrl: "https://arxiv.org/abs/2503.10624",
    proceedingsUrl: "https://openaccess.thecvf.com/content/ICCV2025/html/Li_ETCH_Generalizing_Body_Fitting_to_Clothed_Humans_via_Equivariant_Tightness_ICCV_2025_paper.html",
    tldr: "Clothed human body fitting via equivariant tightness vectors and sparse markers.",
    codeUrl: "https://github.com/boqian-li/ETCH",
    award: "⭐ Highlight Paper (Top 2.3%)",
    projectUrl: "https://boqian-li.github.io/ETCH/",
    imageUrl: "/images/teaser-etch.png",
    hoverImageUrl: "/images/teaser-etch.gif",
  },
  {
    year: "2025",
    conference: "3DV",
    title: "GarmentDreamer: 3DGS Guided Garment Synthesis with Diverse Geometry and Texture Details",
    authors: `<b>Boqian Li</b>${m("equal")}, Xuan Li${m("equal")}, Ying Jiang${m("equal")}, Tianyi Xie, Feng Gao, Huamin&nbsp;Wang, Yin Yang, Chenfanfu Jiang`,
    paperUrl: "https://arxiv.org/abs/2405.12420",
    proceedingsUrl: "https://doi.org/10.1109/3DV66043.2025.00134",
    codeUrl: "https://github.com/boqian-li/GarmentDreamer",
    projectUrl: "https://xuan-li.github.io/GarmentDreamerDemo/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Template-based 3D garment synthesis guided by consistent 3DGS reference.",
    imageUrl:
      "/images/teaser-garmentdreamer.png",
    hoverImageUrl: "/images/teaser-garmentdreamer.gif",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
