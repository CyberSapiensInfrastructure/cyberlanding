export default function Services() {
  const services = [
    {
      title: 'Smart Contract Development',
      description: '// Custom blockchain solutions with secure smart contracts',
      icon: '</>',
    },
    {
      title: 'DeFi Protocols',
      description: '// Decentralized finance infrastructure and integration',
      icon: '₿',
    },
    {
      title: 'Web3 Infrastructure',
      description: '// Scalable blockchain network architecture',
      icon: '◈',
    },
  ]

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono">
          {'<'}<span className="text-cyan-500">Services</span>{' />'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded bg-[#1A1A1A] hover:bg-[#222] transition border border-gray-800">
              <div className="text-4xl mb-4 text-cyan-500 font-mono">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-mono">{service.title}</h3>
              <p className="text-gray-400 font-mono">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 