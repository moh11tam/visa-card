import React from 'react';
import { Shield, Zap, CreditCard, Globe } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="border-t border-zinc-900 bg-zinc-950/50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار بطاقاتنا؟</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Zap className="text-blue-400" />, title: "تسليم سريع", desc: "استلم بيانات بطاقتك بعد إتمام عملية الشراء فوراً." },
            { icon: <Shield className="text-blue-400" />, title: "حماية وخصوصية", desc: "لا تحتاج إلى مشاركة معلومات بطاقتك البنكية الشخصية." },
            { icon: <CreditCard className="text-blue-400" />, title: "جاهزة للاستخدام", desc: "بطاقات افتراضية مشحونة مسبقاً حسب القيمة الموضحة." },
            { icon: <Globe className="text-blue-400" />, title: "دفع إلكتروني", desc: "استخدم البطاقة لدى المواقع والخدمات العالمية." }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}