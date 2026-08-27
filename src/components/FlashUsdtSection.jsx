import React from 'react';
import { Zap, CheckCircle2, ShieldCheck, ArrowRight, Flame } from 'lucide-react';

// أضفنا onSelectCard هنا كـ prop
export default function FlashUsdtSection({ onSelectCard }) {
  const normalCards = [
    {
      title: "Flash USDT Card",
      amount: "10,000",
      price: "100",
      bonus: "تسليم فوري",
      features: ["ثبات في المحفظة 100%", "دعم شبكة TRC-20", "معاملة آمنة ومضمونة", "دعم فني 24/7"],
      badge: "الأكثر طلباً"
    },
    {
      title: "Flash USDT Card",
      amount: "25,000",
      price: "250",
      bonus: "تسليم فوري + بونص 5%",
      features: ["ثبات في المحفظة 100%", "دعم شبكة TRC-20", "أولوية المعالجة والتنفيذ", "دعم فني خاص VIP"],
      badge: "خيار مميز"
    },
    {
      title: "Flash USDT Card",
      amount: "50,000",
      price: "500",
      bonus: "تسليم فوري + بونص 10%",
      features: ["ثبات في المحفظة 100%", "دعم جميع الشبكات (TRC20/ERC20)", "تأكيد فوري لشبكة البلوكشين", "مدير حساب خاص"],
      badge: "الباقة الكبرى"
    }
  ];

  const vipCard = {
    title: "VIP Flash USDT Card",
    amount: "100,000",
    price: "1000",
  };

  return (
    <section id="flash-usdt" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-4">
            <Zap className="w-4 h-4 text-blue-400 fill-blue-400/20" />
            <span>عروض Flash USDT الحصرية</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            بطاقات <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent">Flash USDT</span> الفورية
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            اختر الباقة المناسبة لك واحصل على أرصدة الفلاش المشفرة فوراً بأسعار استثنائية وبأعلى مستويات الأمان.
          </p>
        </div>

        {/* شبكة البطاقات الثلاث الأولى */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {normalCards.map((card, idx) => (
            <div 
              key={idx}
              className="relative group bg-zinc-900/60 border border-blue-500/20 hover:border-blue-500/60 rounded-3xl p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl shadow-black/50"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400">
                    {card.badge}
                  </span>
                  <Zap className="w-6 h-6 text-blue-500" />
                </div>

                <div className="mb-4">
                  <span className="text-gray-400 text-sm block mb-1">رصيد البطاقة</span>
                  <div className="text-3xl font-black text-white flex items-baseline gap-2">
                    {card.amount} <span className="text-lg text-blue-400 font-semibold">Flash USDT</span>
                  </div>
                </div>

                <div className="my-6 p-4 rounded-2xl bg-black/50 border border-white/5 flex items-baseline justify-between">
                  <span className="text-gray-400 text-sm">السعر المطلوب:</span>
                  <span className="text-2xl font-extrabold text-emerald-400">{card.price} USDT</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {card.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* زر فتح النافذة المنبثقة */}
              <button 
                onClick={() => onSelectCard && onSelectCard(card)}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-center transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 group-hover:shadow-blue-600/40"
              >
                <span>شراء الآن</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          ))}
        </div>

        {/* البطاقة الرابعة الاستثنائية VIP */}
        <div className="relative rounded-3xl p-1 p-[2px] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 shadow-2xl shadow-amber-500/20">
          <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black rounded-[22px] p-8 md:p-12 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs md:text-sm font-bold animate-pulse">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>عرض محدود وحصري VIP</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  100,000 <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Flash USDT</span>
                </h3>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  الحزمة الفاخرة المخصصة للمستثمرين وكبار التجار. احصل على أقصى رصيد فلاش ممكن بخصم هائل ومعالجة فورية ومباشرة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>ضمان النقل الكامل 100%</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>تأكيد فوري على الـ Blockchain</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>دعم شبكات TRC20 / ERC20 / BEP20</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>مدير VIP خاص لمعالجة طلبك</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-zinc-900/90 border border-amber-500/30 rounded-2xl p-6 md:p-8 text-center space-y-6 backdrop-blur-md shadow-2xl">
                  <div className="text-sm text-gray-400 font-semibold">سعر العرض الخاص</div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl md:text-5xl font-black text-amber-400">1,000</span>
                    <span className="text-xl font-bold text-gray-300">USDT</span>
                  </div>

                  <div className="text-xs text-amber-300/80 bg-amber-500/10 py-2 px-4 rounded-lg border border-amber-500/20">
                    وفر أكثر من 90% مقارنة بالقيمة الإسمية!
                  </div>

                  {/* زر فتح النافذة للبطاقة الاستثنائية */}
                  <button 
                    onClick={() => onSelectCard && onSelectCard(vipCard)}
                    className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-lg text-center transition flex items-center justify-center gap-3 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40"
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
    </section>
  );
}