export interface News {
  date: string;
  description: string;
  pinned?: boolean;
}

export const newsData: News[] = [
  {
    date: "",
    description: "<strong>I am looking for Fall 2026 PhD opportunities and am open to discussing potential research collaborations. Please contact me if you are interested! :)</strong>",
    pinned: true
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
    description: "One paper: <a href='https://arxiv.org/abs/2506.14603' target='_blank'>ETCH</a> is accepted by ICCV 2025!"
  },
  
];
