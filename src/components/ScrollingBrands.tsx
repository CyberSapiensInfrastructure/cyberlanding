"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ScrollingBrands = () => {
  return (
    <div className="relative border-y-2 border-gray-800 bg-black/50 backdrop-blur-sm h-[10vh]">
      <div className="relative z-0 flex overflow-hidden h-full">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

const TranslateWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-100%" }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ src, name, showName = false, size = "150px" }: {
  src: string;
  name: string;
  showName?: boolean;
  size?: string;
}) => {
  return (
    <span className="flex items-center justify-center gap-4 px-8 py-4">
      <div style={{ width: size, height: size }} className="relative">
        <Image 
          src={src} 
          alt={name} 
          fill
          className="object-contain"
          priority
        />
      </div>
      {showName && (
        <span className="whitespace-nowrap text-xl font-semibold uppercase text-gray-300 md:text-2xl">
          {name}
        </span>
      )}
    </span>
  );
};

const LogoItems = () => (
  <>
    <LogoItem src="/avalanche.png" name="Avalanche" showName={true} size="50px" />
    <LogoItem src="/providence-logo-anim.gif" name="Providence" />
    <LogoItem src="/dynasty-logo.png" name="Dynasty" />
  </>
);

export default ScrollingBrands; 