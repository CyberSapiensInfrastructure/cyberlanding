"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building the Future of Gaming';
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Typing animation
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToDocs = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#documents')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section ref={targetRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent animate-fade-in"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4 font-mono text-cyan-500 animate-slide-down">
              {'>'} <span className="typing-cursor">_</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6 glitch-text"
              data-text={typedText}
            >
              {typedText}
              <span className="text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 ml-2">
                {typedText ? '_' : ''}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8 font-mono animate-slide-left"
            >
              // Secure, scalable, and innovative blockchain solutions for games
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <AnimatedButton />
              <button 
                onClick={scrollToDocs}
                className="border border-cyan-500 px-8 py-3 rounded hover:bg-cyan-500/10 transition font-mono"
              >
                {'> View Docs'}
              </button>
            </motion.div>
          </div>

          {/* Right Content - Gaming Visual */}
          <motion.div 
            style={{ y, opacity }}
            className="relative h-[600px] hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
            <motion.div 
              animate={{ 
                rotateY: [0, 10, 0],
                rotateX: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative h-full w-full"
            >
              <div className="absolute inset-0 bg-[url('/gaming-visual.jpg')] bg-cover bg-center rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-20 right-20 w-20 h-20 bg-cyan-500/20 backdrop-blur-xl rounded-lg"
              />
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-40 left-20 w-16 h-16 bg-purple-500/20 backdrop-blur-xl rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--duration': `${2 + Math.random() * 4}s`,
              '--delay': `${Math.random() * 2}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </section>
  );
};

const AnimatedButton = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);
  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!ref.current) return;
    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const xPct = offsetX / width;
    const yPct = 1 - offsetY / height;
    const newY = 8 + yPct * 8;
    const newX = 8 + xPct * 8;
    x.set(newX);
    y.set(-newY);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ transform }}
      onMouseMove={handleMove}
      onMouseLeave={handleReset}
      onMouseDown={handleReset}
      className="group relative bg-cyan-500 text-black px-8 py-3 rounded hover:bg-cyan-400 transition font-mono button-glitch"
    >
      <span className="relative overflow-hidden inline-block">
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {'> Start Building'}
        </span>
        <span className="absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          {'> Start Building'}
        </span>
      </span>
      <span className="ml-2 inline-block pointer-events-none">
        <div className="flex h-6 w-6 overflow-hidden text-xl">
          <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
          <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
        </div>
      </span>
    </motion.button>
  );
};

export default Hero; 