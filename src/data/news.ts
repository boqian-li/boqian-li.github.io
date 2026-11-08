export interface News {
  date: string;
  description: string;
  pinned?: boolean;
}

export const newsData: News[] = [
  {
    date: "",
    description: "<strong>I am open to discussing potential research collaborations. Please contact me if you are interested! :)</strong>",
    pinned: true
  },
  {
    date: "2026-06-03",
    description: "<a href='https://psi-lab.ai/Psi0/' target='_blank'>Ψ0</a> wins the Best Paper Award at a CVPR 2026 workshop!",
  },
  {
    date: "2026-04-27",
    description: "One paper: <a href='https://psi-lab.ai/Psi0/' target='_blank'>Ψ0</a> is accepted to RSS 2026 as an Oral!",
  },
  {
    date: "2025-08-15",
    description: "Invited talk at <a href='https://qingkeai.online/archives/TBcYgpyb' target='_blank'>Qingke AI</a>.",
  },
  {
    date: "2025-07-24",
    description: "<a href='https://boqian-li.github.io/ETCH/' target='_blank'>ETCH</a> is selected as the highlight of ICCV 2025!"
  },
  {
    date: "2025-06-26",
    description: "One paper: <a href='https://boqian-li.github.io/ETCH/' target='_blank'>ETCH</a> is accepted by ICCV 2025!"
  },
];
