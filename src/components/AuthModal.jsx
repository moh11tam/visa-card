import React, { useState } from 'react';
import { X, Mail, CheckCircle, Copy, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

export default function AuthModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [userRefLink, setUserRefLink] = useState(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  // توليد كود إحالة عشوائي
  const generateRefCode = () => {
    return 'REF-' + Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg('');

    try {
      // 1. البحث عن المستخدم بدون إلزام .single() لتجنب رمي خطأ PGRST116
      const { data: users, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email);

      if (fetchError) throw fetchError;

      let refCode = '';

      // 2. إذا كان المستخدم موجوداً
      if (users && users.length > 0) {
        refCode = users[0].referral_code;
      } else {
        // 3. إذا لم يكن موجوداً، قم بإنشاء حساب جديد وتوليد كود إحالة
        refCode = generateRefCode();
        const { error: insertError } = await supabase
          .from('users')
          .insert([{ email, referral_code: refCode, referral_count: 0 }]);

        if (insertError) throw insertError;
      }

      // 4. إنشاء رابط الإحالة الكامل
      const generatedLink = `${window.location.origin}?ref=${refCode}`;
      setUserRefLink(generatedLink);
    } catch (err) {
      console.error('Supabase Auth Error:', err);
      setErrorMsg('حدث خطأ أثناء الاتصال بقاعدة البيانات. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (userRefLink) {
      navigator.clipboard.writeText(userRefLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-zinc-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* توهج خلفية ذهبي */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {!userRefLink ? (
          /* 📧 نموذج إدخال البريد الإلكتروني */
          <div className="space-y-5 text-right relative z-10">
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-1">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-white">تسجيل الدخول للاشتراك</h3>
              <p className="text-xs text-zinc-400">
                أدخل بريدك الإلكتروني للحصول على رابط الإحالة الخاص بك والبدء في ربح بطاقة 50$ 💵
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 text-xs rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2">البريد الإلكتروني</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-blue-500 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none transition-all dir-ltr text-right"
                  />
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-zinc-500" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>توليد رابط الإحالة</span>
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* 🎉 عرض رابط الإحالة المولّد للمستخدم */
          <div className="space-y-5 text-center relative z-10">
            <div className="inline-flex p-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-white">تم تجهيز رابطك بنجاح!</h3>
              <p className="text-xs text-zinc-400">
                شارك هذا الرابط مع أصدقائك. عند انضمام 10 أشخاص ستصلك بطاقة Virtual Visa بقيمة 50$ تلقائياً!
              </p>
            </div>

            {/* صندوق الرابط مع زر النسخ */}
            <div className="bg-zinc-950 border border-amber-500/30 rounded-2xl p-3 flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={userRefLink}
                className="bg-transparent border-none text-xs text-amber-300 w-full focus:outline-none font-mono dir-ltr select-all"
              />
              <button
                onClick={copyToClipboard}
                className="shrink-0 bg-amber-500 hover:bg-amber-400 text-black font-bold px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'تم النسخ!' : 'نسخ'}</span>
              </button>
            </div>

            <p className="text-[11px] text-zinc-500">
              تم ربط حسابك بريدياً بنجاح مع Supabase Studio 🟢
            </p>
          </div>
        )}

      </div>
    </div>
  );
}