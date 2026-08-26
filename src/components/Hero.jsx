import React from 'react';
import VisaCard3D from './VisaCard3D';
import Typewriter from './Typewriter';
import { ShoppingBag } from 'lucide-react';

export default function Hero() {
  // شبكة الأيقونات والخدمات التفاعلية
  const platforms = [
    { name: 'TikTok', desc: 'Coins & Gifts', icon: '🎵', color: 'hover:border-pink-500/60 hover:shadow-pink-500/20' },
    { name: 'Google Play', desc: 'Games & Apps', icon: '▶️', color: 'hover:border-emerald-500/60 hover:shadow-emerald-500/20' },
    { name: 'Apple', desc: 'Apps & Services', icon: '🍏', color: 'hover:border-zinc-400/60 hover:shadow-zinc-400/20' },
    { name: 'PlayStation', desc: 'Gaming', icon: '🎮', color: 'hover:border-blue-500/60 hover:shadow-blue-500/20' },
    { name: 'Xbox', desc: 'Gaming', icon: '💚', color: 'hover:border-green-500/60 hover:shadow-green-500/20' },
    { name: 'Steam', desc: 'Gaming', icon: '⚙️', color: 'hover:border-cyan-500/60 hover:shadow-cyan-500/20' },
    { name: 'Roblox', desc: 'Robux', icon: '🟥', color: 'hover:border-red-500/60 hover:shadow-red-500/20' },
  ];

  return (
    <section id="hero" className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center md:text-right space-y-4">
        
        {/* الشارة العلوية الأصلية */}
        <span className="text-blue-400 text-xs md:text-sm font-semibold tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block">
          Your Digital Payment, Simplified.
        </span>

        {/* العنوان الرئيسي وتأثير الكتابة */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight min-h-[90px] md:min-h-[110px]">
          <Typewriter text="عالمك الرقمي، في مكان واحد" speed={90} />
        </h1>

        {/* الوصف الجديد */}
        <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
          بطاقات ورصيد رقمي لخدماتك ومنصاتك المفضلة، بأسعار تنافسية وطرق دفع مرنة.
        </p>

        {/* 🌐 شبكة أيقونات المنصات والخدمات المخصصة للهواتف والشاشات */}
        <div className="pt-2 pb-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto md:mx-0">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 p-2 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer shadow-md ${platform.color}`}
              >
                <div className="w-7 h-7 rounded-full bg-zinc-950 flex items-center justify-center text-xs shrink-0 border border-zinc-700/50">
                  {platform.icon}
                </div>
                <div className="overflow-hidden text-right">
                  <div className="text-xs font-bold text-white truncate">{platform.name}</div>
                  <div className="text-[9px] text-zinc-400 truncate">{platform.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* أزرار العمليات الأصلية */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <a href="#cards" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95">
            <ShoppingBag className="w-5 h-5" /> استعرض البطاقات
          </a>
          <a href="#how-it-works" className="border border-zinc-800 hover:border-blue-500/50 px-8 py-3.5 rounded-xl transition text-zinc-300 active:scale-95 flex items-center justify-center">
            ℹ️ كيف تعمل؟
          </a>
        </div>
      </div>

      {/* المكون البصري للبطاقة 3D الأصلي */}
      <div className="flex-1 w-full max-w-md">
        <VisaCard3D amount="100" />
      </div>
    </section>
  );
}