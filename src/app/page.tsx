import React from 'react';
import Link from 'next/link';
import PhoneMockup from '@/components/PhoneMockup';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className='min-h-screen bg-black text-white overflow-hidden relative selection:bg-white/20 flex flex-col'>
      {/* Background Decor */}
      <div className='absolute top-0 right-0 w-125 h-125 bg-white/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2' />
      <div className='absolute bottom-0 left-0 w-125 h-125 bg-white/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2' />

      <div className='container mx-auto p-6 flex-1 min-h-200 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10'>
        {/* Left Content */}
        <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0'>
          <h1 className='text-6xl md:text-8xl font-black tracking-tighter mb-6'>
            GIGGY
          </h1>
          <h2 className='text-3xl md:text-5xl font-bold leading-tight mb-8 text-gray-200'>
            호주에서 일자리 찾기,
            <br />
            이제 쉽게
          </h2>

          <button className='group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 cursor-pointer'>
            지금 다운로드
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>

        {/* Right Content (Phone Mockup) */}
        <div className='flex-1 flex justify-center items-center w-full max-w-[400px] md:max-w-none'>
          <div className='scale-75 md:scale-90 lg:scale-100 origin-center transition-transform duration-500 hover:scale-[1.02]'>
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='relative z-10 border-t border-white/10 py-6'>
        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-gray-500 text-sm'>
            © 2026 GIGGY. All rights reserved.
          </p>
          <div className='flex items-center gap-6 text-sm'>
            <Link
              href='/terms'
              className='text-gray-400 hover:text-white transition-colors'
            >
              이용약관
            </Link>
            <a
              href='mailto:kooz.giggy@gmail.com'
              className='text-gray-400 hover:text-white transition-colors'
            >
              문의하기
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
