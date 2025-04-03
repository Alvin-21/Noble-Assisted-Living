"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/images/assisted-living-13.jpg",
    "/images/assisted-living-10.jpg",
    "/images/assisted-living-11.jpg",
  ];
  return (
    <ImagesSlider className="rounded-l-xl" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      > 
      </motion.div>
    </ImagesSlider>
  );
}