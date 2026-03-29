// src/App.jsx
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import { initAudio } from "./utils/notifications";

// Pages
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Directory from "./pages/Directory/Directory";
import Events from "./pages/Events/Events";
import Mentorship from "./pages/Mentorship/Mentorship";
import Fundraising from "./pages/Fundraising/Fundraising";
import Newsletter from "./pages/Newsletter/Newsletter";
import AuthPage from "./pages/Auth/Auth";
import Payments from "./pages/Payments/Payments";
import Announcements from "./pages/Announcement/Announcement";
import Chatbot from "./pages/Chatbot/Chatbot";
import Setting from "./pages/Settings/Settings";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Achievement from "./pages/Achievement/Achievement";
import Chat from "./pages/Chat/Chat";
import EventDetails from "./pages/EventDetails/EventDetails";
import UserProfile from "./pages/UserProfile/UserProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Credits from "./pages/Credits/Credits";
import Courses from "./pages/Courses/Courses";

export default function App() {
  // Initialize audio context on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      initAudio();
      // Remove listeners after first interaction
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  return (
    <>
      {/* Global Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 80,
          right: 20,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--fallback-b1,oklch(var(--b1)/1))',
            color: 'var(--fallback-bc,oklch(var(--bc)/1))',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.2)',
            border: '1px solid rgba(0,0,0,0.1)',
            maxWidth: '400px',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <Navbar />
      <main>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<AuthPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Main Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/fundraising" element={<Fundraising />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
    </>
  );
}