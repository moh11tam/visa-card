import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CardsSection from './components/CardsSection';
import MastercardSection from './components/MastercardSection'; // 👈 استيراد المكون الجديد
import HowItWorks from './components/HowItWorks';
import Faq from './components/Faq';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-600 selection:text-white" dir="rtl">
      <Navbar />
      <Hero />
      <Features />
      <CardsSection />
      
      {/* 💳 بطاقات Mastercard تظهر هنا مباشرة تحت CardsSection */}
      <MastercardSection />
      
      <HowItWorks />
      <Faq />
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        <p>© 2026 VIRTUAL VISA. جميع الحقوق محفوظة </p>
      </footer>
    </div>
  );
}