export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Oct 2025 - Present",
    title: "Research Intern",
    company: "PSI Lab, USC",
    // description:
    //   "Focus on Representation and Understanding of 3D Digital Humans.",
    advisor: "Prof. Yue Wang",
    companyUrl: "https://psi-lab.ai/",
  },
  {
    date: "Jul 2024 - May 2025",
    title: "Research Intern",
    company: "Endless Lab, Westlake University",
    description:
      "Focus on Representation and Understanding of 3D Digital Humans.",
    advisor: "Prof. Yuliang Xiu",
    companyUrl: "http://endless.do/",
  },
  {
    date: "Nov 2023 - May 2024",
    title: "Research Intern",
    company: "AIVC Lab, UCLA",
    description:
      "Focus on 3D Garment Synthesis and Diffusion based Generative Models.",
    advisor: "Prof. Chenfanfu Jiang and Prof. Yin Yang",
    companyUrl: "https://www.math.ucla.edu/aivc/",
  },
  // {
  //   date: "Summer 2022",
  //   title: "Research Intern",
  //   company: "Google Research",
  //   description:
  //     "Worked on improving robustness of large language models to distribution shifts",
  //   manager: "Elise Brown",
  //   companyUrl: "https://google.com",
  // },
];
