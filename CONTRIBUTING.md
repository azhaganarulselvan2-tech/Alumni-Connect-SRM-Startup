# Contributing to Alumni Connect

Thank you for your interest in contributing to Alumni Connect! This document provides guidelines and information about how to contribute to the project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
4. Follow the project structure and coding standards

## Project Structure

```
Alumni-Connect-SRM-Startup/
├── frontend/           # React + Vite frontend application
│   ├── src/
│   │   ├── pages/     # Page components
│   │   ├── components/ # Reusable components
│   │   ├── context/   # Context providers
│   │   ├── services/  # External services
│   │   └── styles/    # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/           # Express.js backend server
│   ├── api/           # API routes
│   ├── services/      # Business logic
│   ├── config/        # Configuration
│   └── server.js
└── README.md
```

## Development Setup

### Prerequisites
- Node.js 16+ and npm 8+
- Firebase project setup
- OpenAI API key (for chatbot features)

### Installation

```bash
# Frontend setup
cd frontend
npm install

# Backend setup
cd ../backend
npm install
```

### Environment Variables

Create `.env` files in frontend and backend directories with necessary Firebase and API keys.

### Running Development Servers

```bash
# Terminal 1: Backend
cd backend
npm start

# Terminal 2: Frontend
cd frontend
npm run dev
```

## Code Standards

- Use ES6+ syntax
- Follow React hooks conventions
- Maintain component folders with index exports
- Use meaningful variable and function names
- Add comments for complex logic
- Use DaisyUI classes for styling

## Features

### Courses Module
- 5 specialization tracks
- 40 career-focused courses
- 3 progression levels (Beginner, Intermediate, Advanced)
- External course links integration
- Admin roadmap management

### Other Features
- Alumni directory
- Event management
- Mentorship program
- Fundraising campaigns
- Achievement tracking
- Real-time chat
- Chatbot assistance

## Commit Guidelines

- Write clear commit messages describing what changed and why
- Use present tense ("Add feature" not "Added feature")
- Reference issues when applicable
- Keep commits focused on single changes

## Pull Request Process

1. Update README.md with any new features or changes
2. Ensure all tests pass locally
3. Create a clear PR description
4. Request review from maintainers
5. Address review feedback promptly

## Report Issues

Please use GitHub Issues to report bugs or suggest features. Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, DaisyUI, Framer Motion
- **Backend**: Express.js, Firebase Admin SDK
- **Database**: Cloud Firestore
- **Authentication**: Firebase Auth
- **Hosting**: Firebase Hosting

## Questions?

Feel free to open an issue or reach out through GitHub discussions.

Happy contributing! 🎓