import React, { useState } from 'react';
import VisaCard3D from './VisaCard3D'; // استدعاء المجسم الذي أرسلته
import PaymentModal from './PaymentModal'; // استدعاء النافذة المنبثقة

export default function VisaSection() {
  // 1. حالة فتح النافذة المنبثقة لبطاقات الفيزا
  const [selectedCard, setSelectedCard] = useState(null);

  // 2. بيانات بطاقات الفيزا (بالدولار $)
  const visaCards = [
    { id: 'v10', title: 'Visa Virtual Card', balance: '10', priceUsdt: '5', originalPrice: '10 USDT', currency: '$' },
    { id: 'v25', title: 'Visa Virtual Card', balance: '25', priceUsdt: '12', originalPrice: '25 USDT', currency: '$' },
    { id: 'v50', title: 'Visa Virtual Card', balance: '50', priceUsdt: '25', originalPrice: '50 USDT', currency: '$' },
    { id: 'v100', title: 'Visa Virtual Card', balance: '100', priceUsdt: '50', originalPrice: '100 USDT', currency: '$' },
  ];

  // العرض الذهبي VIP
  const vipVisaCard = {
    id: 'v1000',
    title: 'Visa Elite VIP Gold',
    balance: '1000',
    priceUsdt: '450',
    originalPrice: '1000 USDT',
    currency: '$',
    isVip: true
  };

  return (
    <section className="bg-black text-white py-12 px-4 border-t border-zinc-900">
      <h2 className="text-3xl font-bold text-blue-400 mb-8 text-right">💳 بطاقات Visa (USD)</h2>

      {/* عرض البطاقات العادية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {visaCards.map((card) => (
          <div key={card.id} className="bg-zinc-950 p-4 rounded-3xl border border-zinc-800 space-y-4 text-center">
            
            {/* هنا نستخدم مكونك VisaCard3D لعرض شكل البطاقة فقط */}
            <VisaCard3D amount={card.balance} isVip={false} />

            <div className="flex justify-between items-center bg-zinc-900 p-3 rounded-xl text-sm">
              <span className="text-zinc-500 line-through">{card.originalPrice}</span>
              <span className="text-blue-400 font-bold">{card.priceUsdt} USDT</span>
            </div>

            {/* عند الضغط يتم حفظ بيانات البطاقة لتفتح النافذة المنبثقة */}
            <button
              onClick={() => setSelectedCard(card)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl transition"
            >
              شراء البطاقة
            </button>
          </div>
        ))}
      </div>

      {/* عرض بطاقة VIP الذهبية */}
      <div className="max-w-md mx-auto mt-12 bg-zinc-950 p-6 rounded-3xl border border-amber-500/40 text-center space-y-4">
        <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-bold">عرض VIP خاص</span>
        
        {/* نستخدم مكونك مرتين ولكن مع إعطائه isVip={true} */}
        <VisaCard3D amount={vipVisaCard.balance} isVip={true} />

        <button
          onClick={() => setSelectedCard(vipVisaCard)}
          className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-3 rounded-xl transition"
        >
          شراء بطاقة VIP بـ 450 USDT
        </button>
      </div>

      {/* 3. النافذة المنبثقة تفتح فقط عندما تختار بطاقة فيزا */}
      {selectedCard && (
        <PaymentModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </section>
  );
}