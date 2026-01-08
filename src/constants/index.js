export const myProjects = [
  {
    id: 1,
    title: "removeBg.com",
   description:
  "A full-stack web application that allows users to remove backgrounds from images in real-time using AI, with a credit-based system and secure payments.",
   subDescription: [
  "Integrated Clipdrop API for fast and accurate background removal.",
  "Implemented JWT-based authentication with Clerk for secure user management.",
  "Built responsive React.js + Tailwind frontend with sliders, upload, and pricing.",
  "Developed Spring Boot backend with Feign clients for image processing and Razorpay integration.",
  "Added a credit-based system for seamless image processing.",
  "Designed full-stack architecture with routing and real-time updates."
],
    href: "https://github.com/SohamBhandary/BackgroundRemoverBackend",
    logo: "",
    image: "/assets/projects/BG.png",
    tags: [
      {
        id: 1,
        name: "Reactjs",
        path: "/assets/logos/react.png",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/assets/logos/tailwind.png",
      },
      {
        id: 3,
        name: "Springboot",
        path: "/assets/logos/springboot.png",
      },
      {
        id: 4,
        name: "Postgresql",
        path: "/assets/logos/postgre.png",
      },
    ],
  },
 {
  id: 2,
  title: "Fintrack.com",
  description:
    "A full-stack personal finance management application to track income, expenses, and generate insightful dashboards for better financial decisions.",
  subDescription: [
    "Developed backend APIs using Spring Boot for user registration, login with JWT authentication, and role-based access.",
    "Implemented category, income, and expense management APIs for structured financial tracking.",
    "Created dashboard and filter APIs to provide dynamic insights and detailed reports.",
    "Built a responsive React frontend with Tailwind CSS, including signup/login modules, category, income, and expense management interfaces.",
    "Integrated Excel download functionality for financial records and reports.",
    "Designed a full-stack architecture connecting React frontend with Spring Boot backend, ensuring seamless data flow and security.",
  ],
  href: "https://github.com/SohamBhandary/MoneyManagerBackend",
  logo: "",
  image: "/assets/projects/Money.png",
  tags: [
    {
      id: 1,
      name: "React",
      path: "/assets/logos/react.png",
    },
    {
      id: 2,
      name: "TailwindCSS",
      path: "/assets/logos/tailwind.png",
    },
    {
      id: 3,
      name: "Spring Boot",
      path: "/assets/logos/springboot.png",
    },
    {
      id: 4,
      name: "Postgresql",
      path: "/assets/logos/postgre.png",
    },
  ],
}
,
  {
  id: 3,
  title: "RAG-Based Medical Chatbot",
  description:
    "A full-stack AI-powered medical chatbot with Role-Based Access Control (RBAC), enabling secure, document-driven QnA for different user roles.",
  subDescription: [
    "Built backend APIs using FastAPI with modular route design for scalable and maintainable architecture.",
    "Integrated Groq LLM (LLaMA 3) for natural language generation and Pinecone + Google AI Embeddings for vector-based RAG pipeline.",
    "Implemented secure user authentication and RBAC using MongoDB Atlas with Bcrypt, supporting roles like Doctor, Nurse, Patient, and Others.",
    "Developed a clean and interactive frontend using Streamlit for real-time chatbot interactions and document management.",
    "Enabled admin-only document uploads and role-based query filtering to ensure tailored responses and data privacy.",
    "Designed an end-to-end RAG pipeline with LangChain-style modularity for efficient semantic search and retrieval.",
  ],
  href: "https://github.com/SohamBhandary/RAG-RBAC-MedicalAssistant",
  logo: "",
  image: "/assets/projects/RAG.png",
  tags: [
    {
      id: 1,
      name: "FastApi",
      path: "/assets/logos/FastAPI.png",
    },
    {
      id: 2,
      name: "Groq LLM ",
      path: "/assets/logos/groq-text.png",
    },
    {
      id: 3,
      name: "Google AI Embeddings",
      path: "/assets/logos/gemini.png",
    },
    {
      id: 4,
      name: "MongoDB",
      path: "/assets/logos/mongo.png",
    },
    {
      id: 5,
      name: "Pinecone DB",
      path: "/assets/logos/pine.png",
    },
  ],
}
];

export const mySocials = [  
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/soham-bhandary-a77988266/",
    icon: "/assets/socials/linkedIn.svg",
  }
  
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
