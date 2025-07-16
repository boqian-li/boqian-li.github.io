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
    authors: "<b>Boqian Li</b>, Haiwen Feng*, Zeyu Cai, Michael&nbsp;J.&nbsp;Black, Yuliang Xiu†<br><br>(* group lead, † corresponding author)",
    paperUrl: "https://arxiv.org/abs/2503.10624",
    tldr: "Body fitting for clothed humans via equivariant tightness vectors and sparse markers, enabling handling challenging poses, unseen shapes, loose clothing, and extreme dynamics.",
    codeUrl: "https://github.com/boqian-li/ETCH",
    projectUrl: "https://boqian-li.github.io/ETCH/",
    imageUrl: "/images/teaser-etch.png",
  },
  {
    year: "2025",
    conference: "3DV",
    title: "GarmentDreamer: 3DGS Guided Garment Synthesis with Diverse Geometry and Texture Details",
    authors: "<b>Boqian Li</b>*, Xuan Li*, Ying Jiang*, Tianyi Xie, Feng&nbsp;Gao, Huamin Wang, Yin Yang, Chenfanfu&nbsp;Jiang<br><br>(* equal contribution)",
    paperUrl: "https://arxiv.org/abs/2405.12420",
    codeUrl: "https://github.com/boqian-li/GarmentDreamer",
    projectUrl: "https://xuan-li.github.io/GarmentDreamerDemo/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "A novel 3DGS-guided template-based garment synthesis framework with impressive results.",
    imageUrl:
      "/images/teaser-garmentdreamer.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  // {
  //   year: "2023",
  //   conference: "ICML",
  //   title: "Robust Causal Discovery Under Distribution Shift",
  //   authors: "Jane Smith, Xue Chen, Sarah Johnson",
  //   paperUrl: "https://arxiv.org/abs/2302.13095",
  //   codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  // },
];
