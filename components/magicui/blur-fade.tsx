"use client";

import { useRef } from "react";
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface ImageWithText {
  imageUrl: string;
  title: string;
  description: string;
}

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
  headerText: string;
  images: ImageWithText[];
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  headerText,
  images,
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {/* Header text */}
        <h1 className="text-center text-4xl font-bold text-white mb-8">
          {headerText}
        </h1>

        {/* Image with title and description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div key={idx} className="relative">
              {/* Image */}
              <Image
  src={image.imageUrl}
  alt={image.title}
  width={500}           // Set a specific width (adjust based on your layout)
  height={300}          // Set a corresponding height for the aspect ratio
  className="rounded-lg w-full h-auto" // Add Tailwind classes for styling
  priority              // Optional: prioritize loading for this image
/>

              {/* Title and description */}
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{image.title}</h2>
                <p className="text-lg">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
