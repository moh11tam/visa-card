import React, { useState } from 'react';
import { CreditCard, Flame, Coins, Zap, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import PaymentModal from './PaymentModal';

export default function MastercardSection() {
  const [selectedCard, setSelectedCard] = useState(null);

  // بطاقات Mastercard باليورو (€)
  const mastercardCards = [
    { 
      id: 'mc10', 
      title: 'Mastercard Virtual €10', 
      type: 'mastercard', 
      balance: 10, 
      currency: 'EUR', 
      priceUsdt: '6 USDT', 
      price: '6',
      originalPrice: '10 USDT', 
      cardBg: 'from-slate-900 via-emerald-950 to-zinc-900', 
      accent: 'emerald' 
    },
    { 
      id: 'mc25', 
      title: 'Mastercard Virtual €25', 
      type: 'mastercard', 
      balance: 25, 
      currency: 'EUR', 
      priceUsdt: '12 USDT', 
      price: '12',
      originalPrice: '25 USDT', 
      cardBg: 'from-zinc-900 via-teal-950 to-zinc-900', 
      accent: 'emerald' 
    },
    { 
      id: 'mc50', 
      title: 'Mastercard Virtual €50', 
      type: 'mastercard', 
      balance: 50, 
      currency: 'EUR', 
      priceUsdt: '30 USDT', 
      price: '30',
      originalPrice: '50 USDT', 
      cardBg: 'from-zinc-900 via-emerald-900 to-black', 
      accent: 'emerald' 
    },
    { 
      id: 'mc100', 
      title: 'Mastercard Virtual €100', 
      type: 'mastercard', 
      balance: 100, 
      currency: 'EUR', 
      priceUsdt: '70 USDT', 
      price: '70',
      originalPrice: '100 USDT', 
      cardBg: 'from-emerald-950 via-zinc-900 to-black', 
      accent: 'emerald' 
    }
  ];

  // العرض الاستثنائي €1,000 باللون الأصفر الذهبي VIP
  const specialOffer = {
    id: 'mc1000',
    title: 'Mastercard Virtual VIP Gold €1,000',
    type: 'mastercard',
    balance: '1,000',
    currency: 'EUR',
    priceUsdt: '500 USDT',
    price: '500',
    originalPrice: '1000 USDT'
  };

  return (
    <div id="mastercard-tiktok-section" className="bg-black text-white py-14 px-4 border-t border-zinc-900 space-y-16 selection:bg-amber-500 selection:text-black">
      
      {/* 🚀 1. الهيدر الإعلاني الرئيسي */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-emerald-500/40 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-emerald-400" /> بطاقاتك الرقمية، بسعر استثنائي
        </div>

        <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
          دفع أكثر. تكلفة أقل. <span className="text-emerald-400">حرية أكبر.</span>
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          اكتشف مجموعة مختارة من بطاقات Visa وMastercard الافتراضية تحمل رصيد اليورو بأقل التكاليف بقيم مختلفة، مصممة لتمنحك وصولًا أسهل إلى عالم المدفوعات والخدمات الرقمية.
        </p>

        <p className="text-xs text-zinc-300 font-medium">
          اختر القيمة التي تناسبك، ادفع بـ <span className="text-emerald-400 font-bold">USDT</span>، واستفد من عروضنا الخاصة حول رصيد EUR.
        </p>

        <div className="pt-2">
          <a 
            href="#mastercard-list" 
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:scale-105"
          >
            [ اكتشف البطاقات ]
          </a>
        </div>
      </section>

      {/* 🪙 2. قسم شحن TikTok Coins بأقل تكلفة */}
      <section id="tiktok" className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-amber-950/30 border border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-5 text-center md:text-right relative overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full text-xs font-bold">
            <Coins className="w-4 h-4" /> 🪙 اشحن TikTok Coins بأقل تكلفة
          </div>

          <h3 className="text-2xl md:text-4xl font-extrabold text-white">
            حوّل رصيدك إلى تجربة TikTok أكبر
          </h3>

          <p className="text-zinc-300 text-sm leading-relaxed">
            هل تنفق الكثير على TikTok Coins؟ مع عروضنا الرقمية، يمكنك الحصول على بطاقات شحن وقيم رقمية بأسعار تنافسية، والاستفادة من تخفيضات تصل إلى <span className="text-amber-400 font-bold">80%</span> على عروض محددة.
          </p>

          <div className="bg-zinc-950/80 border border-amber-500/20 p-4 rounded-2xl text-amber-300 font-semibold text-xs md:text-sm italic text-center shadow-inner">
            «رصيد أكبر. تكلفة أقل. المزيد من Coins لتجربتك على TikTok.»
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <a 
              href="#mastercard-list"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs md:text-sm px-6 py-3 rounded-xl transition-all text-center shadow-lg shadow-amber-500/20 hover:scale-105"
            >
              [ اكتشف عروض TikTok ]
            </a>
            <span className="text-[11px] text-zinc-500">
              الأسعار والتخفيضات تختلف حسب البطاقة والعرض، وتطبق الشروط.
            </span>
          </div>
        </div>
      </section>

      {/* 💳 3. قسم بطاقات Mastercard (EUR) */}
      <section id="mastercard-list" className="max-w-7xl mx-auto space-y-8">
        <div className="text-right">
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 flex items-center gap-2">
            <CreditCard className="w-7 h-7" /> 💳 Mastercard — EUR
          </h3>
          <p className="text-xs md:text-sm text-zinc-400 mt-1">
            رصيد باليورو. قيمة أفضل. اختر بطاقتك:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mastercardCards.map((card) => (
            <div 
              key={card.id} 
              className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-emerald-500/60 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/15 flex flex-col justify-between space-y-6 overflow-hidden"
            >
              {/* مجسم البطاقة */}
              <div className={`w-full aspect-[1.58/1] rounded-2xl bg-gradient-to-tr ${card.cardBg} p-4 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform`}>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

                <div className="flex justify-between items-start z-10">
                  <div className="w-9 h-7 bg-amber-400/80 rounded-md border border-amber-300/50 flex items-center justify-center shadow-inner">
                    <div className="w-full h-[1px] bg-amber-900/40 my-[2px]"></div>
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-emerald-400 font-bold uppercase">Virtual</span>
                </div>

                <div className="z-10">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider">Balance</div>
                  <div className="text-2xl font-black text-white font-mono tracking-tight">€{card.balance}.00</div>
                </div>

                <div className="flex justify-between items-end z-10">
                  <div className="text-[9px] font-mono text-zinc-400 tracking-widest">•••• •••• •••• {card.balance}</div>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-red-500/90 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-amber-500/90 shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* التسعير والتخفيض */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm bg-zinc-950 p-3 rounded-2xl border border-zinc-800">
                  <span className="text-zinc-500 line-through font-mono text-xs">{card.originalPrice}</span>
                  <span className="text-emerald-400 font-extrabold text-base">{card.priceUsdt}</span>
                </div>

                <button
                  onClick={() => setSelectedCard(card)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-95 text-xs"
                >
                  [ شراء البطاقة ]
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 4. العرض الاستثنائي €1,000 */}
      <section className="max-w-4xl mx-auto">
        <div className="relative group bg-gradient-to-br from-amber-950/80 via-zinc-900 to-amber-900/50 border-2 border-amber-500/70 rounded-3xl p-6 md:p-10 text-center space-y-6 shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden">
          
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-1.5 text-amber-300 font-extrabold text-xs bg-amber-500/20 border border-amber-500/50 px-4 py-1.5 rounded-full shadow-lg">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" /> 🔥 العرض الاستثنائي — عرض محدود
          </div>

          <div className="max-w-md mx-auto aspect-[1.58/1] rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-6 text-black border border-amber-200/60 shadow-2xl flex flex-col justify-between relative transform group-hover:scale-105 transition-transform duration-500 my-4 text-right">
            
            <div className="flex justify-between items-start">
              <div className="w-11 h-8 bg-black/80 rounded-lg border border-amber-400/60 flex items-center justify-center">
                <div className="w-full h-[2px] bg-amber-400/60 my-[2px]"></div>
              </div>
              <span className="text-xs font-black font-mono tracking-widest bg-black text-amber-400 px-2 py-0.5 rounded">VIP GOLD</span>
            </div>

            <div>
              <div className="text-[11px] text-zinc-900 font-extrabold uppercase tracking-wider">PREMIUM CARD BALANCE</div>
              <div className="text-4xl font-black font-mono tracking-tight text-black">€1,000</div>
            </div>

            <div className="flex justify-between items-end">
              <div className="text-xs font-mono font-bold text-zinc-900 tracking-widest">•••• •••• •••• 1000</div>
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-red-600 shadow-md"></div>
                <div className="w-7 h-7 rounded-full bg-amber-600 shadow-md"></div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-amber-300 tracking-wide drop-shadow-md">
            €1,000 Mastercard VIP
          </h3>

          <p className="text-zinc-200 text-base md:text-lg">
            احصل عليها مقابل <span className="text-amber-400 font-black text-3xl underline underline-offset-8">500 USDT</span>
          </p>

          <div className="bg-black/80 border border-amber-500/40 p-4 rounded-2xl max-w-sm mx-auto text-xs space-y-1 text-zinc-300 shadow-inner">
            <p className="flex justify-between"><span>قيمة البطاقة:</span> <span className="text-white font-bold">€1,000</span></p>
            <p className="flex justify-between"><span>سعر العرض:</span> <span className="text-amber-400 font-bold">500 USDT</span></p>
          </div>

          <p className="text-amber-400 text-xs md:text-sm font-extrabold tracking-wide">
            عرض محدود — لا تفوّت الفرصة
          </p>

          <p className="text-zinc-400 text-xs max-w-md mx-auto">
            باقة استثنائية مخصصة لمن يبحث عن قيمة أعلى ضمن عرض واحد.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setSelectedCard(specialOffer)}
              className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black py-4 px-10 rounded-2xl transition-all shadow-xl shadow-amber-500/30 text-sm md:text-base hover:scale-105 active:scale-95"
            >
              [ احصل على العرض الآن ]
            </button>
          </div>

          <p className="text-[10px] text-zinc-500 pt-2">
            العرض متاح وفق المخزون والشروط المحددة للبطاقة.
          </p>
        </div>
      </section>

      {/* ⚡ 5. لماذا تشتري منا؟ */}
      <section className="max-w-6xl mx-auto border-t border-zinc-900 pt-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-amber-400" /> ⚡ لماذا تشتري منا؟
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-right">
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-2 hover:border-emerald-500/40 transition">
            <h4 className="font-bold text-emerald-400 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> أسعار تنافسية
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              عروض مصممة لتمنحك قيمة أكبر مقابل المبلغ الذي تدفعه.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-2 hover:border-blue-500/40 transition">
            <h4 className="font-bold text-blue-400 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> اختيارات متعددة
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Visa وMastercard وقيم مختلفة تناسب احتياجاتك.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-2 hover:border-amber-500/40 transition">
            <h4 className="font-bold text-amber-400 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> تجربة بسيطة
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              اختر بطاقتك، أتمم الدفع، واتبع خطوات استلام المنتج.
            </p>
          </div>
        </div>
      </section>

      {/* 🌐 6. الفوتر الختامي */}
      <footer className="text-center pt-8 border-t border-zinc-900 space-y-2">
        <div className="flex justify-center items-center gap-2 text-zinc-300 text-sm font-bold">
          <Globe className="w-4 h-4 text-emerald-400" />
          <span>🌐 عالمك الرقمي يبدأ من هنا</span>
        </div>
        <div className="text-xs text-zinc-500 font-mono">
          Visa • Mastercard • TikTok • Digital Payments
        </div>
        <p className="text-xs text-zinc-600">
          كل ما تحتاجه من بطاقات وقيم رقمية في مكان واحد.
        </p>
      </footer>

      {/* 💳 Modal الدفع التفاعلي */}
      {selectedCard && (
        <PaymentModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}