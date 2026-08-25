import React, { useState } from 'react';
import { CreditCard, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-blue-500/20 bg-black/90 backdrop-blur-md sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CreditCard className="text-blue-500 w-8 h-8" />
          <span className="text-xl md:text-2xl font-bold tracking-wider text-blue-400">VIRTUAL VISA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-blue-400 transition">الرئيسية</a>
          <a href="#features" className="hover:text-blue-400 transition">المميزات</a>
          <a href="#cards" className="hover:text-blue-400 transition">البطاقات</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition">كيفية الشراء</a>
          <a href="#faq" className="hover:text-blue-400 transition">الأسئلة الشائعة</a>
        </div>

        <a href="#cards" className="hidden md:inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2 rounded-xl transition shadow-lg shadow-blue-600/30">
          استعرض البطاقات
        </a>

        {/* Hamburger Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-blue-500/20 px-6 py-4 flex flex-col gap-4 text-center">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-blue-400">الرئيسية</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-blue-400">المميزات</a>
          <a href="#cards" onClick={() => setIsOpen(false)} className="hover:text-blue-400">البطاقات</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="hover:text-blue-400">كيفية الشراء</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-blue-400">الأسئلة الشائعة</a>
          <a href="#cards" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white font-bold py-2 rounded-xl">استعرض البطاقات</a>
        </div>
      )}
    </nav>
  );
}