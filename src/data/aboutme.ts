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
  title: "", // left empty for now; the title/institution line is hidden when empty
  institution: "Huazhong University of Science and Technology (HUST)",
  // Note that links work in the description
  description:
    "<p>I am an incoming CS PhD at <a href='https://psi-lab.ai/'>PSI Lab</a> at USC, supervised by Prof. <a href='https://yuewang.xyz/'>Yue Wang</a> and also a Research Intern at WorldEngine AI, focusing on agentic robotics and generalizable humanoid world-action models (WAM). I received my B.Eng. from <a href='https://english.hust.edu.cn/'>Huazhong University of Science and Technology (HUST)</a>.</p> \
    <p>From Oct 2025 to Jan 2026, I was a Research Intern at <a href='https://psi-lab.ai/'>PSI Lab</a> at USC, supervised by Prof. <a href='https://yuewang.xyz/'>Yue Wang</a>, focusing on vision-language-action (VLA) models for humanoid loco-manipulation.</p> \
    <p>From Jul to Oct 2025, I was a Research Intern at <a href='https://www.cs.utexas.edu/'>The University of Texas at Austin</a>, supervised by Prof. <a href='https://www.cs.utexas.edu/~huangqx/'>Qixing Huang</a> and Prof. <a href='https://geopavlakos.github.io/'>Georgios Pavlakos</a>, focusing on leveraging video model priors for 3D human motion generation.</p> \
    <p>From 2024 to 2025, I was a Research Intern at <a href='http://endless.do/'>Endless AI Lab</a> at Westlake University, supervised by Prof. <a href='https://xiuyuliang.cn/'>Yuliang Xiu</a>, focusing on 3D human pose and shape estimation and representation.</p> \
    <p>From 2023 to 2024, I was a Research Intern at University of Utah &amp; UCLA, supervised by Prof. <a href='https://www.math.ucla.edu/~cffjiang/index.html'>Chenfanfu Jiang</a> and Prof. <a href='https://yangzzzy.github.io/'>Yin Yang</a>, focusing on 3D garment generation. \
    Before that, I explored physical simulation, debiased vision-language models and BCI (EEG analysis).</p> \
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
