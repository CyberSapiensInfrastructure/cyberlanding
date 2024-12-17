"use client";

import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface StatProps {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: StatProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-6xl font-semibold text-cyan-500">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-gray-400 font-mono">{subheading}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-5xl px-4 py-20 md:py-24">
        <h2 className="mb-8 text-center text-base text-gray-400 font-mono sm:text-lg md:mb-16">
          BUILDING THE FUTURE OF
          <span className="text-cyan-500"> BLOCKCHAIN GAMING</span>
        </h2>

        <div className="flex flex-col items-center justify-center sm:flex-row">
          <Stat
            num={100}
            suffix="K+"
            subheading="Active Players"
          />
          <div className="h-[1px] w-12 bg-gray-800 sm:h-12 sm:w-[1px]" />
          <Stat
            num={5.5}
            decimals={1}
            suffix="M"
            subheading="Transactions Processed"
          />
          <div className="h-[1px] w-12 bg-gray-800 sm:h-12 sm:w-[1px]" />
          <Stat
            num={99}
            suffix="%"
            subheading="Uptime Guarantee"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats; 