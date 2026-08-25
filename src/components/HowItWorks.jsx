import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">كيف تتم عملية الشراء؟</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { step: "01", title: "اختر البطاقة", desc: "حدد قيمة Visa الافتراضية التي تناسب احتياجاتك." },
          { step: "02", title: "أكمل الدفع", desc: "أتمم طلبك عبر بايبال بالطريقة المتاحة." },
          { step: "03", title: "استلم البطاقة", desc: "بعد تأكيد الطلب، تحصل على بيانات البطاقة مباشرة." }
        ].map((item, idx) => (
          <div key={idx} className="bg-zinc-900/20 p-8 rounded-2xl border border-zinc-800">
            <span className="text-4xl font-black text-blue-500/40 block mb-4">{item.step}</span>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
