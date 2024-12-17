'use client'
import { useState } from 'react'

export default function Contact() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { type: 'system', content: 'Welcome to CyberSapiens Terminal v1.0.0' },
    { type: 'system', content: 'Type your message and press Enter to connect...' }
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages([...messages, 
      { type: 'user', content: input },
      { type: 'system', content: 'Message received. Our team will contact you shortly.' }
    ])
    setInput('')
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-[#1A1A1A] rounded p-4 border border-gray-800">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <span className="text-cyan-500">
                  {msg.type === 'system' ? 'system@cybersapiens:~$ ' : 'user@cybersapiens:~$ '}
                </span>
                <span className="text-gray-300">{msg.content}</span>
              </div>
            ))}
            <form onSubmit={handleSubmit} className="mt-4 flex">
              <span className="text-cyan-500">user@cybersapiens:~$ </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-300 ml-2"
                placeholder="Type your message..."
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 