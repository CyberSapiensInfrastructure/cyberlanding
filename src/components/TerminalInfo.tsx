"use client";

import React from 'react';

const TerminalInfo = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-title">System Info</div>
          </div>
          <div className="terminal-body">
            <div className="command-line">
              <span className="prompt">$</span> cybersapiens info
            </div>
            <div className="output">
              <p>Email: contact@providence.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: Providence, RI</p>
            </div>
            <div className="command-line">
              <span className="prompt">$</span> cybersapiens version
            </div>
            <div className="output">
              <p>Cybersapiens v1.0.0</p>
              <p>Smart Contract Wallet: v1.2.3</p>
              <p>Carbon Architecture: v2.0.1</p>
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

export default TerminalInfo; 