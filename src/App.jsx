import React, { useState } from 'react';
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

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // دالة فتح النافذة المنبثقة وتحديد البطاقة
  const handleSelectCard = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  // دالة إغلاق النافذة
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-600 selection:text-white" dir="rtl">
      <Navbar />
      <Hero />
      <Features />

      {/* تمرير الدالة لجميع أقسام البطاقات */}
      <CardsSection onSelectCard={handleSelectCard} />
      <MastercardSection onSelectCard={handleSelectCard} />
      <FlashUsdtSection onSelectCard={handleSelectCard} />
      <NetflixSection onSelectCard={handleSelectCard} />

      <HowItWorks />
      <Faq />

      {/* عرض المودال عند النقر على أي زر شراء */}
      {isModalOpen && (
        <PaymentModal 
          card={selectedCard} 
          onClose={handleCloseModal} 
        />
      )}

      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        <p>© 2026 VIRTUAL VISA. جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}