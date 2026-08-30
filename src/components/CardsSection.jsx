import React, { useState } from 'react';
import VisaCard3D from './VisaCard3D';
import PaymentModal from './PaymentModal';
import { Star, Sparkles } from 'lucide-react';

export default function CardsSection() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    { id: 'mc-10', title: "Mastercard Virtual", balance: "10", priceUsdt: "6 USDT", currency: "€" },
    { id: 'visa-25', title: "Visa Virtual", balance: "25", priceUsdt: "10 USDT", currency: "$" },
    { id: 'flash-50', title: "Flash USDT", balance: "50", priceUsdt: "25 USDT", currency: "USDT", type: "flash" },
    { id: 'visa-100', title: "Visa Virtual", balance: "100", priceUsdt: "50 USDT", currency: "$" },
  ];

  const vipCardData = {
    id: 'vip-1000',
    title: "Visa VIP Elite",
    balance: "1,000",
    priceUsdt: "100 USDT",
    currency: "$",
    isVip: true
  };

  return (
    <section id="cards" className="max-w-7xl mx-auto px-6 py-20 select-none">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">اختر البطاقة المناسبة لك</h2>
        <p className="text-zinc-400 text-sm md:text-base">جميع البطاقات جاهزة للتسليم الفوري</p>
      </div>

      {/* البطاقات الأربعة الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {cardsData.map((card) => (
          <div 
            key={card.id} 
            className="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/80 hover:border-blue-500/50 transition duration-300 flex flex-col justify-between items-center text-center shadow-lg hover:shadow-blue-500/10 group"
          >
            <div className="w-full mb-4 transform group-hover:scale-105 transition duration-300">
              <VisaCard3D amount={card.balance} />
            </div>
            
            <div className="w-full mt-2">
              <h4 className="text-white font-bold text-sm mb-2">{card.title}</h4>
              <div className="bg-blue-950/40 border border-blue-500/20 py-2 px-4 rounded-xl mb-4 text-xs text-zinc-300">
                <span>سعر الشراء: </span>
                <span className="text-emerald-400 font-bold">{card.priceUsdt}</span>
              </div>
              
              <button
                onClick={() => setSelectedCard(card)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-600/20 text-sm active:scale-95"
              >
                شراء الآن
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🌟 بطاقة العرض الاستثنائي (باقة النخبة) */}
      <div className="relative bg-gradient-to-b from-amber-950/40 via-zinc-900 to-black border-2 border-yellow-500/40 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl shadow-yellow-500/10">
        
        {/* شريط النص المتحرك الاحترافي */}
        <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black py-1.5 font-extrabold text-xs tracking-widest overflow-hidden whitespace-nowrap shadow-md">
          <div className="inline-block animate-[marquee_25s_linear_infinite]">
            <span className="mx-2">🔥 عرض استثنائي • كميات محدودة • قيمة أكبر • حضور أقوى • تجربة دفع رقمية بمستوى مختلف • </span>
            <span className="mx-2">🔥 عرض استثنائي • كميات محدودة • قيمة أكبر • حضور أقوى • تجربة دفع رقمية بمستوى مختلف • </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex-1 text-center lg:text-right space-y-4">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-1.5 rounded-full text-yellow-400 text-xs font-bold">
              <Star className="w-4 h-4 fill-yellow-400" /> باقة النخبة — العرض الاستثنائي
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
              بطاقة بقيمة <span className="text-yellow-400">$1,000</span>
            </h3>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl">
              فرصة استثنائية للحصول على بطاقة Visa افتراضية بقيمة $1,000 ضمن عرض خاص ومحدود.
            </p>

            <div className="bg-zinc-950/80 border border-yellow-500/20 p-4 rounded-2xl max-w-md space-y-2 text-xs md:text-sm text-zinc-300">
              <div className="flex justify-between">
                <span>القيمة الاسمية:</span>
                <span className="font-bold text-white">$1,000 USD</span>
              </div>
              <div className="flex justify-between border-t border-zinc-800/80 pt-2">
                <span>سعر العرض:</span>
                <span className="font-bold text-yellow-400 text-base">100 USDT</span>
              </div>
              <div className="flex justify-between border-t border-zinc-800/80 pt-2">
                <span>الحالة:</span>
                <span className="text-yellow-400 font-bold flex items-center gap-1">عرض خاص ⭐</span>
              </div>
            </div>

            <p className="italic text-yellow-400/90 text-xs md:text-sm">
              «قيمة أكبر. حضور أقوى. تجربة دفع رقمية بمستوى مختلف.»
            </p>

            <div className="pt-2">
              <button
                onClick={() => setSelectedCard(vipCardData)}
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-extrabold px-10 py-4 rounded-xl transition duration-200 shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2 text-base mx-auto lg:mx-0 active:scale-95"
              >
                <Sparkles className="w-5 h-5" /> احصل على العرض الآن
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center w-full max-w-sm">
            <VisaCard3D amount="1,000" isVip={true} />
          </div>

        </div>
      </div>

      {/* النافذة المنبثقة */}
      {selectedCard && (
        <PaymentModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </section>
  );
}