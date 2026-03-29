// Specialization tracks with progression levels
export const courseSpecializations = [
  {
    id: "web-dev",
    name: "Web Development",
    icon: "web",
    description: "Learn full-stack web development from basics to production",
    color: "from-blue-500 to-cyan-500",
    courses: [
      {
        id: "web-1",
        title: "HTML & CSS Fundamentals",
        level: "Beginner",
        duration: "4 weeks",
        skills: ["HTML5", "CSS3", "Responsive Design"],
        description: "Master the building blocks of web pages"
      },
      {
        id: "web-2",
        title: "JavaScript Essentials",
        level: "Beginner",
        duration: "6 weeks",
        skills: ["JavaScript", "DOM", "Events"],
        description: "Learn interactive web programming"
      },
      {
        id: "web-3",
        title: "React.js Framework",
        level: "Intermediate",
        duration: "8 weeks",
        skills: ["React", "Components", "Hooks", "State Management"],
        description: "Build modern interactive user interfaces"
      },
      {
        id: "web-4",
        title: "Node.js & Express",
        level: "Intermediate",
        duration: "6 weeks",
        skills: ["Node.js", "Express", "REST APIs", "Middlewares"],
        description: "Develop backend services and APIs"
      },
      {
        id: "web-5",
        title: "Database Design",
        level: "Intermediate",
        duration: "5 weeks",
        skills: ["SQL", "MongoDB", "Database Design"],
        description: "Master data persistence and queries"
      },
      {
        id: "web-6",
        title: "Full-Stack Project",
        level: "Advanced",
        duration: "10 weeks",
        skills: ["Full-Stack", "DevOps", "Deployment"],
        description: "Build and deploy a complete web application"
      },
      {
        id: "web-7",
        title: "Performance & Security",
        level: "Advanced",
        duration: "6 weeks",
        skills: ["Optimization", "Security", "SSL/TLS"],
        description: "Secure and optimize production applications"
      },
      {
        id: "web-8",
        title: "Advanced Architectures",
        level: "Advanced",
        duration: "8 weeks",
        skills: ["Microservices", "Scalability", "Cloud"],
        description: "Design scalable enterprise systems"
      }
    ]
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: "data",
    description: "Learn data analysis, visualization, and machine learning",
    color: "from-purple-500 to-pink-500",
    courses: [
      {
        id: "ds-1",
        title: "Python for Data Science",
        level: "Beginner",
        duration: "5 weeks",
        skills: ["Python", "NumPy", "Pandas"],
        description: "Python programming for data analysis"
      },
      {
        id: "ds-2",
        title: "Data Visualization",
        level: "Beginner",
        duration: "4 weeks",
        skills: ["Matplotlib", "Seaborn", "Plotly"],
        description: "Create impactful data visualizations"
      },
      {
        id: "ds-3",
        title: "Statistics & Probability",
        level: "Intermediate",
        duration: "6 weeks",
        skills: ["Statistics", "Probability", "Hypothesis Testing"],
        description: "Statistical foundations for data science"
      },
      {
        id: "ds-4",
        title: "Machine Learning Basics",
        level: "Intermediate",
        duration: "8 weeks",
        skills: ["Scikit-learn", "Regression", "Classification"],
        description: "Introduction to machine learning algorithms"
      },
      {
        id: "ds-5",
        title: "Deep Learning",
        level: "Intermediate",
        duration: "8 weeks",
        skills: ["TensorFlow", "Neural Networks", "CNN"],
        description: "Neural networks and deep learning"
      },
      {
        id: "ds-6",
        title: "NLP & Text Analysis",
        level: "Advanced",
        duration: "7 weeks",
        skills: ["NLP", "NLTK", "Transformers"],
        description: "Process and analyze text data"
      },
      {
        id: "ds-7",
        title: "Computer Vision",
        level: "Advanced",
        duration: "8 weeks",
        skills: ["OpenCV", "Image Processing", "Object Detection"],
        description: "Work with images and video data"
      },
      {
        id: "ds-8",
        title: "Production ML Systems",
        level: "Advanced",
        duration: "8 weeks",
        skills: ["MLOps", "Model Deployment", "Monitoring"],
        description: "Deploy ML models to production"
      }
    ]
  },
  {
    id: "mobile-dev",
    name: "Mobile Development",
    icon: "mobile",
    description: "Build cross-platform mobile applications",
    color: "from-green-500 to-emerald-500",
    courses: [
      {
        id: "mobile-1",
        title: "Mobile Basics",
        level: "Beginner",
        duration: "4 weeks",
        skills: ["Mobile UI", "UX Principles", "App Design"],
        description: "Mobile development fundamentals"
      },
      {
        id: "mobile-2",
        title: "React Native Intro",
        level: "Beginner",
        duration: "6 weeks",
        skills: ["React Native", "JavaScript", "Components"],
        description: "Cross-platform mobile with React Native"
      },
      {
        id: "mobile-3",
        title: "Native iOS Development",
        level: "Intermediate",
        duration: "8 weeks",
        skills: ["Swift", "iOS SDK", "UIKit"],
        description: "Native iOS app development"
      },
      {
        id: "mobile-4",
        title: "Native Android Development",
        level: "Intermediate",
        duration: "8 weeks",
        skills: ["Kotlin", "Android SDK", "Jetpack"],
        description: "Native Android app development"
      },
      {
        id: "mobile-5",
        title: "Flutter Framework",
        level: "Intermediate",
        duration: "7 weeks",
        skills: ["Flutter", "Dart", "Cross-platform"],
        description: "Beautiful apps with Flutter"
      },
      {
        id: "mobile-6",
        title: "Mobile Backend",
        level: "Advanced",
        duration: "5 weeks",
        skills: ["Firebase", "REST APIs", "Real-time DB"],
        description: "Connect mobile apps to backend services"
      },
      {
        id: "mobile-7",
        title: "Performance & Testing",
        level: "Advanced",
        duration: "6 weeks",
        skills: ["Testing", "Optimization", "Debugging"],
        description: "Test and optimize mobile apps"
      },
      {
        id: "mobile-8",
        title: "App Store Deployment",
        level: "Advanced",
        duration: "4 weeks",
        skills: ["App Store", "Publishing", "CI/CD"],
        description: "Deploy apps to app stores"
      }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    icon: "cloud",
    description: "Master cloud platforms and DevOps practices",
    color: "from-orange-500 to-red-500",
    courses: [
      {
        id: "cloud-1",
        title: "Cloud Computing Basics",
        level: "Beginner",
        duration: "4 weeks",
        skills: ["Cloud Concepts", "Infrastructure", "Services"],
        description: "Introduction to cloud computing"
      },
      {
        id: "cloud-2",
        title: "AWS Fundamentals",
        level: "Beginner",
        duration: "6 weeks",
        skills: ["EC2", "S3", "IAM", "VPC"],
        description: "AWS core services and architecture"
      },
      {
        id: "cloud-3",
        title: "Docker & Containers",
        level: "Intermediate",
        duration: "5 weeks",
        skills: ["Docker", "Containerization", "Images"],
        description: "Containerize applications with Docker"
      },
      {
        id: "cloud-4",
        title: "Kubernetes Orchestration",
        level: "Intermediate",
        duration: "7 weeks",
        skills: ["Kubernetes", "Orchestration", "Deployment"],
        description: "Manage containers at scale"
      },
      {
        id: "cloud-5",
        title: "CI/CD Pipelines",
        level: "Intermediate",
        duration: "5 weeks",
        skills: ["Jenkins", "GitLab CI", "Automation"],
        description: "Automated testing and deployment"
      },
      {
        id: "cloud-6",
        title: "Infrastructure as Code",
        level: "Advanced",
        duration: "6 weeks",
        skills: ["Terraform", "CloudFormation", "IaC"],
        description: "Manage infrastructure through code"
      },
      {
        id: "cloud-7",
        title: "Monitoring & Logging",
        level: "Advanced",
        duration: "5 weeks",
        skills: ["Prometheus", "ELK", "Observability"],
        description: "Monitor and troubleshoot systems"
      },
      {
        id: "cloud-8",
        title: "Advanced DevOps",
        level: "Advanced",
        duration: "8 weeks",
        skills: ["Security", "Scaling", "Architecture"],
        description: "Enterprise-grade DevOps practices"
      }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Advanced ML",
    icon: "ai",
    description: "Deep dive into artificial intelligence and advanced machine learning",
    color: "from-indigo-500 to-purple-500",
    courses: [
      {
        id: "ai-1",
        title: "AI Fundamentals",
        level: "Beginner",
        duration: "6 weeks",
        skills: ["AI Concepts", "Problem Solving", "Search"],
        description: "Foundations of artificial intelligence"
      },
      {
        id: "ai-2",
        title: "Machine Learning Theory",
        level: "Intermediate",
        duration: "7 weeks",
        skills: ["Supervised Learning", "Unsupervised", "Algorithms"],
        description: "ML algorithms and theory"
      },
      {
        id: "ai-3",
        title: "Neural Networks",
        level: "Intermediate",
        duration: "8 weeks",
        skills: ["Backpropagation", "Optimization", "Architecture"],
        description: "Understanding neural networks"
      },
      {
        id: "ai-4",
        title: "Reinforcement Learning",
        level: "Intermediate",
        duration: "7 weeks",
        skills: ["Q-Learning", "Policy Gradient", "DQN"],
        description: "Learning through interaction"
      },
      {
        id: "ai-5",
        title: "Advanced NLP",
        level: "Advanced",
        duration: "8 weeks",
        skills: ["Transformers", "BERT", "GPT"],
        description: "State-of-the-art NLP models"
      },
      {
        id: "ai-6",
        title: "Computer Vision Advanced",
        level: "Advanced",
        duration: "8 weeks",
        skills: ["Vision Transformers", "3D Vision", "GAN"],
        description: "Advanced computer vision techniques"
      },
      {
        id: "ai-7",
        title: "Generative AI",
        level: "Advanced",
        duration: "7 weeks",
        skills: ["GANs", "Diffusion Models", "LLMs"],
        description: "Creating and training generative models"
      },
      {
        id: "ai-8",
        title: "AI Ethics & Production",
        level: "Advanced",
        duration: "6 weeks",
        skills: ["Ethics", "Fairness", "Production Systems"],
        description: "Responsible AI deployment"
      }
    ]
  }
];

export const courseStats = {
  totalSpecializations: 5,
  totalCourses: 40,
  averageDuration: "6 weeks per course"
};