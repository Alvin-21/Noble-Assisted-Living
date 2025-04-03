"use client";

import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo({ images, className }: { images: string[], className?: string }) {
  return (
    <ImagesSlider className={className} images={images}>
      <div></div>
    </ImagesSlider>
  );
}