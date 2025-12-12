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
  videoUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
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
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "arXiv",
    title: "UP2You: Fast Reconstruction of Yourself from Unconstrained Photo Collections",
    authors: "Zeyu Cai, Ziyang Li, Xiaoben Li, <b>Boqian Li</b>, Zeyu Wang, Zhenyu Zhang†, Yuliang Xiu† († corresponding author)",
    paperUrl: "https://arxiv.org/abs/2509.24817",
    codeUrl: "https://github.com/zcai0612/UP2You",
    projectUrl: "https://zcai0612.github.io/UP2You/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "3D avatar reconstruction from unconstrained photo collections.",
    imageUrl:
      "/images/teaser-up2you.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
