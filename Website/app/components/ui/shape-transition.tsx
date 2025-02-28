"use client";
import { motion } from "framer-motion";

interface ShapeTransitionProps {
  onAnimationComplete?: () => void; // Callback function when animation completes
}

export function ShapeTransition({ onAnimationComplete }: ShapeTransitionProps) {
  return (
    <motion.div
      className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center text-transparent"
      animate={{
        scale: [0, 0.5, 1, 1.5, 2],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["50%", "50%", "0%", "50%", "50%"],
        backgroundColor: [
          "#000000",
          "#000000",
          "#000000",
          "#000000",
          "#ffffff",
        ],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
      onAnimationComplete={onAnimationComplete}
    />
  );
}
