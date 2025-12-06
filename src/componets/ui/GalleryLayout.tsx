"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function GalleryLayout() {
  return (
    <div className="h-[4000px] w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Main Kitchen with Wooden Cabinets
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The primary kitchen area featuring light natural wood cabinetry, white countertops, stainless steel appliances, and a small central island/trash bin station.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Front Exterior with Garage and Driveway
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A view of the white-sided house exterior, featuring a two-car garage and a large concrete driveway under a bright blue sky.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Secondary Kitchenette
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A small secondary kitchen with light grey cabinets, a stainless steel refrigerator, and a fold-down wooden counter/table against the wall.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Client Bedroom with Built-in Shelving
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A large bedroom with light walls and carpet, featuring a dark wooden bed frame, matching nightstands, and extensive built-in shelving along one wall.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Bright Dining Nook
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A dining area featuring a square wooden table with four high-back, padded chairs, surrounded by multiple large windows with natural wood trim.
      </p>
    </div>
  );
};

const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Client Bedroom
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A bedroom featuring a dark wood four-poster bed and matching nightstand with a lamp, set on gray carpet, with two windows dressed in light blue curtains.
      </p>
    </div>
  );
};

const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Modernized Bathroom
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A brighter, modernized bathroom featuring a white vanity with a marble countertop, a mirrored medicine cabinet, and a glass-enclosed shower.
      </p>
    </div>
  );
};

const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Retro-Style Bathroom
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A bathroom with dark wood laminate flooring, an oak vanity with a pink countertop, and a shower/tub area with a patterned curtain.
      </p>
    </div>
  );
};

const SkeletonTen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Covered Porch with Accessibility Ramp
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A close-up view of the front of the house, showing the covered porch, steps, and an installed metal accessibility ramp leading to the entrance.
      </p>
    </div>
  );
};

const SkeletonEleven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Living Room with Fireplace and Work Area
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A carpeted living space with a TV mounted over a fireplace, a black leather couch, and two dedicated wooden desk areas.
      </p>
    </div>
  );
};

const SkeletonTwelve = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Kitchen and Breakfast Nook View
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        An angle showing the main kitchen with natural wood cabinets, stainless steel appliances, and a nearby round wooden dining table set with place mats and a floral centerpiece.
      </p>
    </div>
  );
};

const SkeletonThirteen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Lower Level Living Space and Dining Area
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A large, carpeted open space with an entertainment setup (large TV and recliners), a ceiling fan, a separate dining nook near bay windows, and French doors leading outside.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "row-span-2 col-span-1 sm:row-span-1 sm:col-span-2",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/34%20(2).jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "row-span-2 col-span-1 lg:row-span-1 lg:col-span-3",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/09.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "row-span-2 col-span-1 sm:row-span-1 lg:col-span-2",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/3.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "row-span-2 col-span-1 sm:row-span-1 sm:col-span-1 lg:row-span-1 lg:col-span-1",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/33.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "row-span-2 col-span-1 lg:row-span-1",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/34.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "row-span-2 col-span-1 sm:row-span-1 lg:col-span-2",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/IMG_5145.JPEG",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "row-span-2 col-span-1 sm:row-span-1 lg:col-span-3",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/87.jpg",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "row-span-2 col-span-1 sm:row-span-1 lg:col-span-2",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/IMG_5140.JPEG",
  },
  {
    id: 10,
    content: <SkeletonTen />,
    className: "row-span-2 col-span-1 lg:row-span-1",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/IMG_5138.JPEG",
  },
  {
    id: 11,
    content: <SkeletonEleven />,
    className: "row-span-2 col-span-1 sm:row-span-1",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/IMG_5146.JPEG",
  },
  {
    id: 12,
    content: <SkeletonTwelve />,
    className: "row-span-2 col-span-1 sm:row-span-1 sm:col-span-2 lg:col-span-1",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/IMG_5143.JPEG",
  },
  {
    id: 13,
    content: <SkeletonThirteen />,
    className: "row-span-2 col-span-1 sm:row-span-1 sm:col-span-2 lg:col-span-1",
    thumbnail:
      "https://ik.imagekit.io/alvinawuor/IMG_5147.JPEG",
  },
];