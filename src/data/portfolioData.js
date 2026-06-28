export const personalInfo = {
  name: "Aniket Mishra",
  title: "Full Stack Developer & AI/ML Engineer",
  subtitle: "Building intelligent systems & scalable web applications",
  email: "beinganiket07@gmail.com",
  phone: "+977-9808128142",
  github: "https://github.com/Aniketcodeworld",
  linkedin: "https://www.linkedin.com/in/aniket-mishra-007406278/",
  leetcode: "https://leetcode.com/",
  bio: "Final-year BTech student at SRM University AP specializing in Big Data Analytics. I build end-to-end deep learning systems, full-stack web applications, and data-driven solutions — from autonomous driving perception systems to MERN-stack platforms.",
};

export const skills = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "C", "C++", "SQL"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Context API", "Axios"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT Auth"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  { category: "ML / DL", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Transfer Learning", "CNN"] },
  { category: "Tools", items: ["Git", "GitHub", "Jupyter", "Google Colab", "Power BI", "Swagger"] },
];

export const projects = [
  {
    id: 1,
    title: "Hybrid Autonomous Driving Perception System",
    subtitle: "YOLOv8 + DeepLabV3+",
    period: "Apr 2026 – May 2026",
    github: "https://github.com/Aniketcodeworld",
    tags: ["Python", "PyTorch", "YOLOv8", "OpenCV", "CUDA"],
    category: "AI/ML",
    highlight: "95.23% pixel accuracy · 0.6808 mIoU",
    description: "End-to-end autonomous driving perception system combining real-time object detection with semantic segmentation for context-aware scene understanding.",
    bullets: [
      "Integrated YOLOv8 real-time object detection with DeepLabV3+ semantic segmentation for comprehensive scene analysis.",
      "Engineered complete deep learning workflows: Mosaic/MixUp augmentation, AMP, AdamW, cosine LR scheduling.",
      "DeepLabV3+ with ResNet-50 backbone, ASPP, custom decoder — pixel classification across 13 driving scene classes.",
      "Achieved 95.23% pixel accuracy and 0.6808 mIoU outperforming baseline models.",
    ],
    color: "#00D4FF",
  },
  {
    id: 2,
    title: "Brain Tumor Detection",
    subtitle: "Deep Learning CNN Ensemble",
    period: "Dec 2025",
    github: "https://github.com/Aniketcodeworld",
    tags: ["TensorFlow", "Keras", "Transfer Learning", "CNN", "Python"],
    category: "AI/ML",
    highlight: "94.7% classification accuracy",
    description: "Automated brain tumor classification system using transfer learning to classify MRI scans into Glioma, Meningioma, Pituitary Tumor, and No Tumor.",
    bullets: [
      "Evaluated VGG16, VGG19, ResNet50, InceptionV3, DenseNet121, MobileNetV2 with hyperparameter tuning.",
      "Custom feature-level ensemble: VGG19 + ResNet50 via feature fusion, GAP, Batch Norm, Dropout.",
      "Achieved 94.7% accuracy, outperforming all individual pretrained models.",
      "Full pipeline: MRI preprocessing, augmentation, checkpointing, early stopping, F1/Confusion Matrix evaluation.",
    ],
    color: "#7C3AED",
  },
  {
    id: 3,
    title: "Food Ordering Web Application",
    subtitle: "React + Spring Boot + MySQL",
    period: "May 2026",
    github: "https://github.com/Aniketcodeworld",
    tags: ["React", "Spring Boot", "Java 17", "MySQL", "JWT"],
    category: "Full Stack",
    highlight: "Full-stack with Admin & User panels",
    description: "Full-stack Food Ordering platform with separate User and Admin panels, secure auth, RESTful APIs, and admin analytics dashboard.",
    bullets: [
      "User & Admin panels: browse restaurants, manage carts, place orders, track order history.",
      "Spring Security + JWT with role-based access control for users and admins.",
      "RESTful APIs for restaurant management, menu handling, cart operations, order processing.",
      "Email notifications, Swagger API docs, admin analytics dashboard, activity logging.",
    ],
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Bike Rental Management System",
    subtitle: "MERN Stack",
    period: "Jun 2026 – Present",
    github: "https://github.com/Aniketcodeworld",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary"],
    category: "Full Stack",
    highlight: "Production-ready platform",
    description: "Production-ready Bike Rental Management Platform streamlining bike discovery, reservation management, and rental operations.",
    bullets: [
      "JWT authentication, RBAC, Cloudinary image storage, real-time bike availability tracking.",
      "Scalable REST APIs, optimized MongoDB schemas for bike inventory, bookings, payments, reviews.",
      "Advanced search, filtering, booking status management, and admin dashboards.",
    ],
    color: "#10B981",
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    subtitle: "Hybrid ML + Power BI",
    period: "Jun 2025 – Jul 2025",
    github: "https://github.com/Aniketcodeworld",
    tags: ["Python", "Scikit-learn", "Power BI", "Pandas", "Collaborative Filtering"],
    category: "Data Science",
    highlight: "Hybrid content + collaborative filtering",
    description: "Hybrid movie recommender integrating content-based and collaborative filtering with interactive Power BI dashboards.",
    bullets: [
      "User–item interaction matrices with cosine similarity and matrix factorization.",
      "Hybrid content-based + collaborative filtering for enhanced accuracy.",
      "Interactive Power BI dashboards: genre distribution, user engagement, top-N recommendations.",
    ],
    color: "#EC4899",
  },
];

export const experience = [
  {
    company: "HCLTech",
    location: "Vijayawada, India",
    role: "Java Full Stack Intern Trainee",
    period: "Feb 2026 – May 2026",
    description: "Completed intensive training and gained hands-on experience developing and testing web applications using Spring Boot and modern full-stack development practices.",
    tags: ["Spring Boot", "Java", "Full Stack"],
  },
  {
    company: "Edunet Foundation",
    location: "Gurugram, India",
    role: "Frontend Development Intern",
    period: "Jun 2024 – Aug 2024",
    description: "Completed frontend development training and gained hands-on experience building responsive web applications using HTML, CSS, JavaScript, and React.js.",
    tags: ["React.js", "HTML/CSS", "JavaScript"],
  },
];

export const education = [
  {
    degree: "Bachelor's of Technology — CSE",
    institution: "SRM University AP",
    period: "2022 – 2026",
    score: "CGPA: 8.34 / 10",
    detail: "Specialization: Big Data Analytics",
  },
  {
    degree: "Class 12th — Science",
    institution: "Kathmandu Model College",
    period: "2021",
    score: "GPA: 3.57 / 4",
    detail: "+2 Science",
  },
  {
    degree: "Class 10th",
    institution: "Nightingale International Secondary School",
    period: "2019",
    score: "GPA: 3.60 / 4",
    detail: "",
  },
];

export const certifications = [
  { title: "Oracle Certified Professional: Java SE 11 Developer", issuer: "Oracle University" },
  { title: "AWS Cloud Technical Essentials", issuer: "Amazon Web Services (Coursera)" },
  { title: "230+ LeetCode Problems Solved", issuer: "DSA & SQL", link: "https://leetcode.com/" },
];
