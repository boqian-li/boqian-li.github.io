export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  pageUrl?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "3DV",
    title: "GarmentDreamer: 3DGS Guided Garment Synthesis with Diverse Geometry and Texture Details",
    authors: "Boqian Li*, Xuan Li*, Ying Jiang*, Tianyi Xie, Feng Gao, Huamin Wang, Yin Yang, and Chenfanfu Jiang.",
    paperUrl: "https://arxiv.org/abs/2405.12420",
    codeUrl: "https://github.com/boqian-li/GarmentDreamer",
    pageUrl: "https://xuan-li.github.io/GarmentDreamerDemo/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "A novel and effective 3DGS-guided garment synthesis framework.",
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
