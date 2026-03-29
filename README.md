# Alumni Connect - SRM University

A modern alumni networking platform built with React and Firebase for SRM Institute of Science & Technology.

## Features

### 🎓 Course Specializations
- **5 Learning Paths**: Web Development, Data Science, Mobile Development, Cloud & DevOps, AI & Machine Learning
- **40+ Courses**: Beginner, Intermediate, and Advanced levels
- **Direct Links**: Connected to Coursera, freeCodeCamp, AWS, Google Cloud, and other platforms
- **Interactive Learning**: Visual learning path diagrams with smooth animations

### 🤝 Community
- Alumni Directory with profiles and connections
- Mentorship matching system
- Events and announcements
- Fundraising initiatives
- Chat and messaging

### 💼 Admin Features
- Add and manage roadmaps
- Edit and delete course content
- View analytics
- Manage user roles

## Tech Stack

**Frontend:**
- React 18
- Vite (Build tool)
- Tailwind CSS + DaisyUI
- Framer Motion (Animations)
- Firebase (Auth & Database)
- React Router v6

**Backend:**
- Express.js
- Node.js
- Firebase Firestore

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Courses/          # Course specializations
│   │   │   ├── Dashboard/        # Main dashboard
│   │   │   ├── Events/           # Events management
│   │   │   ├── Mentorship/       # Mentorship program
│   │   │   └── ...
│   │   ├── components/           # Reusable components
│   │   ├── context/              # Context API (Auth, Theme)
│   │   ├── hooks/                # Custom React hooks
│   │   └── services/             # Firebase services
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── server.js
    ├── api/                      # API routes
    ├── services/                 # Business logic
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js 16+
- NPM or Yarn
- Firebase account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/azhaganarulselvan2-tech/Alumni-Connect-SRM-Startup.git
cd Alumni-Connect-SRM-Startup
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Set up environment variables**

Create `.env` files in both `backend/` and `frontend/` directories:

**backend/.env**
```
PORT=5000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
```

**frontend/.env**
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Running the Application

1. **Start the backend**
```bash
cd backend
npm start
```
Backend will run on `http://localhost:5000`

2. **Start the frontend** (in a new terminal)
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

## Features Details

### Course Specializations

Students and alumni can explore 5 specialized learning paths:

1. **Web Development** - Full-stack development from basics to advanced
2. **Data Science** - Python, ML, DL, NLP, and more
3. **Mobile Development** - Cross-platform mobile app development
4. **Cloud & DevOps** - AWS, Azure, Docker, Kubernetes
5. **AI & Machine Learning** - Advanced AI and ML techniques

Each specialization includes:
- 8 carefully curated courses
- Progressive difficulty levels
- Real-world project opportunities
- Direct links to official course platforms

## Roadmap

- [ ] User authentication with OAuth
- [ ] Enrollment tracking and progress management
- [ ] Certificate generation
- [ ] Job board integration
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] AI-powered course recommendations
- [ ] Peer programming sessions

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@alumniconnect.com or open an issue in the repository.

## Acknowledgments

- SRM Institute of Science & Technology
- Course content partners (Coursera, freeCodeCamp, AWS, etc.)
- The open-source community

---

**Made with ❤️ for the SRM Alumni Community**
