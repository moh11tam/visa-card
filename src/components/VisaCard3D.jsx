import React from 'react';
import { Wifi, Crown } from 'lucide-react';

export default function VisaCard3D({ amount = "100", isVip = false }) {
  return (
    <div className={`relative w-full max-w-[340px] h-52 md:h-56 rounded-2xl p-6 border shadow-2xl flex flex-col justify-between transform hover:scale-105 transition duration-500 mx-auto select-none ${
      isVip 
        ? "bg-gradient-to-tr from-amber-950 via-yellow-900 to-amber-600 border-yellow-400/50 shadow-yellow-500/20" 
        : "bg-gradient-to-tr from-blue-950 via-blue-900 to-indigo-900 border-blue-400/30 shadow-blue-600/20"
    }`}>
      <div className="flex justify-between items-center">
        <span className={`font-bold tracking-widest text-sm md:text-base flex items-center gap-1 ${isVip ? "text-yellow-300" : "text-blue-200"}`}>
          {isVip && <Crown className="w-4 h-4 text-yellow-400" />}
          {isVip ? "VIP ELITE CARD" : "VIRTUAL CARD"}
        </span>
        <Wifi className={`rotate-90 w-6 h-6 ${isVip ? "text-yellow-300" : "text-blue-300"}`} />
      </div>
      
      <div className="flex items-center gap-3">
        <div className={`w-11 h-8 rounded-md flex items-center justify-center border ${
          isVip ? "bg-amber-300/20 border-yellow-200/60" : "bg-amber-400/20 border-amber-300/40"
        }`}>
          <div className={`w-7 h-5 rounded-sm border ${isVip ? "border-yellow-200" : "border-amber-300/60"}`}></div>
        </div>
        <span className={`text-[10px] tracking-wider ${isVip ? "text-yellow-200" : "text-blue-200"}`}>
          {isVip ? "LIMITED EDITION" : "PREPAID"}
        </span>
      </div>

      <div>
        <div className={`font-mono tracking-widest text-base md:text-lg mb-2 ${isVip ? "text-yellow-100" : "text-blue-100"}`}>
          •••• •••• •••• 9999
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className={`text-[10px] uppercase ${isVip ? "text-yellow-300" : "text-blue-300"}`}>Balance</p>
            <p className="text-xl md:text-2xl font-bold text-white">${amount} USD</p>
          </div>
          <span className="text-2xl font-black italic text-white tracking-wider">VISA</span>
        </div>
      </div>
    </div>
  );
}