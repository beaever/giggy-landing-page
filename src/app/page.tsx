import React from 'react';
import Link from 'next/link';
import PhoneMockup from '@/components/PhoneMockup';
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Briefcase,
  Zap,
  Download,
  Search,
  Send,
} from 'lucide-react';

export default function Home() {
  return (
    <main className='min-h-screen bg-black text-white overflow-hidden relative selection:bg-white/20'>
      {/* Background Decor */}
      <div className='absolute top-0 right-0 w-125 h-125 bg-white/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2' />
      <div className='absolute bottom-0 left-0 w-125 h-125 bg-white/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2' />
      <div className='absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2' />

      {/* Hero Section */}
      <section className='relative z-10 min-h-screen flex items-center'>
        <div className='container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>
          {/* Left Content */}
          <div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
            <span className='inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm'>
              🇦🇺 워홀러 · 유학생을 위한 일자리 플랫폼
            </span>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-4'>
              GIGGY
            </h1>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-gray-200'>
              호주에서 일자리 찾기,
              <br />
              <span className='text-white'>이제 쉽게</span>
            </h2>
            <p className='text-gray-400 text-lg mb-8 max-w-md'>
              위치 기반 일자리 추천부터 고용주와의 실시간 채팅까지.
              <br />
              당신의 호주 생활을 GIGGY가 함께합니다.
            </p>

            {/* Download Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <button className='group bg-white text-black px-6 py-3.5 rounded-xl font-bold text-base hover:bg-gray-100 transition-all flex items-center justify-center gap-2 cursor-pointer'>
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z' />
                </svg>
                App Store
              </button>
              <button className='group bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold text-base hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20'>
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z' />
                </svg>
                Google Play
              </button>
            </div>

            <p className='text-gray-500 text-sm'>
              ✓ 무료 다운로드 · ✓ 간편 가입 · ✓ 즉시 사용
            </p>
          </div>

          {/* Right Content (Phone Mockup) */}
          <div className='flex-1 flex justify-center items-center w-full max-w-md lg:max-w-none'>
            <div className='scale-90 lg:scale-100 origin-center transition-transform duration-500 hover:scale-[1.02]'>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='relative z-10 py-24 border-t border-white/10'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
              왜 <span className='text-blue-400'>GIGGY</span>인가요?
            </h2>
            <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
              호주에서 일자리를 찾는 가장 스마트한 방법
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Feature 1 */}
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10'>
              <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4'>
                <MapPin className='w-6 h-6 text-blue-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>위치 기반 추천</h3>
              <p className='text-gray-400 text-sm'>
                내 주변의 일자리를 실시간으로 확인하고 빠르게 지원하세요.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10'>
              <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4'>
                <MessageCircle className='w-6 h-6 text-green-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>실시간 채팅</h3>
              <p className='text-gray-400 text-sm'>
                고용주와 직접 대화하며 빠르게 면접 일정을 잡으세요.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10'>
              <div className='w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4'>
                <Briefcase className='w-6 h-6 text-purple-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>다양한 직종</h3>
              <p className='text-gray-400 text-sm'>
                Barista, Kitchen Hand, Retail 등 다양한 캐주얼 잡을 한눈에.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10'>
              <div className='w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4'>
                <Zap className='w-6 h-6 text-orange-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>빠른 매칭</h3>
              <p className='text-gray-400 text-sm'>
                복잡한 절차 없이 간단하게 지원하고 빠르게 연결되세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='relative z-10 py-24 border-t border-white/10'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
              어떻게 사용하나요?
            </h2>
            <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
              3단계로 시작하는 호주 일자리 찾기
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {/* Step 1 */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 relative'>
                <Download className='w-7 h-7 text-white' />
                <span className='absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold'>
                  1
                </span>
              </div>
              <h3 className='text-xl font-bold mb-2'>앱 다운로드</h3>
              <p className='text-gray-400 text-sm'>
                App Store 또는 Google Play에서
                <br />
                GIGGY를 무료로 다운로드하세요.
              </p>
            </div>

            {/* Step 2 */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 relative'>
                <Search className='w-7 h-7 text-white' />
                <span className='absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold'>
                  2
                </span>
              </div>
              <h3 className='text-xl font-bold mb-2'>일자리 탐색</h3>
              <p className='text-gray-400 text-sm'>
                위치와 직종을 설정하고
                <br />
                맞춤 일자리를 추천받으세요.
              </p>
            </div>

            {/* Step 3 */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 relative'>
                <Send className='w-7 h-7 text-white' />
                <span className='absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold'>
                  3
                </span>
              </div>
              <h3 className='text-xl font-bold mb-2'>지원 & 연결</h3>
              <p className='text-gray-400 text-sm'>
                원하는 일자리에 지원하고
                <br />
                채팅으로 바로 연결되세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative z-10 py-24 border-t border-white/10'>
        <div className='container mx-auto px-6'>
          <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 sm:p-12 text-center border border-white/10 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
              지금 바로 시작하세요
            </h2>
            <p className='text-gray-300 text-lg mb-8 max-w-xl mx-auto'>
              호주에서의 새로운 기회, GIGGY와 함께 찾아보세요.
              <br />
              수많은 워홀러와 유학생이 이미 사용하고 있습니다.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 cursor-pointer'>
                무료로 시작하기
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative z-10 border-t border-white/10 py-12'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
            <div className='text-center md:text-left'>
              <h3 className='text-2xl font-bold mb-2'>GIGGY</h3>
              <p className='text-gray-500 text-sm'>
                호주에서 일자리 찾기, 이제 쉽게
              </p>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-6 text-sm'>
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

          <div className='mt-8 pt-8 border-t border-white/10 text-center'>
            <p className='text-gray-500 text-sm'>
              © 2026 GIGGY. All rights reserved. Made with ❤️ for Aussie
              dreamers.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
