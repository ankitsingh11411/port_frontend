const projects = [
  {
    title: 'My Developer Portfolio',
    description:
      'This portfolio website is interactive and minimal built with React Vite, Ant Design, and Framer Motion, offering a sleek, dynamic UI with smooth animations. It features reusable card and modal components for modularity and maintainability, along with floating icons for quick access to key links. The dark mode/light mode toggle ensures a customizable user experience. On the backend, Express.js, MongoDB, and JWT provide secure authentication and efficient data handling, forming a robust MERN stack implementation. Integrated with Nodemailer, the portfolio not only sends me email notifications for messages but also delivers an automated greeting email to users. Deployed on Vercel for speed, reliability, and high performance this project highlights my expertise in full-stack development, UI engineering, and seamless interactivity complying with all the modern market demands.',
    githubLink: 'https://github.com/ankitsingh11411/port_frontend',
    deployedLink: 'https://port-frontend-one.vercel.app/',
    image: '/portimage.png',
    skills: [
      'React',
      'Vite',
      'Framer Motion',
      'MongoDB',
      'Express.js',
      'Ant Design',
      'Nodemailer',
      'github',
      'vercel',
      'react router',
    ],
  },
  {
    title: 'Chess by Asr',
    description:
      'This interactive Chess game is built using React Vite, offering a seamless and responsive gaming experience. The UI is minimal yet engaging, featuring smooth animations powered by Framer Motion. The application utilizes Ant Design for modern, reusable components, ensuring a clean and structured design. Game scores are stored persistently using localStorage, allowing users to keep track of their performance across sessions. React Router efficiently manages navigation between the home and game pages. Deployed on Vercel, this project ensures high-speed performance and scalability while highlighting my expertise in front-end development, UI engineering, and interactive design.',
    githubLink: 'https://github.com/ankitsingh11411/chess-project',
    deployedLink: 'https://chess-project-asr.vercel.app/',
    image: '/chess.png',
    skills: [
      'React',
      'Vite',
      'Framer Motion',
      'MongoDB',
      'Express.js',
      'Ant Design',
      'javascript',
      'vercel',
      'chess.js',
      'react chessboard',
      'modular css',
    ],
  },
  {
    title: 'Rock Paper Scissor!',
    description:
      'This interactive Rock Paper Scissors game is built using React Vite, offering a seamless and responsive gaming experience. The UI is minimal yet engaging, featuring smooth animations powered by Framer Motion. The application utilizes Ant Design for modern, reusable components, ensuring a clean and structured design. Game scores are stored persistently using localStorage, allowing users to keep track of their performance across sessions. React Router efficiently manages navigation between the home and game pages. Deployed on Vercel, this project ensures high-speed performance and scalability while highlighting my expertise in front-end development, UI engineering, and interactive design.',
    githubLink: 'https://github.com/ankitsingh11411/RPS-play',
    deployedLink: 'https://rockpaperscissor-tau.vercel.app/',
    image: '/rps.png',
    skills: [
      'React',
      'Vite',
      'Framer Motion',
      'MongoDB',
      'Express.js',
      'Ant Design',
      'javascript',
      'vercel',
      'modular css',
    ],
  },
  {
    title: 'Autoglimpse Arena (Frontend)',
    description:
      'A high-performance, modular web application crafted with React and Vite, featuring an intuitive UI for exploring car collections and detailed specifications. The project showcases efficient state management, modern JavaScript practices, and seamless user navigation, all while ensuring lightning-fast load times through Vite’s optimized build process.',
    githubLink: 'https://github.com/ankitsingh11411/ag_project',
    deployedLink: 'https://autoglimpsearena.vercel.app/',
    image: '/agarena.png',
    skills: ['React', 'Vite', 'ESLint'],
  },
  {
    title: 'The Formbot (Frontend)',
    description:
      'An elegant, responsive form builder that empowers users to create, customize, and manage dynamic forms with ease. Built with React and Vite, FormBot excels in delivering a chatbot-like experience for data collection, paired with robust API integrations for seamless backend communication.',
    githubLink: 'https://github.com/ankitsingh11411/formbot_frontend',
    deployedLink: 'https://formbot-frontend-theta.vercel.app/',
    image: '/formbot.png',
    skills: ['React', 'Vite', 'API Integration'],
  },
  {
    title: 'Autoglimpse Admin',
    description:
      'A comprehensive and visually striking admin panel for managing vehicles and operations within the AutoGlimpse ecosystem. Built with React and Tailwind CSS, this dashboard offers responsive design, clean layouts, and advanced tools for effortless data handling and real-time updates.',
    githubLink: 'https://github.com/ankitsingh11411/autoglimpse-admin',
    deployedLink: 'https://autoglimpse-admin.vercel.app/',
    image: '/agadmin.png',
    skills: ['React', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Autoglimpse Backend (User & Admin)',
    description:
      'The backbone of the AutoGlimpse ecosystem, this robust Node.js backend is designed to support both user-facing and admin operations. It includes authentication, data management, and RESTful API endpoints, ensuring secure, scalable, and efficient performance.',
    githubLink: 'https://github.com/ankitsingh11411/ag_backend',
    deployedLink: 'https://github.com/ankitsingh11411/ag_backend',
    image: '/agbackend.png',
    skills: ['Node.js', 'Express', 'Authentication'],
  },

  {
    title: "Gamer's music player",
    description:
      'A sleek and interactive music player built with HTML, CSS, and JavaScript. It features: Dynamic song list with album art and artist details. Play, pause, next, and previous controls. Real-time progress bar with clickable seek functionality. Background blur effect that changes with the song. Smooth animations for an engaging user experience. This player loads and plays music dynamically and provides a modern, responsive UI for a seamless listening experience.',
    githubLink: 'https://github.com/ankitsingh11411/music-player-asr',
    deployedLink: 'https://ankitsingh11411.github.io/music-player-asr/',
    image: '/musicplayer.png',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Rock Paper Scissors!',
    description:
      'A fun and interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. The game includes randomized computer choices for fair play and keeps track of the score using local storage.',
    githubLink: 'https://github.com/ankitsingh11411/RPC-project',
    deployedLink: 'https://ankitsingh11411.github.io/RPC-project/',
    image: '/rpc.png',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Weather Widget',
    description:
      'A sleek and interactive weather widget that fetches real-time weather data using the OpenWeatherMap API.',
    githubLink: 'https://github.com/ankitsingh11411/ASR-weather-app',
    deployedLink: 'https://ankitsingh11411.github.io/ASR-weather-app/',
    image: '/weatherwidget.png',
    skills: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
  },
  {
    title: 'Internet Speed Check',
    description:
      'It allows users to test their internet download and upload speeds in real-time.',
    githubLink: 'https://github.com/ankitsingh11411/internet-speed-vscode',
    deployedLink: 'https://ankitsingh11411.github.io/internet-speed-vscode/',
    image: '/internetspeed.png',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'HTML Admin layout',
    description:
      'This is a simple and responsive dashboard built using HTML and CSS. It features a clean header with navigation and search, a social media bar, and sections for displaying user information, statistics, and actions. The layout includes a textarea for input, a data summary section, and buttons for profile settings and bookmarks. Designed for a minimal yet functional UI, this dashboard is ideal for basic data representation and user interaction.',
    githubLink: 'https://github.com/ankitsingh11411/micro-project-2-cuvette',
    deployedLink: 'https://ankitsingh11411.github.io/micro-project-2-cuvette/',
    image: '/dashlayout.png',
    skills: ['HTML', 'CSS'],
  },
  {
    title: 'Simple Calculator',
    description:
      'This is a basic calculator built using HTML, CSS, and JavaScript. It features a clean and responsive design, allowing users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.',
    githubLink: 'https://github.com/ankitsingh11411/calculator',
    deployedLink: 'https://ankitsingh11411.github.io/calculator/',
    image: '/sc1.png',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    title: 'Simple Calculator 2',
    description:
      'This is a basic calculator built using HTML, CSS, and JavaScript. It features a clean and responsive design, allowing users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator provides instant results with smooth button interactions and a user-friendly interface. Perfect for quick calculations!',
    githubLink: 'https://github.com/ankitsingh11411/cvt-calculator-project',
    deployedLink: 'https://ankitsingh11411.github.io/cvt-calculator-project/',
    image: '/sc2.png',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    title: 'email subscription landing',
    description:
      'A clean and minimal email subscription landing page built with HTML and CSS. It features a bold headline, a brief description, and an email input form for users to subscribe. The design emphasizes simplicity, ensuring a user-friendly experience. The footer includes useful links and social media icons, making it perfect for a newsletter or daily content delivery platform. 📩',
    githubLink: 'https://github.com/ankitsingh11411/micro-project-1',
    deployedLink: 'https://ankitsingh11411.github.io/micro-project-1/',
    image: '/emailsubs.png',
    skills: ['HTML', 'CSS'],
  },
];

export default projects;
