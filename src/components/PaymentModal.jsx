import React, { useState } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';

// === الشعارات الرسمية المتجهة (SVGs) ===

// 1. PayPal Logo
const PaypalIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 3.72a.76.76 0 01.751-.641h6.777c2.477 0 4.364.633 5.432 1.828.985 1.101 1.252 2.656.772 4.498-.795 3.047-2.923 5.174-5.918 5.768-.532.105-1.077.158-1.631.158H8.818a.76.76 0 00-.75.64l-.992 6.366z" fill="#003087"/>
    <path d="M8.818 15.332h2.316c2.995-.594 5.123-2.721 5.918-5.768.48-1.842.213-3.397-.772-4.498-.444-.496-1.03-.873-1.745-1.134a9.927 9.927 0 012.75 3.847c.48 1.842.213 3.397-.772 4.498-.795 3.047-2.923 5.174-5.918 5.768-.532.105-1.077.158-1.631.158H6.685a.76.76 0 01-.75-.64l-1.09-6.994 3.973.763z" fill="#0079C1"/>
    <path d="M8.068 15.972l1.243-7.97h5.183c1.983 0 3.491.506 4.346 1.462.788.881 1.002 2.125.618 3.599-.636 2.437-2.338 4.139-4.734 4.614-.426.084-.862.127-1.305.127H10.51a.76.76 0 01-.75-.64l-.759 4.868-.933-6.06z" fill="#00457C"/>
  </svg>
);

// 2. Binance Pay Logo
const BinanceIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L6.5 7.5L9.3 10.3L12 7.6L14.7 10.3L17.5 7.5L12 2Z" fill="#F0B90B"/>
    <path d="M2 12L4.8 9.2L7.6 12L4.8 14.8L2 12Z" fill="#F0B90B"/>
    <path d="M12 22L17.5 16.5L14.7 13.7L12 16.4L9.3 13.7L6.5 16.5L12 22Z" fill="#F0B90B"/>
    <path d="M22 12L19.2 14.8L16.4 12L19.2 9.2L22 12Z" fill="#F0B90B"/>
    <path d="M12 13.7L13.7 12L12 10.3L10.3 12L12 13.7Z" fill="#F0B90B"/>
  </svg>
);

// 3. Bybit Pay Logo
const BybitIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#17181E"/>
    <path d="M6 6H10.5C12.5 6 14 7.2 14 9C14 10.2 13.2 11.2 12 11.7C13.5 12.2 14.5 13.4 14.5 15C14.5 17 12.8 18 10.5 18H6V6Z" fill="#F7A600"/>
    <path d="M14.5 6H18V18H14.5V6Z" fill="#17181E"/>
    <path d="M16 6H18.5V18H16V6Z" fill="#F7A600"/>
  </svg>
);

// 4. USDT (Tether) Logo
const UsdtIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#26A17B"/>
    <path d="M13.4 11.45V9.45H16.5V7.5H7.5V9.45H10.6V11.45C8.38 11.56 6.7 12.03 6.7 12.6C6.7 13.22 8.5 13.72 11 13.82V17.5H13V13.82C15.5 13.72 17.3 13.22 17.3 12.6C17.3 12.03 15.62 11.56 13.4 11.45ZM12 13.15C9.8 13.15 8.35 12.81 8.35 12.6C8.35 12.39 9.8 12.05 12 12.05C14.2 12.05 15.65 12.39 15.65 12.6C15.65 12.81 14.2 13.15 12 13.15Z" fill="white"/>
  </svg>
);


