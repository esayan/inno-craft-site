import React from 'react'
import { discount, robot } from '../assets'

export default function Hero() {
  return (
    <section id="home" className="relative flex md:flex-row flex-col items-center py-6 sm:py-16">
      {/* Sol: metin */}
      <div className="flex-1 flex flex-col justify-center order-2 md:order-1 px-0 md:px-6">
        <div className="flex items-center py-1 px-4 bg-discount-gradient rounded-2xl mb-3 w-fit">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className="ml-2 text-dimWhite text-sm">
            <span className="text-white">20%</span> Discount For{' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <h1 className="font-semibold text-white leading-tight ss:leading-[100px] ss:text-[72px] text-[44px]">
          The Next <span className="text-gradient">Generation</span>
          <br className="sm:block hidden" /> Payment Method.
        </h1>

        <p className="mt-5 max-w-[470px] text-dimWhite">
          Our team of experts uses a methodology to identify the credit cards most
          likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

      {/* Sağ: görsel */}
      <div className="flex-1 order-1 md:order-2 flex justify-center items-center relative mt-10 md:mt-0">
        <img src={robot} alt="robot" className="w-full h-full relative z-[5] max-w-[600px]" />
        {/* gradient overlay'ler */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-10 bottom-10 blue__gradient" />
      </div>

      {/* Konteyner genişliği */}
      <div className="pointer-events-none absolute inset-0 -z-10" />
    </section>
  )
}
