"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-scroll"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-4xl font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-xl text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.p
                    layoutId={`button-${active.title}-${id}`}
                    className="px-6 py-3 text-sm rounded-full font-bold bg-cerulean text-white"
                  >
                    {active.ctaText}
                  </motion.p>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-xl h-40 md:h-fit pb-10 flex flex-col items-start gap-4  dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 h-[80vh] content-center">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-10 flex flex-col md:flex-row justify-between items-center hover:bg-[#e9fbfc] dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-20 md:w-20 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-4xl font-semibold text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.title}-${id}`}
                  className="text-xl text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-6 py-3 text-base rounded-full font-bold bg-gray-100 hover:bg-corn hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Noble Assisted Living",
    title: "Our Mission",
    src: "/images/assisted-living-10.jpg",
    ctaText: "View",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur. Aenean lobortis erat ac lectus viverra, vitae accumsan erat pharetra. Morbi dictum sollicitudin enim, eu porttitor neque efficitur in. Nullam molestie, sem vel pharetra ullamcorper, tortor est bibendum lacus, sit amet convallis diam sapien at risus. Nam a dictum ex, sit amet placerat risus. Duis ac metus vel libero consequat posuere eget at est. Vestibulum iaculis facilisis pretium. In hac habitasse platea dictumst. Nulla et dignissim felis.
        </p>
      );
    },
  },
  {
    description: "Noble Assisted Living",
    title: "Our Values",
    src: "/images/assisted-living-5.jpg",
    ctaText: "View",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur. Aenean lobortis erat ac lectus viverra, vitae accumsan erat pharetra. Morbi dictum sollicitudin enim, eu porttitor neque efficitur in. Nullam molestie, sem vel pharetra ullamcorper, tortor est bibendum lacus, sit amet convallis diam sapien at risus. Nam a dictum ex, sit amet placerat risus. Duis ac metus vel libero consequat posuere eget at est. Vestibulum iaculis facilisis pretium. In hac habitasse platea dictumst. Nulla et dignissim felis.
        </p>
      );
    },
  },

  {
    description: "Noble Assisted Living",
    title: "Our Goals",
    src: "/images/assisted-living-3.jpg",
    ctaText: "View",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur. Aenean lobortis erat ac lectus viverra, vitae accumsan erat pharetra. Morbi dictum sollicitudin enim, eu porttitor neque efficitur in. Nullam molestie, sem vel pharetra ullamcorper, tortor est bibendum lacus, sit amet convallis diam sapien at risus. Nam a dictum ex, sit amet placerat risus. Duis ac metus vel libero consequat posuere eget at est. Vestibulum iaculis facilisis pretium. In hac habitasse platea dictumst. Nulla et dignissim felis.
        </p>
      );
    },
  },
];