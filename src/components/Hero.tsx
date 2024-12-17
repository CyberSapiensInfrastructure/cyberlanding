'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building the Future of Gaming';

  // Sayfa yüklendiğinde typing animasyonunu başlat
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

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent animate-fade-in"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="mb-4 font-mono text-cyan-500 animate-slide-down">
            {'>'} <span className="typing-cursor">_</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glitch-text animate-slide-right"
            data-text={typedText}>
            {typedText}
            <span className="text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 ml-2">
              {typedText ? '_' : ''}
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 font-mono animate-slide-left delay-200">
            // Secure, scalable, and innovative blockchain solutions for games
          </p>

          <div className="flex gap-4 animate-slide-up delay-500">
            <button className="bg-cyan-500 text-black px-8 py-3 rounded hover:bg-cyan-400 transition font-mono button-glitch">
              {'> Start Building'}
            </button>
            <button className="border border-cyan-500 px-8 py-3 rounded hover:bg-cyan-500/10 transition font-mono">
              {'> View Docs'}
            </button>
          </div>
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
} 