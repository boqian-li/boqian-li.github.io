export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Boqian Li",
  title: "Undergraduate Student",
  institution: "Huazhong University of Science and Technology(HUST)",
  // Note that links work in the description
  description:
    "I am a fourth-year (4/5) undergraduate student at <a href='https://english.hust.edu.cn/'>Huazhong University of Science and Technology(HUST)</a>. <br><br> \
    Currently, I am a research intern at <a href='http://endless.do/'>Endless Lab</a>, supervised by Prof. <a href='https://xiuyuliang.cn/'>Yuliang Xiu</a>, focusing on Representation and Understanding of 3D Digital Humans. <br><br> \
    From 2023 to 2024, I served as a Research Assistant at <a href='https://www.math.ucla.edu/aivc/'>AIVC Lab</a>, UCLA Department of Mathematics, supervised by Prof. <a href='https://www.math.ucla.edu/~cffjiang/index.html'>Chenfanfu Jiang</a> and Prof. <a href='https://yangzzzy.github.io/'>Yin Yang</a>, focusing on 3D Garment Generation. \
    Before that, I explored and practiced in areas like physical simulation, NLP(Debiased Vision-Language Model) and BCI(EEG analysis).",
  email: "boqianlihuster@gmail.com",
  imageUrl: "/images/IMG_0684.png",
  googleScholarUrl: "https://scholar.google.com/citations?user=7I8FkuoAAAAJ",
  githubUsername: "boqian-li",
  linkedinUsername: "boqian-li-3b8528282",
  twitterUsername: "Boqian_Li_",
  // blogUrl: "https://",
  cvUrl: "/files/CV_Boqian_Li.pdf",
  institutionUrl: "https://english.hust.edu.cn/",
  // altName: "",
  secretDescription: "Confidence is an ability to move from thought to action.",
};
