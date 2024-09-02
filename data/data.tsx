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
  // {
  //   link: "https://www.linkedin.com/in/muhammad-akbar-adityah/",
  //   icon: <FaLinkedin />,
  // },
  {
    link: "https://www.instagram.com/valterpolsri",
    icon: <FaInstagram />,
  },
];

export const guestSocial: SocialIcon[] = [
  // {
  //   link: "https://github.com/ariqfrhan",
  //   icon: <FaGithub />,
  // },
  {
    link: "https://www.linkedin.com/in/sadam-permana-927635190/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://www.instagram.com/sadampermana.w",
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
    title: "Technical Meeting Semua Lomba",
    company: "",
    timeline: "27 September 2024 (Online)",
    image: "/V.png",
    description: ""
  },
  {
    id: 2,
    title: "Penyisihan Lomba Mobile Legends",
    company: "",
    timeline: "28 September 2024 (Online)",
    image: "/V.png",
    description: ""
  },
  {
    id: 3,
    title: "Pengumpulan Karya Lomba Infografia dan Video Campaign",
    company: "",
    timeline: "29 Sept - 6 Oktober 2024",
    image: "/V.png",
    description: ""
  },
  {
    id: 4,
    title: "Penysihan dan pengumuman Finalis Lomba Info dan Video",
    company: "",
    timeline: "7-9 Oktober 2024, 10 Oktober 2024",
    image: "/V.png",
    description: ""
  },
  {
    id: 5,
    title: "Presentasi Finalis lomba Info dan Video",
    company: "",
    timeline: "12 Oktober 2024",
    image: "/V.png",
    description: ""
  },
];

export const projects = [
  {
    type: "lomba",
    title: "Infografis",
    desc: "Membuat desain infografis informatif dan menarik untuk berbagai audiens.",
    image: "/InfografisBadge32bit.png",
    linkGithub: "https://docs.google.com/forms/d/e/1FAIpQLSeOkoD0-qF6W0NR2eXEmAC6oojO2Fw2Q7bvKdKLCVW35nUpIA/viewform?usp=sharing",
    linkGuide: "/Buku Panduan Infografis.pdf",
    guideName: "Buku Panduan Infografis"
  },
  {
    type: "lomba",
    title: "Video Campaign",
    desc: "Mengembangkan kampanye video yang kreatif dan berpengaruh.",
    image: "/VideoBadge32bit.png",
    linkGithub: "https://docs.google.com/forms/d/e/1FAIpQLSdyz-HHDB29N3Gm94qQ3wN3AreGuyMpmf0-vsvG2b_5US8pVg/viewform?usp=sharing",
    linkGuide: "/Buku Panduan Campaign Video.pdf",
    guideName: "Buku Panduan Campaign Video"
  },
  {
    type: "lomba",
    title: "PUBG Mobile",
    desc: "Kompetisi game PUBG Mobile untuk mengasah strategi dan keterampilan tim.",
    image: "/PUBGBadge32bit.png",
    linkGithub: "https://docs.google.com/forms/d/e/1FAIpQLSd4tWw5fqDwBAUcJuw4s7Jk0nyBXdIn_S9kF8P0_hnSm8aDRw/viewform?usp=sharing",
    linkGuide: "/Buku Panduan PUBG.pdf",
    guideName: "Buku Panduan PUBG"
  },
  {
    type: "pelatihan",
    title: "Animasi 2D",
    desc: "Pelatihan dasar animasi 2D, mencakup desain karakter dan teknik animasi.",
    image: "/V.png",
    linkGithub: "https://docs.google.com/forms/d/e/1FAIpQLSfoShRxTaMQj3PUr78WOFtHZOogzqM0GgJTIBxdD0FRiXyFpQ/viewform?usp=sharing",
    linkGuide: "/Buku Panduan Pelatihan.pdf",
    guideName: "Buku Panduan Pelatihan"
  },
  {
    type: "seminar",
    title: "GEN-Z menghadapi tantangan untuk memasuki dunia karier",
    desc: "Seminar tentang tantangan dan persiapan karier bagi generasi Z.",
    image: "/SaddamSeminar.png",
    linkGithub: "https://docs.google.com/forms/d/e/1FAIpQLScde-DWBMxLQPrUQMNsgbZgbxgzuYIVTnPZTiMKorPRvd5gJQ/viewform?usp=sharing4",
    linkGuide: "/Buku Panduan Seminar.pdf",
    guideName: "Buku Panduan Seminar"
  },
];


export const imageProject = [
  {
    title: "Laravel with cloud run deployments",
    desc: "Sebuah dokumentasi tentang proyek cloud run dengan Laravel.",
    src: "/V.png", // Replace with the path to your image
  },
];

export const documentations = [
  {
    src: "/_MG_0031.JPG"
  },
  {
    src: "/DSC00407.JPG"
  },
  {
    src: "/DSC02021.JPG"
  },
  {
    src: "/DSC02289.JPG"
  },
  {
    src: "/DSC02596.JPG"
  },
  {
    src: "/DSC02913.JPG"
  },
  {
    src: "/DSC02963.JPG"
  },
  {
    src: "/DSC02997.JPG"
  },
  {
    src: "/IMG_1460.JPG"
  },
  {
    src: "/IMG_3534.JPG"
  },
]
