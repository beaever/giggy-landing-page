'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.07]'
          : 'bg-transparent'
      }`}
    >
      <div className='w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between'>
        <span className='text-lg font-black tracking-tight select-none'>GIGGY</span>
        <button className='bg-white text-black px-5 py-2 rounded-full text-xs font-bold tracking-tight hover:bg-white/85 active:scale-95 transition-all duration-150 cursor-pointer'>
          앱 다운로드
        </button>
      </div>
    </nav>
  );
}
