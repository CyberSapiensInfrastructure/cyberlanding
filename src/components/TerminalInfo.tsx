"use client";

import React from 'react';
import { FiCpu, FiServer, FiGlobe, FiMail } from 'react-icons/fi';

const TerminalInfo = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#1A1A1A] rounded-lg border border-gray-800 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#111] p-4 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono ml-2">system_info.sh</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono">
            {/* Command Input */}
            <div className="text-cyan-500 mb-4">
              <span className="text-pink-500">➜</span> <span className="text-cyan-500">~/cybersapiens</span> <span className="text-gray-400">$ system_info</span>
            </div>

            {/* System Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <InfoBlock
                icon={<FiCpu />}
                title="System Version"
                items={[
                  "CyberSapiens Core: v2.3.0",
                  "Smart Contract Wallet: v1.5.2",
                  "Carbon Architecture: v3.0.1"
                ]}
              />
              
              <InfoBlock
                icon={<FiServer />}
                title="Infrastructure"
                items={[
                  "Blockchain Networks: 5",
                  "Active Nodes: 1,000+",
                  "Uptime: 99.99%"
                ]}
              />
              
              <InfoBlock
                icon={<FiGlobe />}
                title="Location"
                items={[
                  "HQ: Providence, RI",
                  "Data Centers: Global",
                  "Support: 24/7"
                ]}
              />
              
              <InfoBlock
                icon={<FiMail />}
                title="Contact"
                items={[
                  "Email: contact@cybersapiens.dev",
                  "Discord: @cybersapiens",
                  "GitHub: /cybersapiens"
                ]}
              />
            </div>

            {/* Command Prompt */}
            <div className="mt-4 text-gray-400">
              <span className="text-pink-500">➜</span> <span className="text-cyan-500">~/cybersapiens</span> <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoBlock = ({ icon, title, items }: { 
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => (
  <div className="bg-black/20 p-4 rounded border border-gray-800">
    <div className="flex items-center gap-2 mb-2 text-cyan-500">
      {icon}
      <span className="font-semibold">{title}</span>
    </div>
    <div className="space-y-1">
      {items.map((item, i) => (
        <div key={i} className="text-sm">
          <span className="text-gray-500">$</span> {item}
        </div>
      ))}
    </div>
  </div>
);

export default TerminalInfo; 