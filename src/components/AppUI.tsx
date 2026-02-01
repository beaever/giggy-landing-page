import React from 'react';
import { Bell, Search, Home, Briefcase, User } from 'lucide-react';

export default function AppUI() {
  return (
    <div className='flex flex-col h-full bg-black text-white font-sans overflow-hidden'>
      {/* Status Bar Placeholder */}
      <div className='h-12 w-full shrink-0 flex items-center justify-between px-6 pt-2'>
        <span className='text-xs font-medium'>9:41</span>
        <div className='flex gap-1.5'>
          <div className='w-4 h-2.5 bg-white/20 rounded-sm'></div>
          <div className='w-4 h-2.5 bg-white/20 rounded-sm'></div>
          <div className='w-5 h-2.5 bg-white rounded-sm'></div>
        </div>
      </div>

      {/* App Header */}
      <div className='px-6 pb-4 shrink-0'>
        <div className='flex justify-between items-start mb-4'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>GIGGY</h1>
            <p className='text-gray-400 text-sm mt-1'>일자리 찾기를 시작해요</p>
          </div>
          <div className='flex gap-4'>
            {/* Coffee Icon Placeholder */}
            <div className='w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center'>
              <div className='w-3 h-3 bg-gray-400 rounded-sm'></div>
            </div>
            <div className='relative'>
              <Bell className='w-6 h-6 text-white' />
              <div className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-black'></div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className='relative mb-4'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500' />
          <input
            type='text'
            placeholder='강력 추천 일자리...'
            className='w-full bg-[#1C1C1E] rounded-xl py-3 pl-10 pr-4 text-sm placeholder:text-gray-600 focus:outline-none'
            readOnly
          />
        </div>

        {/* Filter Tags */}
        <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
          <button className='px-4 py-1.5 bg-[#2C2C2E] rounded-full text-xs font-medium whitespace-nowrap text-white'>
            검색
          </button>
          <button className='px-4 py-1.5 bg-[#1C1C1E] rounded-full text-xs font-medium whitespace-nowrap text-gray-400 border border-white/10'>
            일자리 검색
          </button>
          <button className='px-4 py-1.5 bg-[#1C1C1E] rounded-full text-xs font-medium whitespace-nowrap text-gray-400 border border-white/10'>
            사람 찾기
          </button>
        </div>
      </div>

      {/* Job List */}
      <div className='flex-1 overflow-y-auto px-6 space-y-4 pb-20 scrollbar-hide'>
        {/* Item 1 */}
        <div className='bg-[#1C1C1E] rounded-2xl p-4'>
          <div className='flex justify-between items-start mb-2'>
            <div>
              <h3 className='font-semibold text-sm mb-1'>
                호주에서 달달한 꿀빨기 [Bundaberg 워킹홀리데이]
              </h3>
              <p className='text-xs text-blue-400 mb-2'>남성 워커 급구</p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1.5 mb-3'>
            <span className='px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-400'>
              NSW 퀸즐랜드
            </span>
            <span className='px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-400'>
              워홀 가능
            </span>
          </div>
          <div className='flex items-center gap-1 text-[10px] text-gray-500'>
            <span>워홀 시간</span>
            <span>•</span>
            <span>7 hours ago</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className='bg-[#1C1C1E] rounded-2xl p-4'>
          <div className='flex justify-between items-start mb-2'>
            <div>
              <h3 className='font-semibold text-sm mb-1'>광주 네일 샵</h3>
              <p className='text-xs text-gray-400 mb-2'>
                와규(Wagyu) University, Inc.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1.5 mb-3'>
            <span className='px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-400'>
              단기 알바
            </span>
          </div>
          <div className='flex items-center gap-1 text-[10px] text-gray-500'>
            <span>파트 타임</span>
            <span>•</span>
            <span>4 years ago</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className='bg-[#1C1C1E] rounded-2xl p-4'>
          <div className='flex justify-between items-start mb-2'>
            <div>
              <h3 className='font-semibold text-sm mb-1'>
                호주에서 일자리 구하기 [Brisbane 1808]
              </h3>
              <p className='text-xs text-gray-400 mb-2'>
                NEO RoboWorkshop, Ltd.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1.5 mb-3'>
            <span className='px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-400'>
              마케팅 직무
            </span>
          </div>
          <div className='flex items-center gap-1 text-[10px] text-gray-500'>
            <span>자유 시간</span>
            <span>•</span>
            <span>2 years ago</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className='absolute bottom-0 left-0 right-0 h-20 bg-[#1C1C1E]/90 backdrop-blur-md border-t border-white/5 flex items-start justify-around pt-4 pb-8'>
        <div className='flex flex-col items-center gap-1 text-white'>
          <Home className='w-5 h-5' fill='currentColor' />
          <span className='text-[10px]'>홈</span>
        </div>
        <div className='flex flex-col items-center gap-1 text-gray-500'>
          <Search className='w-5 h-5' />
          <span className='text-[10px]'>검색</span>
        </div>
        <div className='flex flex-col items-center gap-1 text-gray-500'>
          <Briefcase className='w-5 h-5' />
          <span className='text-[10px]'>채용공고</span>
        </div>
        <div className='flex flex-col items-center gap-1 text-gray-500'>
          <User className='w-5 h-5' />
          <span className='text-[10px]'>마이페이지</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className='absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full'></div>
    </div>
  );
}
