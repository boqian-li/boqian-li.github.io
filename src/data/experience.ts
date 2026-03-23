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
    date: "Jul 2025 - Dec 2025",
    title: "Research Intern",
    company: "The University of Texas at Austin",
    description: 
      "Focus on leveraging Video Model Priors for Enhanced 3D Human Motion Generation",
    advisor: "Prof Qixing Huang and Prof. Georgios Pavlakos"
  },
  {
    date: "Jul 2024 - May 2025",
    title: "Research Intern",
    company: "Endless Lab, Westlake University",
    description:
      "Focus on 3D Human Pose Shape Estimation and Representation.",
    advisor: "Prof. Yuliang Xiu",
    companyUrl: "http://endless.do/",
  },
  {
    date: "Nov 2023 - May 2024",
    title: "Research Intern",
    company: "University of Utah",
    description:
      "Focus on 3D Garment Synthesis and Diffusion based Generative Models.",
    advisor: "Prof. Chenfanfu Jiang and Prof. Yin Yang",
    // companyUrl: "https://www.math.ucla.edu/aivc/",
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
