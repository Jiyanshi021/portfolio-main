import { Icons } from "@/components/icons";
import { BoxIcon, HomeIcon, MessageCircleMore } from "lucide-react";

export const DATA = {
  name: "Jiyanshi",
  initials: "JB",
  url: "https://github.com/Jiyanshi021",
  github: "https://github.com/Jiyanshi021",
  location: "Gurugram, IN",
  locationLink: "z",
  description:
    "AI/ML and data science enthusiast building practical solutions for climate, governance, and real-world problems.",
  summary:
    "I’m a Computer Science and Engineering student and research-focused AI/ML developer. I’ve worked as a Research Intern at ARIES, where I built complete geospatial pipelines on ERA5 and Landsat data to study long-term climate variability and urban heat island behaviour. I also build end-to-end applications like an AI-powered rural governance assistant (FastAPI + React + Qdrant), SEO automation tools, and multilingual RAG/SQL chatbots for schemes and internships. I love taking messy real-world data, analysing it, and turning it into clean, usable tools with simple interfaces—and I actively participate in hackathons, internships, and tech communities to keep learning.",
  // avatarUrl: "/me.png", // put your image in /public and set the correct path
  npmCommand: "npx jiyanshi-batra",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "YOLOv8",
    "AutoML",
    "LangChain",
    "RAG Systems",
    "Flask",
    "FastAPI",
    "Streamlit",
    "Scikit-learn",
    "TensorFlow / Keras",
    "PyTorch",
    "OpenCV",
    "Matplotlib",
    "Seaborn",
    "xarray",
    "rioxarray",
    "C++",
    "C",
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "Pandas",
    "NumPy",
    "Google Earth Engine",
    "QGIS",
    "Power BI",
  ],
  navbar: [
  { href: "/", icon: HomeIcon, label: "Home" },

  {
    href: "https://drive.google.com/file/d/1Bq-b0zy3VSLi9oyNaxco5H4lcO9A2kIZ/view?usp=sharing",
    icon: Icons.googleDrive,
    label: "Resume",
  },
],

  contact: {
    email: "jiyanshibatra753@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Jiyanshi021",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jiyanshi-batra-2348732b4/",
        icon: Icons.linkedin,

        navbar: true,
      },
      HuggingFace: {
  name: "HuggingFace",
  url: "https://huggingface.co/jiyanshi02",
  icon: Icons.huggingface, 
  navbar: true,
},
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
  {
  company: "ARIES (Aryabhatta Research Institute of Observational Sciences)",
  href: "https://www.aries.res.in/aries-0",
  badges: ["Research Intern"],
  location: "Nainital, Uttarakhand, IN",
  title: "Research Intern — Climate Data & Geospatial Analysis",
  logoUrl: "/aries_logo.png", // add your logo inside /public and use correct filename
  start: "July 2025",
  end: "Nov 2025",
  description:
    "Led the development of a complete geospatial analysis pipeline using ERA5 climate datasets and Landsat 8–9 satellite imagery to study long-term climate variability and urban heat island patterns around Nainital. Processed and cleaned multi-year NetCDF and GRIB data, applied statistical techniques such as Theil–Sen trend estimation and Mann–Kendall tests, and generated spatial maps for temperature, wind, and precipitation. Automated workflows using Python, xarray, rioxarray, and Google Earth Engine, improving research efficiency and data reproducibility. Delivered insights that support environmental monitoring and data-driven decision-making for Himalayan regions.",
},
    {
  company: "Quadra Security",
  href: "https://www.quadrasecurity.com/",
  badges: ["Program Manager Intern"],
  location: "Gurugram, Haryana, IN",
  title: "Program Manager Intern",
  logoUrl: "/quadra_security_logo.png", // add logo in /public with this name
  start: "Mar 2025",
  end: "Sept 2025",
  description:
    "Led program operations and coordinated multiple security, IT and AI/ML initiatives, ensuring smooth execution and timely delivery of projects. Managed workflows across cross-functional teams and interns, improved documentation processes, and streamlined communication to enhance project efficiency. Supported development and deployment of security solutions—including CCTV, access control, and automation systems—while assisting leadership in planning, tracking, and reporting ongoing technical initiatives.",
},
    // {
    //   company: "Kalpas Innovations Pvt. Ltd.",
    //   href: "https://kalpas.in/",
    //   badges: ["Intern"],
    //   location: "Hubballi Karnataka, IN",
    //   title: "React Developer",
    //   logoUrl: "/kalpas_innovations_logo.jpeg",
    //   start: "May 2021",
    //   end: "Jul 2021",
    //   description:
    //     "Developed user-facing features using React.js and created reusable components. Improved performance and usability by editing and optimizing existing code. Worked closely with designers and the backend team to ensure smooth project development.",
    // },
    // {
    //   company: "Team 4 Progress Technologies",
    //   href: "https://www.team4progress.com/",
    //   badges: ["Intern"],
    //   location: " New Delhi, IN",
    //   title: "Web Developer",
    //   logoUrl: "/team-4-progress.jpeg",
    //   start: "Oct 2020",
    //   end: "Dec 2020",
    //   description:
    //     "Worked in the Internal Product Development team, creating browser extensions to make internal tasks easier. Integrated APIs into the extensions to add more features and improve functionality",
    // },
  ],
  certification: [
    {
    title: "2nd Place – Face Guardian (IIT Roorkee, Cognizance 2024)",
    href: "https://hyperstack.id/credential/65cf7829-653d-4953-a9d0-7e64236a0b6d?view=recipient",
    logoUrl: "/face_guardian_certificate.png", // put certificate image or a trophy icon in /public
    start: "",
    end: "",
  },
  {
    title: "2nd Place – ThermaOracle (IIT Roorkee, Cognizance 2024)",
    href: "https://hyperstack.id/credential/602e9772-f704-465c-a6d7-fa65fbadbd94?view=recipient",
    logoUrl: "/thermaoracle_certificate.png", // put certificate image or a trophy icon in /public
    start: "",
    end: "",
  },
{
  title: "2nd Place – Utkarsh 2.0 (UTU State-Level Hackathon, Chatbot Category)",
  href: "https://drive.google.com/file/d/1AluJsEKhiOrIdioucUf4KmS-JIHrh9TP/view?usp=sharing", // add certificate URL later if you get one
  logoUrl: "/utkarsh_hackathon.png", // add a logo or trophy icon inside /public
  start: "",
  end: "",
  description:
    "Secured 2nd place at the UTU State-Level Hackathon with our project 'Sahayak' — a personalized job-search chatbot that delivers role-matched opportunities directly in chat, eliminating the need for manual filtering or searching across portals.",
},


  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  // ],
  projects: [
    {
  title: "AI Product Discovery Assistant",
  href: "https://product-discovery-assistant-meu1avn3s.vercel.app",
  dates: "",
  active: true,
  description:
    "An AI-powered ecommerce product recommendation system with full data-scraping pipeline, PostgreSQL storage, Qdrant semantic search, and Groq Llama-3.1-8B reasoning. Supports abstract user queries, multi-step intent interpretation, and product re-ranking through a custom RAG architecture. Includes a React + Tailwind storefront, product detail pages, and an interactive chat interface with real-time AI-recommended product cards.",
  technologies: [
    "FastAPI",
    "React",
    "Tailwind",
    "PostgreSQL",
    "Qdrant",
    "Neo4j",
    "Groq Llama-3.1-8B",
    "Sentence-Transformers",
    "ScraperAPI",
    "BeautifulSoup",
    "Python",
    "NLP",
    "RAG"
  ],
  links: [
    {
      type: "Website",
      href: "https://product-discovery-assistant-meu1avn3s.vercel.app",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/Jiyanshi021/product-discovery-assistant",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/product_assistant.png", // optional placeholder
  video: "",
},
    
    {
  title: "AI-Powered Internship Query Chatbot",
  href: "https://huggingface.co/spaces/jiyanshi02/Internship-Extraction_chatbot",
  dates: "",
  active: true,
  description:
    "A multilingual internship-query chatbot built with Flask, LangChain, and Groq LLaMA that converts natural-language questions into SQL for accurate internship retrieval. Supports Hindi-English seamless interaction, structured dataset search, and low-latency recommendations.",
  technologies: [
    "Flask",
    "LangChain",
    "Groq LLaMA",
    "SQL",
    "Python",
    "Google Translate API"
  ],
  links: [
    {
      type: "Website",
      href: "https://huggingface.co/spaces/jiyanshi02/Internship-Extraction_chatbot",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/Jiyanshi021/sahayak",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/internship_chatbot.png", // add image in /public OR leave empty
  video: "",
},

    {
  title: "Multimodal RAG: Local Document & Audio Retrieval System",
  href: "https://huggingface.co/spaces/jiyanshi02/RAG_based_offline_chatbot",
  dates: "",
  active: true,
  description:
    "A fully offline multimodal RAG system supporting PDF, DOCX, TXT, images, and audio. Built using Flask with Tesseract OCR and Faster-Whisper ASR, e5-small-v2 embeddings, and FAISS for fast semantic search and grounded snippet retrieval.",
  technologies: [
    "Flask",
    "FAISS",
    "e5-small-v2",
    "Tesseract OCR",
    "Faster-Whisper ASR",
    "Python",
    "SQLite"
  ],
  links: [
    {
      type: "Website",
      href: "https://huggingface.co/spaces/jiyanshi02/RAG_based_offline_chatbot",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "", // no GitHub, leave empty
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/rag_system.png", // add image in /public OR leave empty
  video: "",
},

    {
  title: "AI-Powered Rural Governance Assistant",
  href: "https://youtu.be/SvaaQusU9nU?si=S9WfEV2PBO07HTdO",
  dates: "",
  active: true,
  description:
    "A bilingual (Hindi + English) AI assistant for rural governance enabling scheme lookup, Panchayat-wise data retrieval, and intelligent recommendations. Features voice input, chat history, multi-message memory, dynamic UI, and high-accuracy semantic search over government datasets using Groq LLaMA + Qdrant.",
  technologies: [
    "FastAPI",
    "React",
    "TailwindCSS",
    "Groq LLaMA",
    "Qdrant",
    "Sentence-Transformers",
    "LangChain",
    "NLP",
    "SQL",
    "Google Translate API"
  ],
  links: [
    {
      type: "Website",
      href: "https://github.com/Jiyanshi021/Panchayat-Sahayika",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/Jiyanshi021/Panchayat-Sahayika",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/panchayat_sahayika.png", // optional placeholder, can be empty
  video: "",
},

    {
  title: "SEO Internal Link Suggestion Tool",
  href: "https://huggingface.co/spaces/jiyanshi02/Seo-internal-linker",
  dates: "",
  active: true,
  description:
    "An automated SEO interlinking system with full-domain crawling, readability-based extraction, TF-IDF + SBERT hybrid similarity scoring, and intelligent anchor text generation. Includes a Streamlit dashboard with advanced controls for real-time, explainable anchor→target recommendations and CSV export.",
  technologies: [
    "Streamlit",
    "Python",
    "NLP",
    "SBERT",
    "TF-IDF",
    "BeautifulSoup",
    "Web Crawling",
    "Requests",
    "Pandas"
  ],
  links: [
    {
      type: "Website",
      href: "https://huggingface.co/spaces/jiyanshi02/Seo-internal-linker",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/Jiyanshi021/SEO-Interlinking-Tool",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/seo_interlinking.png", // optional placeholder, can be empty
  video: "",
},

    
  ],
  upcomingProjects: [
    {
      icon: BoxIcon,
      title: "Framer Components",
      description:
        "Professional, modern and beautiful framer motion components built with Next.js and TailwindCSS",
      tags: ["Next.js", "Framer Motion", "Tawilwind"],
    },
    {
      icon: BoxIcon,
      title: "OS Resume",
      description:
        "A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations.",
      tags: ["Next.js", "Tawilwind"],
    },
    {
      icon: MessageCircleMore,
      title: "More Projects coming soon...",
      description:
        "I get ideas all day 🙄, All of them are updated here as soon as I start working on them.",
      tags: [],
    },
  ],
} as const;
