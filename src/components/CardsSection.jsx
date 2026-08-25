import React from 'react';
import VisaCard3D from './VisaCard3D';

export default function CardsSection() {
  const cardsData = [
    { balance: "10", pricePaypal: "5$ بايبال" },
    { balance: "25", pricePaypal: "10$ بايبال" },
    { balance: "50", pricePaypal: "25$ بايبال" },
    { balance: "100", pricePaypal: "50$ بايبال" },
  ];

  return (
    <section id="cards" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">اختر البطاقة المناسبة لك</h2>
        <p className="text-zinc-400 mt-2">جميع البطاقات باللون الأزرق الافتراضي وجاهزة للتسليم</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardsData.map((card, idx) => (
          <div key={idx} className="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition flex flex-col justify-between items-center text-center">
            <div className="w-full mb-4">
              <VisaCard3D amount={card.balance} />
            </div>
            
            <div className="w-full mt-2">
              <div className="bg-blue-950/60 border border-blue-500/30 py-2 px-4 rounded-xl mb-4">
                <span className="text-xs text-zinc-400 block">سعر الشراء:</span>
                <span className="text-lg font-bold text-blue-400">{card.pricePaypal}</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-600/20">
                شراء الآن
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}