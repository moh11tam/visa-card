import React from 'react';
import { Wifi } from 'lucide-react';

export default function VisaCard3D({ amount = "100" }) {
  return (
    <div className="relative w-full max-w-[340px] h-52 md:h-56 rounded-2xl bg-gradient-to-tr from-blue-950 via-blue-900 to-indigo-900 p-6 border border-blue-400/30 shadow-2xl shadow-blue-600/20 flex flex-col justify-between transform hover:scale-105 transition duration-500 mx-auto select-none">
      <div className="flex justify-between items-center">
        <span className="text-blue-200 font-bold tracking-widest text-sm md:text-base">VIRTUAL CARD</span>
        <Wifi className="text-blue-300 rotate-90 w-6 h-6" />
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-11 h-8 bg-amber-400/20 border border-amber-300/40 rounded-md flex items-center justify-center">
          <div className="w-7 h-5 border border-amber-300/60 rounded-sm"></div>
        </div>
        <span className="text-[10px] text-blue-200 tracking-wider">PREPAID</span>
      </div>

      <div>
        <div className="text-blue-100 font-mono tracking-widest text-base md:text-lg mb-2">
          •••• •••• •••• 4242
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] text-blue-300 uppercase">Balance</p>
            <p className="text-xl md:text-2xl font-bold text-white">${amount} USD</p>
          </div>
          <span className="text-2xl font-black italic text-white tracking-wider">VISA</span>
        </div>
      </div>
    </div>
  );
}