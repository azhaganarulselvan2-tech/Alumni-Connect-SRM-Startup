import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Lock, X, ExternalLink } from "lucide-react";
import { IconWrapper } from "./SvgIcons";
import { courseUrlsMapping } from "../data/courseUrlsMapping";

export default function LearningPathDiagram({ courses, specialization }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  // Group courses by level
  const beginnerCourses = courses.filter(c => c.level === "Beginner");
  const intermediateCourses = courses.filter(c => c.level === "Intermediate");
  const advancedCourses = courses.filter(c => c.level === "Advanced");

  const PathLevel = ({ title, courses, levelIndex, isCompleted }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: levelIndex * 0.2 }}
        className="flex flex-col items-center"
      >
        {/* Level Title */}
        <div className="mb-6">
          <span className={`badge badge-lg font-bold text-base px-4 py-3 ${
            levelIndex === 0 ? "badge-error" :
            levelIndex === 1 ? "badge-warning" :
            "badge-success"
          }`}>
            {title}
          </span>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
          {courses.map((course, idx) => (
            <motion.button
              key={course.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCourse(course)}
              className="bg-base-100 border-2 border-base-300 rounded-lg p-4 hover:border-primary transition-all text-left cursor-pointer active:scale-95"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`flex-shrink-0 ${
                  levelIndex === 0 ? "text-error" :
                  levelIndex === 1 ? "text-warning" :
                  "text-success"
                }`}>
                  <CheckCircle size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base-content text-base leading-tight">{course.title}</h4>
                </div>
              </div>

              <p className="text-sm text-base-content opacity-70 mb-3 leading-relaxed">{course.description}</p>

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs badge badge-ghost">{course.duration}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1">
                {course.skills.slice(0, 2).map((skill, i) => (
                  <span key={i} className="text-xs bg-base-200 text-base-content px-2 py-1 rounded font-medium">
                    {skill}
                  </span>
                ))}
                {course.skills.length > 2 && (
                  <span className="text-xs bg-base-200 text-base-content px-2 py-1 rounded font-medium">
                    +{course.skills.length - 2}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Arrow to Next Level */}
        {levelIndex < 2 && (
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="h-8 flex items-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={32} className="text-primary transform rotate-90" />
              </motion.div>
            </div>
            <span className="text-xs font-semibold text-base-content opacity-60">Next Level</span>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-8 text-primary">
            <IconWrapper icon={specialization.icon} size="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-base-content">
            Your {specialization.name} Learning Path
          </h2>
        </div>
        <p className="text-base-content opacity-70 text-base">
          Progress from beginner to advanced with our structured curriculum
        </p>
      </motion.div>

      {/* Progress Timeline */}
      <div className="relative">
        {/* Vertical line connecting levels */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-error via-warning to-success opacity-30"></div>

        {/* Levels */}
        <div className="relative space-y-12">
          <PathLevel
            title="Beginner Foundation"
            courses={beginnerCourses}
            levelIndex={0}
            isCompleted={false}
          />

          <PathLevel
            title="Intermediate Skills"
            courses={intermediateCourses}
            levelIndex={1}
            isCompleted={false}
          />

          <PathLevel
            title="Advanced Mastery"
            courses={advancedCourses}
            levelIndex={2}
            isCompleted={false}
          />
        </div>
      </div>

      {/* Completion Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-success bg-opacity-10 border-2 border-success rounded-lg p-6 text-center"
      >
        <h3 className="text-lg font-bold text-success mb-2">Complete Your Certification</h3>
        <p className="text-base-content opacity-75 text-base">
          Complete all {courses.length} courses to master {specialization.name}
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-success">{courses.length}</div>
            <div className="text-sm text-base-content opacity-60">Total Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">
              {Math.ceil(courses.reduce((sum, c) => sum + parseInt(c.duration), 0) / courses.length)} weeks
            </div>
            <div className="text-sm text-base-content opacity-60">Avg Duration</div>
          </div>
        </div>
      </motion.div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCourse(null)}
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
                <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="btn btn-sm btn-circle btn-ghost text-primary-content hover:bg-primary-content hover:text-primary"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Course Meta */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-base-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{selectedCourse.duration}</div>
                    <div className="text-xs text-base-content opacity-60">Duration</div>
                  </div>
                  <div className="bg-base-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-warning capitalize">{selectedCourse.level}</div>
                    <div className="text-xs text-base-content opacity-60">Level</div>
                  </div>
                  <div className="bg-base-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-success">{selectedCourse.skills.length}</div>
                    <div className="text-xs text-base-content opacity-60">Skills</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-base-content mb-2">About This Course</h3>
                  <p className="text-base-content opacity-80 leading-relaxed">
                    {selectedCourse.description}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-bold text-base-content mb-3">Skills You'll Learn</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.skills.map((skill, i) => (
                      <span key={i} className="badge badge-lg badge-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Content */}
                <div>
                  <h3 className="text-lg font-bold text-base-content mb-3">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-success flex-shrink-0 mt-1" />
                      <span className="text-base-content">Master the fundamentals of {selectedCourse.title}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-success flex-shrink-0 mt-1" />
                      <span className="text-base-content">Build real-world projects and applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-success flex-shrink-0 mt-1" />
                      <span className="text-base-content">Gain industry-recognized knowledge and practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-success flex-shrink-0 mt-1" />
                      <span className="text-base-content">Get prepared for professional opportunities</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-base-300">
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="btn btn-outline flex-1"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const url = courseUrlsMapping[selectedCourse.id];
                      if (url) {
                        window.open(url, '_blank');
                      } else {
                        alert('Course link not available');
                      }
                    }}
                    className="btn btn-primary flex-1 gap-2"
                  >
                    <ExternalLink size={18} />
                    Go to Website
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}