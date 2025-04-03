"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImagesSlider({ images, className, direction }: { images: string[], className?: string, direction?: "left" | "right" }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Slideshow"
            className={className}
            initial={
                direction === 'left' ? {opacity: 0, x: 100 } : { opacity: 0, x: -100 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
                direction === 'right' ? {opacity: 0, x: 100 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
    );
}