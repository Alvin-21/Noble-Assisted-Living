'use client';

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "motion/react";
import Link from "next/link";
import { useState, useRef } from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-cerulean dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.div
            className="h-full"
            initial={{ scale: 0 }}
            animate={
              isInView
                ? {
                    scale: 1,
                    transition: { duration: 0.8, delay: idx * 2, ease: "easeIn" },
                  }
                : {}
            }
          >
            <Card
              ref={ref}
              className="py-4 h-full border border-transparent group-hover:border-cerulean relative z-20 bg-dark-blue"
            >
              <CardHeader className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.image}
                  width={270}
                  height={180}
                  loading="eager"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large text-java tracking-wide">
                  {item.title}
                </h4>
                <small className="text-corn text-base tracking-wide">
                  {item.subtitle}
                </small>
                <p className="text-white tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};