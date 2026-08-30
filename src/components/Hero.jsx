import React, { useState, useEffect } from 'react';
import VisaCard3D from './VisaCard3D';
import Typewriter from './Typewriter';
import { ShoppingBag, Trophy, LogIn, ArrowLeft, Sparkles, X, CreditCard, Zap, Tv, ShieldCheck } from 'lucide-react';

export default function Hero({ onLoginClick }) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // منع تمرير الخلفية عند فتح النافذة المنبثقة
  useEffect(() => {
    if (isCategoriesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCategoriesOpen]);

  // قائمة الأقسام مع معرّف التمرير لكل قسم
  const categories = [
    {
      id: 'visa',
      title: 'بطاقات Visa Virtual',
      desc: 'بطاقات فيزا افتراضية مسبقة الدفع للتسوق والشراء عبر الإنترنت',
      icon: <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-blue-400 shrink-0" />,
      targetId: 'visa-cards-section',
      color: 'hover:border-blue-500/50 hover:bg-blue-950/20',
    },
    {
      id: 'mastercard',
      title: 'بطاقات Mastercard Virtual',
      desc: 'بطاقات ماستركارد افتراضية مقبولة في جميع المتاجر العالمية',
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0" />,
      targetId: 'mastercard-cards-section',
      color: 'hover:border-emerald-500/50 hover:bg-emerald-950/20',
    },
    {
      id: 'flash-usdt',
      title: 'رصيد Flash USDT',
      desc: 'تحويلات Flash USDT سريعة وآمنة عبر شبكة TRC20 و BEP20',
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6 text-amber-400 shrink-0" />,
      targetId: 'flash-usdt-section',
      color: 'hover:border-amber-500/50 hover:bg-amber-950/20',
    },
    {
      id: 'netflix',
      title: 'اشتراكات Netflix',
      desc: 'حسابات واشتراكات نيتفليكس بجميع الأنواع (شاشة واحدة، حساب كامل، Premium 4K)',
      icon: <Tv className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0" />,
      targetId: 'netflix-section',
      color: 'hover:border-red-500/50 hover:bg-red-950/20',
    },
  ];

  const handleSelectCategory = (targetId) => {
    setIsCategoriesOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const platforms = [
    { name: 'TikTok', desc: 'Coins & Gifts', icon: '🎵', color: 'hover:border-pink-500/60 hover:shadow-pink-500/20' },
    { name: 'Google Play', desc: 'Games & Apps', icon: '▶️', color: 'hover:border-emerald-500/60 hover:shadow-emerald-500/20' },
    { name: 'Apple', desc: 'Apps & Services', icon: '🍏', color: 'hover:border-zinc-400/60 hover:shadow-zinc-400/20' },
    { name: 'PlayStation', desc: 'Gaming', icon: '🎮', color: 'hover:border-blue-500/60 hover:shadow-blue-500/20' },
    { name: 'Xbox', desc: 'Gaming', icon: '💚', color: 'hover:border-green-500/60 hover:shadow-green-500/20' },
    { name: 'Steam', desc: 'Gaming', icon: '⚙️', color: 'hover:border-cyan-500/60 hover:shadow-cyan-500/20' },
    { name: 'Roblox', desc: 'Robux', icon: '🟥', color: 'hover:border-red-500/60 hover:shadow-red-500/20' },
  ];

  const promoText = "ساهم في توسيع مجتمعنا! انسخ رابط الإحالة الخاص بك وشاركه مع أصدقائك. عند انضمام 10 أشخاص عن طريق رابطك، ستصلك بطاقة Virtual Visa شحن مجاني بقيمة 50$ 💵 فوراً على بريدك الإلكتروني!";
  
  const [displayedPromoText, setDisplayedPromoText] = useState('');
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    if (promoIndex < promoText.length) {
      const timer = setTimeout(() => {
        setDisplayedPromoText((prev) => prev + promoText[promoIndex]);
        setPromoIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [promoIndex, promoText]);

  return (
    <section id="hero" className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative">
      <div className="flex-1 text-center md:text-right space-y-4">
        
        <span className="text-blue-400 text-xs md:text-sm font-semibold tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block">
          Your Digital Payment, Simplified.
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight min-h-[90px] md:min-h-[110px]">
          <Typewriter text="عالمك الرقمي، في مكان واحد" speed={90} />
        </h1>

        <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
          بطاقات ورصيد رقمي لخدماتك ومنصاتك المفضلة، بأسعار تنافسية وطرق دفع مرنة.
        </p>

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

        <div className="my-4 max-w-xl mx-auto md:mx-0 text-right space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>عرض خاص 💵</span>
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-amber-300">
            🎁 شارك واكسب – بطاقتك الافتراضية بقيمة 50$ بانتظارك!
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed min-h-[3.5rem]">
            {displayedPromoText}
            {promoIndex < promoText.length && (
              <span className="inline-block w-1.5 h-3.5 mr-0.5 bg-amber-400 animate-pulse" />
            )}
          </p>

          <div className="pt-1">
            <button
              onClick={onLoginClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-colors cursor-pointer active:scale-95"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>تسجيل الدخول للاشتراك</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
          <button
            onClick={() => setIsCategoriesOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" /> استعرض البطاقات
          </button>

          <a 
            href="#how-it-works" 
            className="border border-zinc-800 hover:border-blue-500/50 px-8 py-3.5 rounded-xl transition text-zinc-300 active:scale-95 flex items-center justify-center"
          >
            ℹ️ كيف تعمل؟
          </a>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md">
        <VisaCard3D amount="100" />
      </div>

      {/* 📱 النافذة المنبثقة المتجاوبة والتفاعلية مع اللمس */}
      {isCategoriesOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsCategoriesOpen(false)}
        >
          <div 
            className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl w-full max-w-xl max-h-[85vh] flex flex-col relative shadow-2xl text-white select-none overflow-hidden" 
            dir="rtl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* رأس النافذة المثبت */}
            <div className="p-4 sm:p-6 border-b border-zinc-800/80 flex items-center justify-between shrink-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">اختر القسم المطلـوب</h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">حدّد الفئة للذهاب مباشرة إلى الباقات المتاحة</p>
              </div>

              <button 
                onClick={() => setIsCategoriesOpen(false)}
                className="text-zinc-400 hover:text-white transition p-2 rounded-full hover:bg-zinc-800 active:scale-95 shrink-0"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* الجسم القابل للتمرير باللمس على جميع الهواتف */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-3 touch-pan-y overscroll-contain">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.targetId)}
                    className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950/70 text-right transition-all duration-200 flex flex-col justify-between group cursor-pointer active:scale-95 touch-manipulation ${cat.color}`}
                  >
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="p-2 rounded-lg sm:rounded-xl bg-zinc-900 border border-zinc-800 group-hover:scale-110 transition duration-200">
                        {cat.icon}
                      </div>
                      <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:-translate-x-1 transition duration-200" />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-white mb-1">{cat.title}</h4>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-relaxed">{cat.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}