import React from 'react';
import { Tv, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Film } from 'lucide-react';

export default function NetflixSection({ onSelectCard }) {

  const netflixCards = [
    {
      id: 'netflix_1m',
      title: "اشتراك Netflix شهري",
      subtitle: "حساب خاص / شاشة واحدة",
      duration: "شهر واحد",
      balance: "5$", 
      priceUsdt: "5",
      price: "5",
      badge: "الأكثر طلباً",
      features: [
        "جودة Ultra HD 4K عالية الوضوح",
        "ملف شخصي خاص برقم سرّي (PIN)",
        "ضمان كامل طوال فترة الاشتراك",
        "يعمل على جميع الأجهزة الذكية"
      ],
      glow: "border-red-600/30 hover:border-red-500 shadow-red-600/10"
    },
    {
      id: 'netflix_3m',
      title: "اشتراك Netflix ربع سنوي",
      subtitle: "حساب كامل خَاص 4 شاشات",
      duration: "3 أشهر",
      balance: "12$",
      priceUsdt: "12",
      price: "12",
      badge: "توفير ممتاز",
      features: [
        "حساب كامل خاص بك 100%",
        "4 شاشات تعمل في نفس الوقت",
        "جودة 4K HDR + الصوت المحيطي",
        "إمكانية تغيير كلمات السر والبيانات"
      ],
      glow: "border-red-500/40 hover:border-red-400 shadow-red-500/20"
    },
    {
      id: 'netflix_1y',
      title: "اشتراك Netflix سنوي",
      subtitle: "باقة VIP للمجموعات والعائلات",
      duration: "12 شهرًا",
      balance: "40$",
      priceUsdt: "40",
      price: "40",
      badge: "الباقة الكبرى",
      features: [
        "حساب خاص كامل بجميع الشاشات",
        "تجديد تلقائي وضمان سنة كاملة",
        "دعم فني واستبدال فوري VIP",
        "تحميل غير محدود للمشاهدة بدون إنترنت"
      ],
      glow: "border-amber-500/40 hover:border-amber-400 shadow-amber-500/20"
    }
  ];

  return (
    <section id="netflix-section" className="py-20 bg-black text-white relative overflow-hidden select-none scroll-mt-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-sm font-semibold mb-4">
            <Film className="w-4 h-4 text-red-500" />
            <span>اشتراكات Netflix الرسمية والمدفوعة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            حسابات <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-400 bg-clip-text text-transparent">Netflix</span> المشفرة والمدفوعة
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            استمتع بأحدث الأفلام والمسلسلات بجودة 4K عالية الوضوح مع تسليم فوري وضمان شامل طوال مدة الاشتراك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {netflixCards.map((card) => (
            <div
              key={card.id}
              className={`relative bg-zinc-900/80 border ${card.glow} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl flex flex-col justify-between group shadow-xl`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400">
                    {card.badge}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                    <Tv className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-zinc-400">{card.subtitle}</p>
                </div>

                <div className="my-6 p-4 rounded-2xl bg-black/60 border border-zinc-800 flex items-baseline justify-between">
                  <span className="text-zinc-400 text-xs font-semibold uppercase">المدة: {card.duration}</span>
                  <div className="text-3xl font-black text-emerald-400">
                    {card.priceUsdt} <span className="text-sm font-sans text-emerald-500">USDT</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {card.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* زر الشراء والتمرير للحالة */}
              <button
                onClick={() => onSelectCard && onSelectCard(card)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-red-600/20 cursor-pointer"
              >
                <span>شراء الآن</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-wrap items-center justify-around gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span>تسليم فوري لمعلومات الحساب بعد الدفع مباشرة</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>ضمان استبدال كامل طوال فترة الاشتراك</span>
          </div>
        </div>

      </div>
    </section>
  );
}