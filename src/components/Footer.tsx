export default function Footer() {
  return (
    <footer className="bg-black/50 py-8 px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-cyan-500 font-bold mb-4 md:mb-0 font-mono">
            {'<CyberSapiens />'}
          </div>
          <div className="text-gray-400 text-sm font-mono">
            {'// © 2024 CyberSapiens. All rights reserved.'}
          </div>
        </div>
      </div>
    </footer>
  )
} 