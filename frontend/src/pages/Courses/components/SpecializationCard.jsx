import React from "react";
import { motion } from "framer-motion";
import { IconWrapper } from "./SvgIcons";

export default function SpecializationCard({ spec, isSelected, onSelect }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => onSelect(spec.id)}
      className={`p-6 rounded-xl cursor-pointer transition-all border-2 ${
        isSelected
          ? "border-primary bg-primary bg-opacity-10 shadow-lg"
          : "border-base-300 bg-base-100 hover:border-primary"
      }`}
    >
      <div className="mb-3">
        <IconWrapper icon={spec.icon} size="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold text-base-content mb-2">{spec.name}</h3>
      <p className="text-sm text-base-content opacity-70">{spec.description}</p>
      <div className="mt-4 pt-4 border-t border-base-200">
        <span className="badge badge-primary">{spec.courses.length} Courses</span>
      </div>
    </motion.div>
  );
}