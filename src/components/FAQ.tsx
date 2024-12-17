"use client";

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQData = [
  {
    question: "What is Cybersapiens Blockchain Infrastructure?",
    answer: "Cybersapiens is a comprehensive blockchain infrastructure designed specifically for gaming applications, featuring Smart Contract Wallets, Nested Asset Structure, and seamless user onboarding."
  },
  {
    question: "How does Smart Contract Wallet improve gaming experience?",
    answer: "Smart Contract Wallet eliminates transaction confirmation interruptions during gameplay, provides secure asset management, and includes features like Game Name Service (GNS) and Multi-Signature support."
  },
  {
    question: "What is Carbon (Nested Asset Structure)?",
    answer: "Carbon is our proprietary asset management system that allows for true nested NFTs, on-chain metadata storage, and advanced crafting mechanics for in-game items and resources."
  },
  {
    question: "How does the Mempool/Sequencer architecture work?",
    answer: "Our infrastructure uses a custom mempool with horizontally scalable sequencers to handle high transaction volumes efficiently, ensuring smooth gameplay even during peak usage."
  },
  {
    question: "What makes Cybersapiens different from traditional gaming infrastructures?",
    answer: "Cybersapiens provides true ownership of assets, seamless blockchain integration, and advanced features like on-chain crafting and GNS, all while maintaining uninterrupted gameplay."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          {'<'}<span className="text-cyan-500">FAQ</span>{' />'}
        </h2>
        
        <div className="space-y-4">
          {FAQData.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-200 font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="text-cyan-500" />
                ) : (
                  <FiChevronDown className="text-cyan-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 