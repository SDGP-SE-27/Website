"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDisplayedText("");
            setI(0);
            let typingEffect = setInterval(() => {
              setI((prev) => {
                if (prev < text.length) {
                  setDisplayedText(text.substring(0, prev + 1));
                  return prev + 1;
                } else {
                  clearInterval(typingEffect);
                  return prev;
                }
              });
            }, duration);

            return () => clearInterval(typingEffect);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [text, duration]);

  return (
    <h1
      ref={elementRef}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
