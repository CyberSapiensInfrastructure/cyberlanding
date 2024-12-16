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
            <Link href="#services" className="hover:text-cyan-500 transition">Services</Link>
            <Link href="#documents" className="hover:text-cyan-500 transition">Docs</Link>
            <Link href="#contact" className="hover:text-cyan-500 transition">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 