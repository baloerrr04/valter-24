import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const navItem = [
  { name: "Beranda", link: "#home" },
  { name: "Tentang", link: "#about" },
  { name: "Bintang Tamu", link: "#guest" },
  { name: "Timeline", link: "#timeline" },
  { name: "Dokumentasi", link: "#dokumentasi" },
  { name: "Kontak", link: "#contact" },
];
type SocialIcon = {
  link: string;
  icon: React.ReactElement;
};
export const social: SocialIcon[] = [
  // {
  //   link: "https://github.com/ariqfrhan",
  //   icon: <FaGithub />,
  // },
  {
    link: "https://www.linkedin.com/in/muhammad-akbar-adityah/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://www.instagram.com/akbaradityahhh",
    icon: <FaInstagram />,
  },
];

export const techStack = [
  {
    id: 1,
    name: "Java",
    image: "/java.svg",
  },
  {
    id: 2,
    image: "/typescript.png",
    name: "Typescript",
  },
  {
    id: 32,
    image: "/flutter.svg",
    name: "Flutter",
  },
  {
    id: 4,
    image: "/react.png",
    name: "ReactJs",
  },
  {
    id: 5,
    image: "/laravel.png",
    name: "Laravel",
  },
  {
    id: 6,
    image: "/wordpress.png",
    name: "Wordpress",
  },
  {
    id: 7,
    image: "/uipath.png",
    name: "UiPath",
  },
  {
    id: 8,
    image: "/davinci.png",
    name: "DaVinci",
  },
];

export const experience = [
  {
    id: 1,
    title: "Lorem",
    company: "lorem",
    timeline: "Feb 2024 - Jul 2024",
    image: "/V.png",
    description: [
      "Led the development of an end-to-end Robotic Process Automation (RPA) solution to optimize Sales & Aftersales Productivity Reports and Aftersales Branch Outstanding Reports for branches at Auto2000, using UiPath and achieving 92% time efficiency and increased 27x productivity",
      "Developed 6 Sales & Aftersales Productivity Analytical Dashboard with PowerBI as the end product of RPA script.",
      "Participated and developed Individual Learning Path feature on Auto2000's internal employee development website for employee competency development in 126 branches",
    ],
  },
  {
    id: 2,
    title: "Lorem",
    company: "lorem",
    timeline: "Feb 2024 - Jul 2024",
    image: "/V.png",
    description: [
      "Led the development of an end-to-end Robotic Process Automation (RPA) solution to optimize Sales & Aftersales Productivity Reports and Aftersales Branch Outstanding Reports for branches at Auto2000, using UiPath and achieving 92% time efficiency and increased 27x productivity",
      "Developed 6 Sales & Aftersales Productivity Analytical Dashboard with PowerBI as the end product of RPA script.",
      "Participated and developed Individual Learning Path feature on Auto2000's internal employee development website for employee competency development in 126 branches",
    ],
  },
  {
    id: 3,
    title: "Lorem",
    company: "lorem",
    timeline: "Feb 2024 - Jul 2024",
    image: "/V.png",
    description: [
      "Led the development of an end-to-end Robotic Process Automation (RPA) solution to optimize Sales & Aftersales Productivity Reports and Aftersales Branch Outstanding Reports for branches at Auto2000, using UiPath and achieving 92% time efficiency and increased 27x productivity",
      "Developed 6 Sales & Aftersales Productivity Analytical Dashboard with PowerBI as the end product of RPA script.",
      "Participated and developed Individual Learning Path feature on Auto2000's internal employee development website for employee competency development in 126 branches",
    ],
  },
  {
    id: 4,
    title: "Lorem",
    company: "lorem",
    timeline: "Feb 2024 - Jul 2024",
    image: "/V.png",
    description: [
      "Led the development of an end-to-end Robotic Process Automation (RPA) solution to optimize Sales & Aftersales Productivity Reports and Aftersales Branch Outstanding Reports for branches at Auto2000, using UiPath and achieving 92% time efficiency and increased 27x productivity",
      "Developed 6 Sales & Aftersales Productivity Analytical Dashboard with PowerBI as the end product of RPA script.",
      "Participated and developed Individual Learning Path feature on Auto2000's internal employee development website for employee competency development in 126 branches",
    ],
  },
  {
    id: 5,
    title: "Lorem",
    company: "lorem",
    timeline: "Feb 2024 - Jul 2024",
    image: "/V.png",
    description: [
      "Led the development of an end-to-end Robotic Process Automation (RPA) solution to optimize Sales & Aftersales Productivity Reports and Aftersales Branch Outstanding Reports for branches at Auto2000, using UiPath and achieving 92% time efficiency and increased 27x productivity",
      "Developed 6 Sales & Aftersales Productivity Analytical Dashboard with PowerBI as the end product of RPA script.",
      "Participated and developed Individual Learning Path feature on Auto2000's internal employee development website for employee competency development in 126 branches",
    ],
  },
  {
    id: 6,
    title: "Lorem",
    company: "lorem",
    timeline: "Feb 2024 - Jul 2024",
    image: "/V.png",
    description: [
      "Led the development of an end-to-end Robotic Process Automation (RPA) solution to optimize Sales & Aftersales Productivity Reports and Aftersales Branch Outstanding Reports for branches at Auto2000, using UiPath and achieving 92% time efficiency and increased 27x productivity",
      "Developed 6 Sales & Aftersales Productivity Analytical Dashboard with PowerBI as the end product of RPA script.",
      "Participated and developed Individual Learning Path feature on Auto2000's internal employee development website for employee competency development in 126 branches",
    ],
  },
  
];

export const projects = [
  {
    type: "lomba",
    title: "Video Campaign",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores nisi.",
    image: "/V.png",
    linkGithub: "",
  },
  {
    type: "lomba",
    title: "Video Campaign",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores nisi.",
    image: "/V.png",
    linkGithub: "",
  },
  {
    type: "lomba",
    title: "Video Campaign",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores nisi.",
    image: "/V.png",
    linkGithub: "",
  },
  {
    type: "pelatihan",
    title: "Game Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores nisi.",
    image: "/V.png",
    linkGithub: "",
  },
  {
    type: "seminar",
    title: "Laravel cloud run with CI/CD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores nisi.",
    image: "/V.png",
    linkGithub: "",
  },
];

export const imageProject = [
  {
    title: "Laravel with cloud run deployments",
    desc: "Sebuah dokumentasi tentang proyek cloud run dengan Laravel.",
    src: "/V.png", // Replace with the path to your image
  },
];
