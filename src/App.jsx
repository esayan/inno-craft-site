import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import CardDeal from './components/CardDeal'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="bg-primary text-white font-poppins w-full overflow-hidden min-h-screen">
      {/* Navbar */}
      <div className="px-6 sm:px-16">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className="bg-primary">
        <div className="px-6 sm:px-16">
          <div className="max-w-7xl mx-auto relative">
            {/* gradient lekeler */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            <Hero />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 sm:px-16">
        <div className="max-w-7xl mx-auto">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}
