'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-cyan-500 mb-4 inline-block">
              <span className="font-mono">{'<'}</span>
              CyberSapiens
              <span className="font-mono">{'/>'}</span>
            </Link>
            <p className="text-gray-400 mt-4 font-mono">
              Building the future of gaming with secure, scalable, and innovative blockchain infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-cyan-500 transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-cyan-500 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cyan-500 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-500 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-cyan-500 transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 mb-4 md:mb-0 font-mono">
              &copy; {new Date().getFullYear()} CyberSapiens. All rights reserved.
            </div>

            {/* Sosyal Medya */}
            <div className="flex space-x-6">
              <span className="text-gray-400 hover:text-cyan-500 transition cursor-pointer">
                <FiGithub size={20} />
              </span>
              <span className="text-gray-400 hover:text-cyan-500 transition cursor-pointer">
                <FiTwitter size={20} />
              </span>
              <span className="text-gray-400 hover:text-cyan-500 transition cursor-pointer">
                <FiLinkedin size={20} />
              </span>
              <span className="text-gray-400 hover:text-cyan-500 transition cursor-pointer">
                <FiMail size={20} />
              </span>
            </div>
          </div>

          {/* Ek Bilgi */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm font-mono">
              Powered by CyberSapiens Blockchain Infrastructure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 