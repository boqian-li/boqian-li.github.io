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
  altName: "李博谦",
  title: "Undergraduate Student",
  institution: "Huazhong University of Science and Technology(HUST)",
  // Note that links work in the description
  description:
    "<p>I am a Research Intern at <a href='https://usc-gvl.github.io/'>University of Southern California</a>, supervised by Prof. <a href='https://yuewang.xyz/'>Yue Wang</a> from October 2025. I finished my undergraduate study at <a href='https://english.hust.edu.cn/'>Huazhong University of Science and Technology(HUST)</a>.</p> \
    <p>From 2024 to 2025, I was a Research Intern at <a href='http://endless.do/'>Endless Lab</a>, supervised by Prof. <a href='https://xiuyuliang.cn/'>Yuliang Xiu</a>, focusing on Representation and Understanding of 3D Digital Humans.</p> \
    <p>From 2023 to 2024, I served as a Research Intern at <a href='https://www.math.ucla.edu/aivc/'>AIVC Lab</a> at UCLA, supervised by Prof. <a href='https://www.math.ucla.edu/~cffjiang/index.html'>Chenfanfu Jiang</a> and Prof. <a href='https://yangzzzy.github.io/'>Yin Yang</a>, focusing on 3D Garment Generation. \
    Before that, I explored and practiced in areas like physical simulation, Debiased Vision-Language Model and BCI(EEG analysis).</p> \
    <p>For more information, please refer to my <a href='/files/CV_Boqian_Li.pdf'>CV</a>.</p>",
  email: "boqianlihuster@gmail.com",
  imageUrl: "/images/G1_and_Me.jpg",
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
