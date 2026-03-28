export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  projectUrl?: string;
  tldr?: string;
  imageUrl?: string;
  hoverImageUrl?: string;
  videoUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "arXiv",
    title: "Ψ0: An Open Foundation Model Towards Universal Humanoid Loco-Manipulation",
    authors: "Songlin Wei*, Hongyi Jing*, <b>Boqian Li</b>*, Zhenyu Zhao*, Jiageng Mao, Zhenhao Ni, Sicheng He, Jie Liu, Xiawei Liu, Kaidi Kang, Sheng Zang, Weiduo&nbsp;Yuan, Marco Pavone, Di Huang, Yue Wang† (* equal contribution, † corresponding author)",
    paperUrl: "https://arxiv.org/abs/2603.12263",
    tldr: "An open vision-language-action (VLA) model for dexterous humanoid loco-manipulation.",
    codeUrl: "https://github.com/physical-superintelligence-lab/Psi0",
    // award: "⭐ Highlight Paper (Top 2.3%)",
    projectUrl: "https://psi-lab.ai/Psi0/",
    imageUrl: "/images/teaser-psi0.png",
    hoverImageUrl: "/images/teaser-psi0.gif",
  },
  {
    year: "2025",
    conference: "ICCV",
    title: "ETCH: Generalizing Body Fitting to Clothed Humans via Equivariant Tightness",
    authors: "<b>Boqian Li</b>, Haiwen Feng‡, Zeyu Cai, Michael&nbsp;J.&nbsp;Black, Yuliang Xiu† (‡ group lead, † corresponding author)",
    paperUrl: "https://arxiv.org/abs/2503.10624",
    tldr: "Clothed human body fitting via equivariant tightness vectors and sparse markers.",
    codeUrl: "https://github.com/boqian-li/ETCH",
    award: "⭐ Highlight Paper (Top 2.3%)",
    projectUrl: "https://boqian-li.github.io/ETCH/",
    imageUrl: "/images/teaser-etch.png",
    hoverImageUrl: "/images/teaser-etch.gif",
  },
  {
    year: "2026",
    conference: "ICLR",
    title: "UP2You: Fast Reconstruction of Yourself from Unconstrained Photo Collections",
    authors: "Zeyu Cai, Ziyang Li, Xiaoben Li, <b>Boqian Li</b>, Zeyu Wang, Zhenyu Zhang†, Yuliang Xiu† († corresponding author)",
    paperUrl: "https://arxiv.org/abs/2509.24817",
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
    conference: "3DV",
    title: "GarmentDreamer: 3DGS Guided Garment Synthesis with Diverse Geometry and Texture Details",
    authors: "<b>Boqian Li</b>*, Xuan Li*, Ying Jiang*, Tianyi Xie, Feng Gao, Huamin&nbsp;Wang, Yin Yang, ChenfanfuJiang (* equal contribution)",
    paperUrl: "https://arxiv.org/abs/2405.12420",
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
