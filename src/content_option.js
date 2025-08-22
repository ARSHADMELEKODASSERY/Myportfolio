import ArshadBg from "../src/assets/images/laptop.jpg"
import inclisImg from "../src/assets/images/Inclips.png";
import adrImage from "../src/assets/images/adrImage.png";
import Alcohol from "../src/assets/images/Alcohols.png";
import Students from "../src/assets/images/Students.png";
import Bank from "../src/assets/images/Bank.png";
import Print from "../src/assets/images/Printing.png";

const logotext = "ARSHAD.";
const meta = {
  title: "Arshad MK",
  description:
    "I’m ARSHAD MK data scientist _ Full stack devloper,currently working in Frugal Scientific private Ltd",
};

const introdata = {
  title: "I’m Arshad MK  and I'm a",
  animated: {
    first: "Web Developer",
    second: "",
    third: "Full Stack Developer",
  },
  description: "",
  your_img_url: ArshadBg
};

const dataabout = {
  title: "about my self",
  aboutme:
    "A passionate and dedicated FullStack developer with graduate, I have completed my postgraduate degree in Computer Science at R.V.S College of Arts and Science, Coimbatore, specialized in Data Science and Full Stack Development.With a strong foundation in front-end and back-end technologies, I aspire to become a Full Stack Developer with great knowledge. My positive attitude, reliability, and commitment to learning make me a strong team player and a valuable asset in any development environment",
};
const worktimeline = [
  {
    jobtitle: "Associative Product Engineer",
    where: "Frugal Scientific Private Ltd",
    date: "Apr 2024 - Present",
  },
  {
    jobtitle: "FullStack Developer Intern",
    where: "FullStack Developer Academy",
    date: "Aug 2023 - Apr 2024",
  },
  {
    jobtitle: "Junior Software Engineer",
    where: "PS Netsuite Solutions",
    date: "Apr 2023 - Aug 2023",
  },
];
const qualification = [
  {
    name: "MSc Computer Science",
    school: "RVS College of Arts And Science,Coimbatore",
    year: 2023,
  },
  {
    name: "BSc Computer Science",
    school: "CAS Muthuvallur donated by I.H.R.D",
    year: 2019,
  },
  {
    name: "+2 (Computer Science)",
    school: "G.H.S.S Peruvallur",
    year: 2016,
  },
];
const skills = [
  {
    name: "Html , Css",
    value: 90,
  },
  {
    name: "Tableau",
    value: 60,
  },
  {
    name: "Jquery",
    value: 85,
  },
  {
    name: "Microsoft Excel",
    value: 70,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "Statistics",
    value: 65,
  },
  {
    name: "React",
    value: 70,
  },
  {
    name: "Data Visualization using R",
    value: 50,
  },
  {
    name: "Mongo Db",
    value: 65,
  },
  {
    name: "Data Visulizing using python",
    value: 50,
  },
  {
    name: "Node",
    value: 60,
  },
  {
    name: "Sql",
    value: 70,
  },
];

const services = [
  {
    title: "AI-Summit Completion certificate.",
    description:
      "AI-Summit Completion certificate by WoxenUniversity. on (27th-28th Oct 2021)",
  },
  {
    title: "Student Developement Programme",
    description: "12 Days Student Development Program (SDP) by INFOSYS.",
  },
  {
    title: "Web Developement Bootcamp",
    description: "Web Developement Bootcamp by Codekaro on 13 Nov 2022.",
  },
  {
    title: "Data Aalytic Workshop",
    description: "Data Aalytic Workshop from Jobaaj Learing on 22 Nov 202.",
  },
];

const dataportfolio = [
  {
    img: inclisImg,
    description:
      "Inclips is the platform for seamless marine survey management.",
    link: "https://inclipsmarine.com/",
  },
  {
    img: Print,
    description:
      "Sarga Printing is a leader in offset printing, combining cutting-edge technology with exceptional craftsmanship to deliver top-quality prints. With a strong legacy of trust and innovation,",
    link: "http://64.227.153.239:8000/",
  },
  {
    img: adrImage,
    description: "A platform providing efficient, cost-effective, on-demand online dispute resolution with its own set of rules and a panel of expert mediators and arbitrators",
    link: "https://adredge.com/",
  },
  {
    img: Bank,
    description: "Basic bank operation application.",
    code: "https://github.com/ARSHADMSC/BankApplication",
  },
  {
    img: Alcohol,
    description: "Alcohol Consumption in Russia using R.",
    code: "https://github.com/ARSHADMSC/Alcohol_Consumption",
  },
  {
    img: Students,
    description: "Real time placement data using R",
    code: "https://github.com/ARSHADMSC/Placement_data",
  },
];

const contactConfig = {
  YOUR_EMAIL: "mkarshad099@gmail.com",
  YOUR_FONE: "9744658488",
  description:
    "I’d love to connect and collaborate! Whether you have a project idea, a question, or just want to say hello, feel free to reach out. I am always open to new opportunities and discussions in  Web Development, Full Stack Development, and Data Science.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_wougpkf",
  YOUR_TEMPLATE_ID: "template_g4knf0i",
  YOUR_USER_ID: "j62ZBx7EuSV3fkfrW",
};

const socialprofils = {
  github: "https://github.com/ARSHADMSC",
  // facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/arshad-mk-25366a221/",
  instagram: "https://www.instagram.com/?hl=en",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  qualification,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
