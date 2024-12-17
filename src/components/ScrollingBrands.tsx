"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiEthereum,
  SiPolkadot,
 
  SiBinance,
} from "react-icons/si";

const ScrollingBrands = () => {
  return (
    <div className="relative border-y-2 border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="relative z-0 flex overflow-hidden py-2">
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

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-8 py-4">
      <Icon className="text-3xl text-cyan-500 md:text-4xl" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase text-gray-300 md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItems = () => (
  <>
    <LogoItem Icon={SiEthereum} name="Ethereum" />
    <LogoItem Icon={SiEthereum} name="Avalanche" />
    <LogoItem Icon={SiEthereum} name="Arbitrum" />
    <LogoItem Icon={SiBinance} name="Binance" />
  </>
);

export default ScrollingBrands; 