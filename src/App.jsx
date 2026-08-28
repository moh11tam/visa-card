import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CardsSection from './components/CardsSection';
import MastercardSection from './components/MastercardSection';
import FlashUsdtSection from './components/FlashUsdtSection';
import NetflixSection from './components/NetflixSection';
import HowItWorks from './components/HowItWorks';
import Faq from './components/Faq';
import PaymentModal from './components/PaymentModal';
import AuthModal from './components/AuthModal';
import { supabase } from './supabaseClient';

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // 📈 تتبع ومعالجة الإحالة عند زيارة الموقع عبر رابط ?ref=REF-XXXXXX
  useEffect(() => {
    const handleReferral = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const refCode = urlParams.get('ref');

      if (refCode) {
        // تجنب احتساب الزيارة المكررة من نفس الجهاز
        const alreadyReferred = localStorage.getItem('tracked_ref');
        
        if (!alreadyReferred) {
          try {
            // جلب عدد الإحالات الحالي للمُحيل
            const { data: user, error: fetchError } = await supabase
              .from('users')
              .select('referral_count')
              .eq('referral_code', refCode)
              .single();

            if (user && !fetchError) {
              // زيادة عدد الإحالات بمقدار 1
              await supabase
                .from('users')
                .update({ referral_count: (user.referral_count || 0) + 1 })
                .eq('referral_code', refCode);

              // حفظ علامة محلياً بعدم تكرار الاحتساب
              localStorage.setItem('tracked_ref', refCode);
            }
          } catch (err) {
            console.error('Error tracking referral:', err);
          }
        }
      }
    };

    handleReferral();
  }, []);

  // فتح نافذة الشراء
  const handleSelectCard = (cardData) => {
    setSelectedCard(cardData);
    setIsPaymentModalOpen(true);
  };

  // فتح نافذة تسجيل الدخول للإحالات
  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-600 selection:text-white" dir="rtl">
      <Navbar />
      
      {/* تمرير دالة فتح نافذة تسجيل الدخول لمكون Hero */}
      <Hero onLoginClick={handleOpenAuthModal} />
      
      <Features />

      <CardsSection onSelectCard={handleSelectCard} />
      <MastercardSection onSelectCard={handleSelectCard} />
      <FlashUsdtSection onSelectCard={handleSelectCard} />
      <NetflixSection onSelectCard={handleSelectCard} />

      <HowItWorks />
      <Faq />

      {/* 💳 مودال الدفع والبطاقات */}
      {isPaymentModalOpen && (
        <PaymentModal 
          card={selectedCard} 
          onClose={() => setIsPaymentModalOpen(false)} 
        />
      )}

      {/* 🔐 مودال تسجيل الدخول والإحالات عبر البريد و Supabase */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        <p>© 2026 VIRTUAL VISA. جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}