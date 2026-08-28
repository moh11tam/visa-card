import React, { useState, useEffect } from 'react';
import { Gift, LogIn, ArrowLeft, Sparkles, Trophy } from 'lucide-react';

export default function PromoCard({ onLoginClick }) {
  const fullText = "ساهم في توسيع مجتمعنا! انسخ رابط الإحالة الخاص بك وشاركه مع أصدقائك. عند انضمام 10 أشخاص عن طريق رابطك، ستصلك بطاقة Virtual Visa شحن مجاني بقيمة 50$ 💵 فوراً على بريدك الإلكتروني!";
  
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // تأثير الكتابة التدريجية (Typewriter Effect)
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 35); // سرعة الكتابة بالمللي ثانية

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 px-4 select-none">
      <div className="relative rounded-3xl bg-gradient-to-r from-amber-950/80 via-zinc-900 to-amber-950/80 border border-amber-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden group">
        
        {/* 🌟 تأثير خلفية متوهجة ومضيئة */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-yellow-500/10 to-amber-500/5 animate-pulse pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-right">
          
          {/* 📜 محتوى البطاقة: العنوان والنص المتحرك */}
          <div className="flex-1 space-y-3">
            
            {/* الشارة والعنوان */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black shadow-lg shadow-amber-500/10">
                <Trophy className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>برنامج الإحالات الخاص 💵</span>
              </span>
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse hidden sm:block" />
            </div>

            <h3 className="text-lg sm:text-xl font-black text-amber-300 tracking-wide">
              🎁 شارك واكسب – بطاقتك الافتراضية بقيمة 50$ بانتظارك!
            </h3>

            {/* النص الذي يظهر بالعرض البطيء (التدريجي) */}
            <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed min-h-[4rem] sm:min-h-[3rem]">
              {displayedText}
              {currentIndex < fullText.length && (
                <span className="inline-block w-2 h-4 mr-1 bg-amber-400 animate-pulse" />
              )}
            </p>
          </div>

          {/* 🔵 زر تسجيل الدخول الأزرق الاحترافي */}
          <div className="shrink-0">
            <button
              onClick={onLoginClick}
              className="group/btn relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 border border-blue-400/50 overflow-hidden cursor-pointer"
            >
              {/* شريط اللمعان المتحرك */}
              <span className="absolute top-0 right-0 w-10 h-full bg-white/30 skew-x-12 -translate-x-24 group-hover/btn:translate-x-40 transition-transform duration-700 ease-in-out" />

              <LogIn className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
              <span>تسجيل الدخول للاشتراك</span>
              <ArrowLeft className="w-4 h-4 text-white group-hover/btn:-translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}