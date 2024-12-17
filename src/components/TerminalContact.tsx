"use client";

import React from 'react';

const TerminalContact = () => {
  return (
    <section className="bg-black text-green-500 p-8 font-mono">
      <div className="container mx-auto">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-title">Terminal</div>
          </div>
          <div className="terminal-body">
            <div className="command-line">
              <span className="prompt">$</span> contact info
            </div>
            <div className="output">
              <p>Email: contact@providence.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: Providence, RI</p>
            </div>
            <div className="command-line">
              <span className="prompt">$</span> <span className="cursor">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalContact; 