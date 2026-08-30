import React, { useState } from 'react';
import { Zap, CheckCircle2, ShieldCheck, ArrowRight, Flame, ShieldAlert } from 'lucide-react';
import PaymentModal from './PaymentModal'; // استدعاء النافذة المنبثقة

export default function FlashUsdtSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0, cardIndex: null });
  
  // 1. حالة إدارة النافذة المنبثقة داخل قسم الفلاش مباشرة
  const [selectedCard, setSelectedCard] = useState(null);

  // تفاعل التمرير يعمل فقط مع الماوس لعدم إعاقة سحب الشاشة على الهواتف
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget.getBoundingClientRect();
    const cardWidth = card.width;
    const cardHeight = card.height;
    const centerX = card.left + cardWidth / 2;
    const centerY = card.top + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXUncapped = (-mouseY / cardHeight) * 15;
    const rotateYUncapped = (mouseX / cardWidth) * 15;

    setRotate({
      x: rotateXUncapped,
      y: rotateYUncapped,
      cardIndex: index,
    });
  };

  const handleReset = () => setRotate({ x: 0, y: 0, cardIndex: null });

  // 2. هيكلية البيانات
  const normalCards = [
    {
      id: 'flash_10k',
      title: "Flash USDT Card",
      balance: "10,000",
      priceUsdt: "100",
      price: "100",
      badge: "الأكثر طلباً",
      features: ["ثبات في المحفظة 100%", "دعم شبكة TRC-20", "معاملة آمنة ومضمونة", "دعم فني 24/7"]
    },
    {
      id: 'flash_25k',
      title: "Flash USDT Card",
      balance: "25,000",
      priceUsdt: "250",
      price: "250",
      badge: "خيار مميز",
      features: ["ثبات في المحفظة 100%", "دعم شبكة TRC-20", "أولوية المعالجة والتنفيذ", "دعم فني خاص VIP"]
    },
    {
      id: 'flash_50k',
      title: "Flash USDT Card",
      balance: "50,000",
      priceUsdt: "500",
      price: "500",
      badge: "الباقة الكبرى",
      features: ["ثبات في المحفظة 100%", "دعم جميع الشبكات", "تأكيد فوري للـ Blockchain", "مدير حساب خاص"]
    }
  ];

  const vipCard = {
    id: 'flash_vip',
    title: "VIP Flash USDT Card",
    balance: "100,000",
    priceUsdt: "1000",
    price: "1000",
    isVip: true
  };

  return (
    <section id="flash-usdt-section" className="py-24 bg-black text-white relative overflow-hidden select-none scroll-mt-6">
      {/* خلفية التوهج العام */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-4">
            <Zap className="w-4 h-4 text-blue-400" />
            <span>عروض Flash USDT الرقمية</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            بطاقات <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent">Flash USDT</span> الذكية
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            بطاقات مشفرة وموثقة بتأكيد فوري...
          </p>
        </div>

        {/* البطاقات الثلاث الأولى */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {normalCards.map((card, idx) => {
            const isHovered = rotate.cardIndex === idx;
            return (
              <div
                key={idx}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={handleReset}
                style={{ perspective: '1000px' }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative bg-zinc-900/80 border ${
                    isHovered ? 'border-cyan-400 shadow-cyan-500/20' : 'border-blue-500/20'
                  } rounded-3xl p-8 transition-transform duration-150 ease-out backdrop-blur-xl`}
                  style={{
                    transform: isHovered
                      ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(20px)`
                      : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="flex justify-between items-center mb-6" style={{ transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)' }}>
                    <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300">
                      {card.badge}
                    </span>
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div className="mb-6" style={{ transform: isHovered ? 'translateZ(35px)' : 'translateZ(0px)' }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-400 text-xs font-medium uppercase">رصيد البطاقة الرقمي</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30 font-semibold">
                        <ShieldAlert className="w-3 h-3 text-cyan-400" />
                        Flash USDT مؤكد
                      </span>
                    </div>

                    <div className="text-4xl font-black text-cyan-300 flex items-baseline gap-2">
                      {card.balance} <span className="text-base font-bold text-blue-400">Flash USDT</span>
                    </div>
                  </div>

                  <div className="my-6 p-4 rounded-2xl bg-black/50 border border-white/5 flex items-baseline justify-between" style={{ transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)' }}>
                    <span className="text-gray-400 text-sm">السعر:</span>
                    <span className="text-2xl font-black text-emerald-400">{card.priceUsdt} USDT</span>
                  </div>

                  <ul className="space-y-3 mb-8" style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}>
                    {card.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedCard(card)}
                    style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)' }}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <span>شراء الآن</span>
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* البطاقة الفاخرة VIP */}
        <div
          onMouseMove={(e) => handleMouseMove(e, 3)}
          onMouseLeave={handleReset}
          style={{ perspective: '1200px' }}
          className="group cursor-pointer"
        >
          <div
            className="relative rounded-3xl border border-amber-500/40 bg-zinc-950 p-8 md:p-12 transition-transform duration-150 ease-out shadow-2xl"
            style={{
              transform: rotate.cardIndex === 3
                ? `rotateX(${rotate.x * 0.5}deg) rotateY(${rotate.y * 0.5}deg) translateZ(20px)`
                : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6" style={{ transform: rotate.cardIndex === 3 ? 'translateZ(30px)' : 'translateZ(0px)' }}>
                
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-bold">
                    <Flame className="w-4 h-4 text-amber-500" />
                    <span>عرض استثنائي VIP</span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 font-semibold">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                    تأكيد Flash USDT أصلي 100%
                  </div>
                </div>

                <div>
                  <span className="text-gray-400 text-xs font-semibold block mb-2 uppercase">رصيد الباقة الاستثنائية</span>
                  <h3 className="text-5xl md:text-7xl font-black text-amber-400 tracking-wider">
                    100,000 <span className="text-2xl md:text-3xl text-amber-500 font-sans tracking-normal">Flash USDT</span>
                  </h3>
                </div>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  حزمة النخبة المخصصة. تحويل مباشر مع تأكيد الـ Blockchain لرصيد Flash USDT.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>ضمان النقل الكامل 100%</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>تأكيد فوري على الـ Blockchain</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5" style={{ transform: rotate.cardIndex === 3 ? 'translateZ(40px)' : 'translateZ(0px)' }}>
                <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center space-y-6">
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">السعر الحصري</div>
                  
                  <div className="text-5xl md:text-6xl font-black text-amber-400">
                    1,000 <span className="text-xl text-amber-500 font-sans">USDT</span>
                  </div>

                  <button 
                    onClick={() => setSelectedCard(vipCard)}
                    className="w-full py-4 px-8 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-lg text-center transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
                  >
                    <span>اطلب العرض الاستثنائي</span>
                    <ArrowRight className="w-5 h-5 rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. ربط النافذة المنبثقة مباشرة عند النقر على أي بطاقة */}
      {selectedCard && (
        <PaymentModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </section>
  );
}