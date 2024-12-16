export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <div className="mb-4 font-mono text-cyan-500">{'> Web3 Infrastructure Solutions'}</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building the Future of
            <span className="text-cyan-500"> Decentralized World</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 font-mono">
            {'// Secure, scalable, and innovative blockchain solutions'}
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-500 text-black px-8 py-3 rounded hover:bg-cyan-400 transition font-mono">
              {'> Start Building'}
            </button>
            <button className="border border-cyan-500 px-8 py-3 rounded hover:bg-cyan-500/10 transition font-mono">
              {'> View Docs'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 