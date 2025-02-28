"use client";

import React, { ElementType, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ShapeTransition } from "./shape-transition";

interface TextEffectProps {
  children: string;
  per?: "char" | "word"; // rendering of the string
  preset?: "fade" | "slide" | "stagger"; // rendering style
  className?: string; // additional styling
  reverseScroll?: boolean; //
  as?: ElementType; //
  imageLoad?: boolean;
}

export function TextEffect({
  children,
  per = "char",
  preset = "fade",
  className = "",
  reverseScroll = false,
  as: Component = "div",
  imageLoad = false,
}: TextEffectProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    // checking if the element is in view
    margin: "-100px",
    amount: "all",
  });

  const [showImage, setShowImage] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false); // Track text visibility

  const lines = children.split("\n").map((line) => line.trim()); // splitting the string into lines and trimming the each new line
  const items = lines.map(
    (line) => (per === "char" ? line.split("") : line.split(" ")) // further splitting the string into characters or words
  );

  const animations = {
    // setting the fade effect
    fade: {
      initial: { opacity: 0, y: 20 }, // setting the initially rendered state
      animate: { opacity: 1, y: 0 }, // setting the animate hand how the text is turned visible
      exit: { opacity: 0, y: -20 }, // setting the exit state
      transition: { duration: 0.8 }, // setting the transition duration
    },
    // setting the slide effect
    slide: {
      initial: { x: -50, opacity: 0 }, // setting the initial state
      animate: { x: 0, opacity: 1 }, // setting the animate state
      exit: { x: 50, opacity: 0 }, // setting the exit state
      transition: { duration: 1, ease: "easeOut" }, // setting the transition
    },
    // setting the stagger effect
    stagger: {
      initial: { opacity: 0, y: 30, scale: 0.9 }, // setting the initial state
      animate: { opacity: 1, y: 0, scale: 1 }, // setting the animate state
      exit: { opacity: 0, y: -30, scale: 0.9 }, // setting the exit state
      transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }, // setting the transition
    },
  };

  useEffect(() => {
    if (!imageLoad) {
      // If imageLoad is false, show text immediately without delay
      setIsTextVisible(true);
    }
  }, [imageLoad]);

  return (
    <Component
      ref={ref}
      className={`flex flex-col items-center space-y-4 ${className}`}
    >
      {imageLoad && !isTextVisible && (
        <ShapeTransition onAnimationComplete={() => setShowImage(true)} />
      )}

      {imageLoad && showImage && (
        <motion.img
          src="/images/logo.png"
          alt="Logo Image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="w-40 h-40"
        />
      )}

      {(imageLoad ? showImage : true) && // Only show text after image load or immediately if imageLoad is false
        items.map((lineItems, lineIndex) => (
          <motion.div
            key={lineIndex}
            className="flex flex-wrap justify-center whitespace-pre leading-tight"
          >
            {lineItems.map((item, index) => (
              <motion.span
                key={`${lineIndex}-${index}`}
                initial={animations[preset].initial}
                animate={
                  isInView
                    ? animations[preset].animate
                    : reverseScroll
                    ? animations[preset].exit
                    : animations[preset].initial
                }
                transition={{
                  ...animations[preset].transition,
                  delay:
                    (lineIndex * lineItems.length + index) *
                    (isInView ? 0.05 : 0.03),
                }}
                className="inline-block"
              >
                {item}
                {per === "word" && index < lineItems.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </motion.div>
        ))}
    </Component>
  );
}