export default function PaymentModal({ card, onClose }) {
  const [step, setStep] = useState('methods'); // methods | usdt_networks | binance_pay | verifying
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');

  const handleClose = () => {
    setStep('methods');
    onClose();
  };

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
    if (method === 'USDT') {
      setStep('usdt_networks');
    } else if (method === 'Binance Pay') {
      setStep('binance_pay');
    } else {
      setStep('verifying');
    }
  };

  const handleSelectNetwork = (network) => {
    setSelectedNetwork(network);
    setStep('verifying');
  };

  const paymentMethods = [
    { name: "PayPal", desc: "الدفع الآمن عبر PayPal", icon: <PaypalIcon /> },
    { name: "Binance Pay", desc: "ادفع مباشرة عبر Binance Pay", icon: <BinanceIcon /> },
    { name: "Bybit Pay", desc: "الدفع باستخدام محفظة Bybit", icon: <BybitIcon /> },
    { name: "USDT", desc: "الدفع بواسطة العملات الرقمية USDT", icon: <UsdtIcon /> }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg p-6 relative shadow-2xl text-white dir-rtl" dir="rtl">
        
        {/* زر الإغلاق */}
        <button onClick={handleClose} className="absolute top-4 left-4 text-zinc-400 hover:text-white transition">
          <X className="w-6 h-6" />
        </button>

        {/* الخطوة 1: اختيار طريقة الدفع */}
        {step === 'methods' && (
          <div>
            <h3 className="text-xl font-bold mb-1 text-center">اختر طريقة الدفع</h3>
            <p className="text-zinc-400 text-xs text-center mb-6">
              شراء بطاقة بقيمة <span className="text-blue-400 font-bold">${card.balance} USD</span>
            </p>

            <div className="space-y-3">
              {paymentMethods.map((method, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectMethod(method.name)}
                  className="w-full flex items-center justify-between bg-zinc-800/60 hover:bg-blue-600/10 hover:border-blue-500/50 border border-zinc-700/50 p-4 rounded-xl transition group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-700 group-hover:border-blue-500/40 transition">
                      {method.icon}
                    </div>
                    <div className="text-right">
                      <h4 className="font-bold text-sm text-white group-hover:text-blue-400 transition">{method.name}</h4>
                      <p className="text-xs text-zinc-400">{method.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 rotate-180 transition" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* الخطوة 2 (فرعي): اختيار شبكة USDT */}
        {step === 'usdt_networks' && (
          <div>
            <button onClick={() => setStep('methods')} className="text-xs text-blue-400 mb-4 flex items-center gap-1 hover:underline">
              ← العودة لطرق الدفع
            </button>
            <h3 className="text-xl font-bold mb-1 text-center">اختر شبكة التحويل (USDT)</h3>
            <p className="text-zinc-400 text-xs text-center mb-6">المبلغ المطلوب: <span className="text-emerald-400 font-bold">{card.priceUsdt}</span></p>

            <div className="space-y-3">
              {[
                { name: "TRC20", desc: "شبكة TRON (عمولة منخفضة وسريعة)" },
                { name: "BEP20", desc: "شبكة BNB Smart Chain" },
                { name: "ERC20", desc: "شبكة Ethereum" }
              ].map((net, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectNetwork(net.name)}
                  className="w-full flex items-center justify-between bg-zinc-800/60 hover:bg-emerald-600/10 hover:border-emerald-500/50 border border-zinc-700/50 p-4 rounded-xl transition group text-right"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-700">
                      <UsdtIcon />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-emerald-400 transition">{net.name}</h4>
                      <p className="text-xs text-zinc-400">{net.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 rotate-180 transition" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* الخطوة 2 (فرعي): صفحة Binance Pay */}
        {step === 'binance_pay' && (
          <div className="text-center py-4">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-zinc-800 rounded-2xl border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
                <BinanceIcon />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">أكمل عملية الدفع عبر Binance Pay</h3>
            
            <div className="bg-zinc-800/60 p-4 rounded-xl border border-zinc-700/70 my-4 text-sm">
              <p className="text-zinc-400">البطاقة المطلوبة: <span className="text-white font-bold">${card.balance} USD</span></p>
              <p className="text-zinc-400 mt-1">المبلغ المستحق للدفع: <span className="text-yellow-400 font-bold text-lg">{card.priceUsdt}</span></p>
            </div>

            <button
              onClick={() => setStep('verifying')}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition shadow-lg shadow-yellow-500/20"
            >
              الدفع عبر Binance Pay
            </button>
          </div>
        )}

        {/* الخطوة الأخيرة: التحقق من العملية */}
        {step === 'verifying' && (
          <div className="text-center py-8 space-y-4">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto" />
            <h3 className="text-xl font-bold">جارٍ التحقق من عملية الدفع...</h3>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto">
              يرجى الإنتظار لحظات لربط العملية وتأكيد إصدار بيانات بطاقة Visa الافتراضية الخاصة بك.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}