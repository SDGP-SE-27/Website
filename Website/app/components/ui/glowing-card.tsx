"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GridBackgroundProps {
  title: string;
  description: string;
  showAvailability?: boolean;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function GridBackground({
  title,
  description,
  showAvailability = false,
  className,
  icon,
  onClick,
}: GridBackgroundProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "px-8 py-8 rounded-xl relative cursor-pointer shadow-lg hover:shadow-xl hover:shadow-black/20",
        className
      )}
      style={{
        backgroundColor: "rgba(45, 45, 45, 1)",
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    >
      <div
        className="w-3 h-3 rounded-full absolute shadow-[0_0_15px] shadow-current z-10 bg-current"
        style={{
          animation: `
            border-follow 6s linear infinite,
            color-change 6s linear infinite
          `,
        }}
      />
      <div
        className="absolute inset-0 border border-white/10 rounded-xl"
        style={{
          animation: "border-color-change 6s linear infinite",
        }}
      />

      <div className="relative z-20">
        <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-[#e1e1e1]">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        {showAvailability && (
          <div className="available-now text-[#20bb5a] text-sm flex items-center justify-center mt-5">
            <div className="w-2 h-2 bg-[#20bb5a] rounded-full inline-block mr-2 animate-pulse shadow-[0_0_8px_#20bb5a]" />
            Call Now
          </div>
        )}
      </div>
    </motion.div>
  );
}
