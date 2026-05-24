import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';
import Navbar from '@/components/Navbar';
import MarqueeTicker from '@/components/MarqueeTicker';

const AppleIcon = () => (
  <svg className='w-5 h-5 shrink-0' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z' />
  </svg>
);

const GoogleIcon = () => (
  <svg className='w-5 h-5 shrink-0' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z' />
  </svg>
);

const FEATURES = [
  {
    icon: '📍',
    title: '위치 기반 추천',
    desc: '내 주변 반경의 일자리를 실시간으로 확인하세요. GPS 기반으로 가장 가까운 기회를 먼저 보여드립니다.',
    wide: true,
  },
  {
    icon: '💬',
    title: '실시간 채팅',
    desc: '고용주와 직접 대화하며 면접 일정을 즉시 잡으세요.',
    wide: false,
  },
  {
    icon: '💼',
    title: '다양한 직종',
    desc: 'Barista, Kitchen Hand, Retail 등 캐주얼 잡을 한눈에 확인하세요.',
    wide: false,
  },
  {
    icon: '⚡',
    title: '빠른 매칭',
    desc: '복잡한 절차 없이 원탭으로 지원하고 즉시 연결되세요. 이력서 없이도 프로필 하나로 모든 지원이 가능합니다.',
    wide: true,
  },
];

const STEPS = [
  {
    num: '01',
    title: '앱 다운로드',
    desc: 'App Store 또는 Google Play에서 GIGGY를 무료로 다운로드하세요. 가입은 1분이면 충분합니다.',
  },
  {
    num: '02',
    title: '일자리 탐색',
    desc: '위치와 원하는 직종을 설정하면 주변의 맞춤 일자리를 실시간으로 추천받을 수 있습니다.',
  },
  {
    num: '03',
    title: '지원 & 연결',
    desc: '마음에 드는 일자리에 원탭으로 지원하고, 채팅으로 고용주와 바로 연결되세요.',
  },
];

/* filled = true: 강조 태그 (흰 배경) / false: 아웃라인 태그 */
const JOB_CATEGORIES: { label: string; filled: boolean }[] = [
  { label: 'Barista', filled: true },
  { label: 'Kitchen Hand', filled: false },
  { label: 'Retail Assistant', filled: false },
  { label: 'Farm Worker', filled: true },
  { label: 'Waiter / Waitress', filled: false },
  { label: 'Cleaner', filled: false },
  { label: 'Delivery Driver', filled: true },
  { label: 'Dishwasher', filled: false },
  { label: 'Café Worker', filled: false },
  { label: 'Hospitality Staff', filled: false },
  { label: 'Fruit Picker', filled: true },
  { label: 'Packer', filled: false },
  { label: 'House Cleaner', filled: false },
  { label: 'Event Staff', filled: false },
  { label: 'Warehouse Worker', filled: true },
  { label: 'Security Guard', filled: false },
  { label: 'Tutor', filled: false },
  { label: 'Dog Walker', filled: false },
  { label: 'Construction Labourer', filled: false },
  { label: 'Customer Service', filled: false },
];

