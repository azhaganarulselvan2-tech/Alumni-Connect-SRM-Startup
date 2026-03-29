// Courses.jsx - Specialization-based Learning Paths
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Plus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import SpecializationCard from "./components/SpecializationCard";
import LearningPathDiagram from "./components/LearningPathDiagram";
import { courseSpecializations, courseStats } from "./data/specializationsData";

export default function Courses() {
  const { user, profile, role } = useAuth();
  const { currentTheme } = useTheme();
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [showAddRoadmapModal, setShowAddRoadmapModal] = useState(false);

  const selectedSpec = courseSpecializations.find(s => s.id === selectedSpecialization);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary to-secondary text-primary-content py-12 px-4"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <BookOpen size={40} />
              <h1 className="text-4xl font-bold">Course Specializations</h1>
            </div>
            
            {/* Add Roadmap Button - Only for Admins */}
            {role === "admin" && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddRoadmapModal(true)}
                className="btn btn-outline text-primary-content border-primary-content hover:bg-primary-content hover:text-primary flex items-center gap-2"
              >
                <Plus size={20} />
                Add Roadmap
              </motion.button>
            )}
          </div>
          
          <div className="text-center">
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Choose your learning path and progress from beginner to advanced expert in your chosen field
            </p>
            {profile?.name && (
              <p className="text-sm opacity-75 mt-3">Welcome, {profile.name}! 🎓</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {!selectedSpecialization ? (
          // Specialization Selection View
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-base-content mb-3">Choose Your Specialization</h2>
              <p className="text-base-content opacity-70">
                Select the field you're interested in learning and we'll show you the complete learning path
              </p>
            </div>

            {/* Specialization Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {courseSpecializations.map((spec, index) => (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SpecializationCard
                    spec={spec}
                    isSelected={selectedSpecialization === spec.id}
                    onSelect={setSelectedSpecialization}
                  />
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-base-200 rounded-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">{courseStats.totalSpecializations}</div>
                  <div className="text-base-content opacity-70">Specializations Available</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">{courseStats.totalCourses}</div>
                  <div className="text-base-content opacity-70">Total Courses</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">+500</div>
                  <div className="text-base-content opacity-70">Active Students</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // Learning Path View
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Back Button & Title */}
            <div className="mb-8 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSpecialization(null)}
                className="btn btn-outline btn-primary"
              >
                ← Back to Specializations
              </motion.button>
            </div>

            {/* Learning Path Diagram */}
            <AnimatePresence mode="wait">
              <LearningPathDiagram
                key={selectedSpecialization}
                specialization={selectedSpec}
                courses={selectedSpec.courses}
              />
            </AnimatePresence>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-info bg-opacity-10 border-2 border-info rounded-lg p-6">
                <h3 className="text-lg font-bold text-info mb-3">💡 How It Works</h3>
                <ul className="text-sm text-base-content opacity-80 space-y-2">
                  <li>✓ Start with beginner courses to build foundation</li>
                  <li>✓ Progress to intermediate for real-world skills</li>
                  <li>✓ Master advanced topics and best practices</li>
                  <li>✓ Get industry-recognized certification</li>
                </ul>
              </div>

              <div className="bg-success bg-opacity-10 border-2 border-success rounded-lg p-6">
                <h3 className="text-lg font-bold text-success mb-3">🎯 After Completion</h3>
                <ul className="text-sm text-base-content opacity-80 space-y-2">
                  <li>✓ Build portfolio projects</li>
                  <li>✓ Access job opportunities</li>
                  <li>✓ Connect with industry mentors</li>
                  <li>✓ Get career guidance</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Add Roadmap Modal - Only for Admins */}
      <AnimatePresence>
        {showAddRoadmapModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowAddRoadmapModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-base-100 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary text-primary-content p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Add New Roadmap</h2>
                <button
                  onClick={() => setShowAddRoadmapModal(false)}
                  className="btn btn-sm btn-circle btn-ghost text-primary-content hover:bg-primary-content hover:text-primary"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Roadmap Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter roadmap name"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Specialization</span>
                  </label>
                  <select className="select select-bordered select-primary w-full">
                    <option disabled selected>Select specialization</option>
                    {courseSpecializations.map((spec) => (
                      <option key={spec.id} value={spec.id}>{spec.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Total Duration (weeks)</span>
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 24"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Number of Courses</span>
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 8"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Description</span>
                  </label>
                  <textarea
                    placeholder="Describe the learning roadmap"
                    className="textarea textarea-bordered textarea-primary w-full"
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Learning Outcomes (comma-separated)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Master fundamentals, Build projects, Industry skills"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Target Audience</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Beginners, Intermediate developers"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-base-200 p-6 flex gap-3 justify-end border-t border-base-300">
                <button
                  onClick={() => setShowAddRoadmapModal(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Add roadmap logic here
                    setShowAddRoadmapModal(false);
                    alert("Roadmap added successfully! (Backend integration needed)");
                  }}
                  className="btn btn-primary"
                >
                  Add Roadmap
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}