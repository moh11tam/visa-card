import React from 'react';
import VisaCard3D from './VisaCard3D';
import Typewriter from './Typewriter';
import { ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center md:text-right">
        <span className="text-blue-400 text-xs md:text-sm font-semibold tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
          Your Digital Payment, Simplified.
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 leading-tight min-h-[120px] md:min-h-[140px]">
          <Typewriter text="بطاقتك الافتراضية، جاهزة للإستخدام." speed={90} />
        </h1>
        <p className="text-zinc-400 mt-2 text-base md:text-lg max-w-xl">
          احصل على بطاقة Visa افتراضية مشحونة بسرعة وسهولة، واستخدمها في عمليات الدفع الإلكتروني والخدمات التي تدعم بطاقات Visa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <a href="#cards" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30">
            <ShoppingBag className="w-5 h-5" /> استعرض البطاقات
          </a>
          <a href="#how-it-works" className="border border-zinc-800 hover:border-blue-500/50 px-8 py-3.5 rounded-xl transition text-zinc-300">
            ℹ️ كيف تعمل؟
          </a>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md">
        <VisaCard3D amount="100" />
      </div>
    </section>
  );
}