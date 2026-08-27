import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Faq() {
  const faqs = [
    { q: "ما هي Visa الافتراضية؟", a: "هي بطاقة دفع إلكترونية لا تحتاج إلى بطاقة بلاستيكية فعلية، وتحتوي على بيانات يمكن استخدامها لدى الجهائئئئت التي تقبلها وفق شروط البطاقة." },
    { q: "متى أستلم البطاقة؟", a: "يتم تسليم بيانات البطاقة فوراً بعد تأكيد عملية الدفع عبر بايبال." },
    { q: "هل يمكنني استخدامها في جميع المواقع؟", a: "قبول البطاقة يعتمد على الموقع أو الخدمة ونوع البطاقة والبلد وسياسات الجهة المستقبلة." },
    { q: "هل يمكن استرجاع قيمة البطاقة بعد الشراء؟", a: "نظراً لطبيعة المنتجات الرقمية، لا يمكن الاسترجاع بعد كشف بيانات البطاقة إلا في حال وجود خلل فني." }
  ];

  return (
    <section id="faq" className="border-t border-zinc-900 bg-zinc-950/50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">شراء واضح. خدمة بسيطة.</h2>
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-blue-400 font-medium">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> قيمة البطاقة واضحة</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> شروط الاستخدام موضحة</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> دعم العملاء متوفر</span>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <h4 className="font-bold text-lg text-blue-400 mb-2">{faq.q}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}