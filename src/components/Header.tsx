'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-black/50 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-cyan-500">
            <span className="font-mono">{'<'}</span>
            CyberSapiens
            <span className="font-mono">{'/>'}</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a 
              href="#services" 
              className="hover:text-cyan-500 transition"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Services
            </a>
            <a 
              href="#documents" 
              className="hover:text-cyan-500 transition"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#documents')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Docs
            </a>
            <a 
              href="#terminal" 
              className="hover:text-cyan-500 transition"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#terminal')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Terminal
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
} 