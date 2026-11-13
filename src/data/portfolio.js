/* ============================================================
 * portfolio.js — Central source of truth for portfolio content.
 * ============================================================ */

const portfolio = {
  /* ── Personal & Branding ────────────────────────────────── */
  brandName: 'Swafee.',
  name: 'Muhammed Swafee A V',
  role: 'MERN Stack Developer',
  title: 'Frontend Web Developer',
  supportingRole:
    'B.Tech IT · College of Engineering Thalassery · 2027',
  location: 'Kozhikode, Kerala, India',
  email: 'mohdzwafee128@gmail.com',

  /* ── Links ──────────────────────────────────────────────── */
  linkedin: 'https://linkedin.com/in/muhammed-swafee',
  github: 'https://github.com/muhdzwafee128',
  resumePath: '/resume.pdf',

  /* ── Hero ───────────────────────────────────────────────── */
  heroDescription:
  'Full-stack developer building role-based web apps with React, Node.js and MongoDB, from a deployed campus platform to an ML-based security tool.',
  /* ── About (Single Concise Paragraph) ───────────────────── */
  about:
  "I'm a B.Tech Information Technology student (2027) at College of Engineering Thalassery who builds full-stack web applications with the MERN stack. I built and deployed the E-Campus Approval System, a role-based approval platform with six user roles, real-time tracking and QR-verified PDFs, and I'm building NetrIQ, a machine-learning network intrusion detection system. As IEDC Community Lead, I've coordinated the HACKATLY 3.0 and 4.0 national hackathons.",

  /* ── What I Do / Focus Areas  ────────── */
  focusAreas: [
    {
      id: '01',
      title: 'Web Development',
      subtitle: 'Responsive, functional and user-focused web applications',
      description:
        'Building responsive, functional and user-focused websites and web applications with clean architecture and modern JavaScript frameworks. Open to freelance web development opportunities, internships and frontend roles.',
    },
    {
      id: '02',
      title: 'Product & Startup Building',
      subtitle: 'Cybersecurity & intelligent detection systems',
      description:
        'Building and developing NetrIQ, an AI-adaptive cybersecurity and network security product intended for organizations. Actively under technical development and research.',
    },
    {
      id: '03',
      title: 'UI Implementation',
      subtitle: 'Modern, accessible design-to-code execution',
      description:
        'Turning design concepts into responsive, accessible and functional user interfaces using modern frontend technologies with high attention to typography, spacing and usability.',
    },
    {
      id: '04',
      title: 'Community & Mentoring',
      subtitle: 'Tech community leadership and hackathons',
      description:
        'Contributing to technology communities, supporting student developers, mentoring, networking and organizing national-level technical hackathons and workshops at college level.',
    },
  ],

  /* ── Work / Projects ────────────────────────────────────── */
  projects: [
    {
      title: 'E-Campus Approval System',
      status: 'Completed & Deployed',
      subtitle: 'Campus Workflow Automation Platform',
      shortDescription:
        'A full-stack campus approval management platform that digitizes hierarchical permission requests and approval workflows for educational institutions.',
      fullDescription:
        'Replaces paper-based permission and leave requests with one digital workflow. A full-stack campus approval management platform that digitizes hierarchical permission requests and approval workflows for educational institutions. Provides role-based access across students, tutors, HODs, principals, and administrative office staff with real-time status tracking, automated PDF generation, and QR verification.',
      image: '', // Screenshot path can be configured here in public/projects/ when available
      technologies: [
        'MERN Stack',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Socket.IO',
        'PDF Generation',
        'QR Verification',
      ],
      features: [
        'Multi-level hierarchical permission approval workflow (Tutor → HOD → Principal).',
        'JWT authentication supporting six distinct user roles with strict role-based access control.',
        'Real-time request tracking and live status updates with Socket.IO.',
        'Automated PDF document generation with embedded QR-code verification for institutional audit.',
      ],
      githubUrl: 'https://github.com/muhdzwafee128/e-campus-approval',
      demoUrl: '', // Add live demo URL here when available
      additionalDetails:
        'Deployed and actively utilized across campus for student permission and leave management.',
    },
    {
      title: 'NetrIQ',
      status: 'In Development',
      subtitle: 'AI-Adaptive Network Intrusion Detection System',
      shortDescription:
        'An AI-adaptive network security product designed to detect suspicious network activity and identify potential intrusions using machine learning.',
      fullDescription:
        'An AI-adaptive network security product that detects suspicious network activity using machine learning. Ensembles trained on benchmark cybersecurity datasets classify traffic features and flag anomalous behavior.',
      image: '', // Screenshot path can be configured here in public/projects/ when available
      technologies: [
        'Cybersecurity',
        'Network Security',
        'Artificial Intelligence',
        'Python',
        'FastAPI',
        'MongoDB',
        'Machine Learning',
      ],
      features: [
        'Two-layer architecture combining signature detection and machine learning anomaly analysis.',
        'Ensemble classifiers integrating Random Forest, XGBoost, and LightGBM models.',
        'Trained and evaluated on CIC-IDS2017, NSL-KDD, and UNSW-NB15 benchmark datasets.',
        'FastAPI service layer that serves model predictions on network traffic features.',
      ],
      githubUrl: 'https://github.com/Abhilash-C-K/NETRIQ-LEARN',
      demoUrl: '', // Add live demo URL here when available
      additionalDetails:
        'Trained on standard benchmark cybersecurity datasets. Currently under active engineering development as an enterprise-grade network security solution.',
    },
  ],

  /* ── Experience (Neeraj Rajeev inspired) ────────────────── */
  experience: [
    {
      role: 'Community Lead',
      organization: 'IEDC CETLY / College of Engineering Thalassery',
      orgUrl: '', // Configurable organization link
      workMode: 'On-site / Hybrid',
      period: 'Aug 2024 – Present',
      responsibilities: [
        'Supporting and growing the student technology community through hands-on project initiatives.',
        'Organized HACKATLY 3.0 (48-hour, Feb 2025) and HACKATLY 4.0 (March 2026, Agnitus 2026) national hackathons.',
        'Encouraging student participation in innovation, startup development, and open-source activities.',
        'Connecting students with technical opportunities, mentorship, and cross-chapter collaborations.',
      ],
      skills: [
        'Community Building',
        'Leadership',
        'Event Management',
        'Communication',
        'Collaboration',
        'Mentoring',
      ],
    },
  ],

  /* ── Technical Stack / Skills (Exactly 12 Technologies) ─── */
  skills: [
    'JavaScript',
    'React.js',
    'Python',
    'Node.js',
    'Express.js',
    'FastAPI',
    'MongoDB',
    'HTML5',
    'CSS3',
    'Git',
    'Docker',
    'Figma',
  ],

  /* ── Recognition & Achievements ─────────────────────────── */
  recognition: [
    {
      title: 'Hackatly 3.0',
      role: 'Core Coordinator',
      organization: 'IEDC CETLY / College of Engineering Thalassery',
      year: '2025',
      description:
        'Core coordination of the 48-hour national-level hackathon connecting student developers with hands-on problem statements.',
    },
    {
      title: 'Hackatly 4.0',
      role: 'Core Coordinator',
      organization: 'IEDC CETLY / College of Engineering Thalassery',
      year: '2026',
      description:
        'Coordinated national-level hackathon at Agnitus 2026 conducted in hybrid online and offline modes.',
    },
    {
      title: 'NASA International Space Apps Challenge',
      role: 'Participant',
      organization: 'NASA International Space Apps Challenge',
      year: '2024',
      description:
        'Participated in the global hackathon solving real-world challenges using NASA open-source data.',
    },
    {
      title: 'Community Leadership',
      role: 'Community Lead',
      organization: 'IEDC CETLY',
      year: '2024 – Present',
      description:
        'Leading community development, technical workshops, hackathons, and fostering innovation among student developers.',
    },
  ],

  /* ── Contact Section ────────────────────────────────────── */
  contactHeadline: "LET'S WORK TOGETHER.",
  contactSupportingText:
    "I'm always open to exciting projects, freelance opportunities, internships and collaborations. If you have an idea or would like to connect, feel free to reach out.",

  /* ── Footer ─────────────────────────────────────────────── */
  footerText: '© 2026 Muhammed Swafee A V. All rights reserved.',
};

export default portfolio;