export default function Home() {
  return (
    <main className='min-h-screen bg-black text-white overflow-x-hidden'>
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className='relative min-h-[100dvh] flex flex-col lg:flex-row items-center pt-16 overflow-hidden'>
        {/* Grid bg */}
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Radial vignette */}
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, #000 100%)',
          }}
        />

        {/* Left — text */}
        <div className='relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-24 py-20 lg:py-0'>
          {/* Live badge */}
          <div
            className='inline-flex items-center gap-2.5 mb-10 animate-fade-in'
            style={{ animationDelay: '0ms' }}
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30' />
              <span className='relative inline-flex rounded-full h-2 w-2 bg-white' />
            </span>
            <span className='text-[11px] font-semibold text-white/60 uppercase tracking-[0.2em]'>
              워홀러 · 유학생을 위한 일자리 플랫폼
            </span>
          </div>

          {/* Hero display type */}
          <div className='overflow-hidden'>
            <h1
              className='text-[clamp(5rem,12vw,11rem)] font-black leading-[0.86] tracking-tighter animate-slide-up'
              style={{ animationDelay: '80ms' }}
            >
              FIND
            </h1>
          </div>
          <div className='overflow-hidden'>
            <h1
              className='text-[clamp(5rem,12vw,11rem)] font-black leading-[0.86] tracking-tighter animate-slide-up'
              style={{ animationDelay: '180ms' }}
            >
              YOUR
            </h1>
          </div>
          <div className='overflow-hidden mb-10'>
            <h1
              className='text-[clamp(5rem,12vw,11rem)] font-black leading-[0.86] tracking-tighter text-white/18 animate-slide-up'
              style={{ animationDelay: '280ms' }}
            >
              GIGGY.
            </h1>
          </div>

          <p
            className='text-white/60 text-base md:text-[17px] mb-10 max-w-[300px] leading-relaxed animate-fade-in'
            style={{ animationDelay: '500ms' }}
          >
            호주에서 일자리 찾기, 이제 쉽게.
            <br />
            위치 기반 추천부터 실시간 채팅까지.
          </p>

          {/* Store buttons */}
          <div
            className='flex flex-wrap gap-3 animate-fade-in'
            style={{ animationDelay: '650ms' }}
          >
            <button className='group flex items-center gap-2.5 bg-white text-black px-6 py-3.5 rounded-full font-bold text-sm tracking-tight hover:bg-white/88 active:scale-95 transition-all duration-150 cursor-pointer'>
              <AppleIcon />
              App Store
              <ArrowUpRight className='w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
            </button>
            <button className='group flex items-center gap-2.5 border border-white/20 text-white/80 px-6 py-3.5 rounded-full font-bold text-sm tracking-tight hover:border-white/45 hover:text-white hover:bg-white/[0.05] active:scale-95 transition-all duration-150 cursor-pointer'>
              <GoogleIcon />
              Google Play
            </button>
          </div>

          {/* Scroll cue */}
          <div
            className='flex items-center gap-3 mt-16 animate-fade-in'
            style={{ animationDelay: '900ms' }}
          >
            <div className='w-8 h-px bg-white/20' />
            <span className='text-[11px] text-white/40 tracking-[0.2em] uppercase'>
              스크롤
            </span>
          </div>
        </div>

        {/* Right — phone */}
        <div className='relative z-10 flex-1 flex items-center justify-center py-14 lg:py-0 lg:pr-10 xl:pr-20'>
          <div style={{ transform: 'rotate(-5deg)' }}>
            <div className='animate-float'>
              <PhoneMockup />
            </div>
          </div>
          <div
            aria-hidden
            className='absolute inset-0 pointer-events-none'
            style={{
              background:
                'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
            }}
          />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MARQUEE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <MarqueeTicker />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURES — BENTO GRID
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className='py-28 md:py-36 px-6 md:px-10 lg:px-16 xl:px-24'>
        <div className='max-w-[1280px] mx-auto'>
          <div className='flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6'>
            <div>
              <p className='text-white/45 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4'>
                FEATURES
              </p>
              <h2 className='text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter leading-none'>
                왜 GIGGY인가요?
              </h2>
            </div>
            <p className='text-white/55 text-sm max-w-[220px] md:text-right leading-relaxed'>
              호주에서 일자리를 찾는
              <br />
              가장 스마트한 방법
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4'>
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={`group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 md:p-9 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500 cursor-default overflow-hidden ${
                  f.wide ? 'lg:col-span-2' : ''
                }`}
              >
                <div
                  aria-hidden
                  className='absolute -top-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-white/[0.05] transition-all duration-700'
                />
                <div className='relative z-10'>
                  <div className='flex items-start justify-between mb-9'>
                    <div className='w-11 h-11 border border-white/15 rounded-xl flex items-center justify-center text-lg group-hover:border-white/32 transition-colors duration-400'>
                      {f.icon}
                    </div>
                    <ArrowUpRight className='w-4 h-4 text-white/18 group-hover:text-white/50 transition-colors duration-400' />
                  </div>
                  <h3 className='text-xl font-bold mb-3 tracking-tight'>{f.title}</h3>
                  <p className='text-white/55 text-sm leading-relaxed max-w-sm'>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          JOB CATEGORIES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className='border-y border-white/[0.08] py-20 md:py-24 px-6 md:px-10 lg:px-16 xl:px-24'>
        <div className='max-w-[1280px] mx-auto'>
          <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
            <div>
              <p className='text-white/45 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4'>
                ON GIGGY
              </p>
              <h2 className='text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter leading-none'>
                어떤 일자리든
              </h2>
            </div>
            <p className='text-white/55 text-sm max-w-[240px] md:text-right leading-relaxed'>
              바리스타부터 팜워커까지,
              <br />
              호주의 모든 캐주얼 잡을 한곳에서
            </p>
          </div>

          <div className='flex flex-wrap gap-2.5'>
            {JOB_CATEGORIES.map((job) => (
              <span
                key={job.label}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-tight transition-all duration-200 cursor-default select-none ${
                  job.filled
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white/60 border border-white/15 hover:border-white/35 hover:text-white/85'
                }`}
              >
                {job.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className='py-28 md:py-36 px-6 md:px-10 lg:px-16 xl:px-24'>
        <div className='max-w-[1280px] mx-auto'>
          <div className='mb-16'>
            <p className='text-white/45 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4'>
              HOW IT WORKS
            </p>
            <h2 className='text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter leading-none'>
              3단계로 시작
            </h2>
          </div>

          <div className='divide-y divide-white/[0.08]'>
            {STEPS.map((step) => (
              <div
                key={step.num}
                className='group flex items-start gap-7 md:gap-12 py-9 md:py-10 hover:pl-3 transition-all duration-300 cursor-default'
              >
                <span className='text-xs font-mono text-white/35 pt-1 shrink-0 w-7 group-hover:text-white/65 transition-colors duration-300'>
                  {step.num}
                </span>
                <div className='flex-1 min-w-0'>
                  <h3 className='text-xl md:text-2xl font-bold mb-2.5 tracking-tight'>
                    {step.title}
                  </h3>
                  <p className='text-white/55 text-sm md:text-base leading-relaxed max-w-lg'>
                    {step.desc}
                  </p>
                </div>
                <ArrowUpRight className='w-4 h-4 text-white/18 shrink-0 group-hover:text-white/45 transition-colors duration-300 mt-1.5' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — INVERTED
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className='bg-white text-black py-24 md:py-32 px-6 md:px-10 lg:px-16 xl:px-24'>
        <div className='max-w-[1280px] mx-auto'>
          <div className='flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12'>
            <div>
              <p className='text-black/45 text-[11px] font-semibold uppercase tracking-[0.22em] mb-7'>
                GET STARTED
              </p>
              <h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter leading-[0.88]'>
                호주에서의
                <br />
                새로운 기회
              </h2>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 shrink-0'>
              <button className='group flex items-center gap-2.5 bg-black text-white px-7 py-4 rounded-full font-bold text-sm tracking-tight hover:bg-black/80 active:scale-95 transition-all duration-150 cursor-pointer'>
                <AppleIcon />
                App Store
                <ArrowUpRight className='w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
              </button>
              <button className='group flex items-center gap-2.5 border border-black/20 text-black/80 px-7 py-4 rounded-full font-bold text-sm tracking-tight hover:border-black/55 hover:text-black hover:bg-black/[0.05] active:scale-95 transition-all duration-150 cursor-pointer'>
                <GoogleIcon />
                Google Play
              </button>
            </div>
          </div>

          <div className='mt-16 pt-9 border-t border-black/[0.1] flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/45'>
            <span>✓ 무료 다운로드</span>
            <span>✓ 간편 가입</span>
            <span>✓ 즉시 사용 가능</span>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FOOTER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className='border-t border-white/[0.08] py-9 px-6 md:px-10 lg:px-16 xl:px-24'>
        <div className='max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
          <span className='text-xl font-black tracking-tight select-none'>GIGGY</span>
          <div className='flex flex-wrap items-center gap-x-7 gap-y-2 text-xs text-white/45'>
            <Link href='/terms' className='hover:text-white transition-colors duration-200'>
              이용약관
            </Link>
            <a
              href='mailto:kooz.giggy@gmail.com'
              className='hover:text-white transition-colors duration-200'
            >
              문의하기
            </a>
            <span>© 2026 GIGGY. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
