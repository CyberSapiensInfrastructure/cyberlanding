import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Documents from '@/components/Documents'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-gray-100">
      <Header />
      <Hero />
      <Services />
      <Documents />
      <Contact />
      <Footer />
    </main>
  )
} 