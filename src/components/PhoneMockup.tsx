import React from 'react';
import AppUI from './AppUI';

export default function PhoneMockup() {
  return (
    <div className='relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl'>
      <div className='w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-2xl left-1/2 -translate-x-1/2 absolute z-20'></div>
      <div className='h-8 w-[3px] bg-gray-900 absolute -left-[17px] top-[72px] rounded-l-lg'></div>
      <div className='h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[124px] rounded-l-lg'></div>
      <div className='h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[178px] rounded-l-lg'></div>
      <div className='h-16 w-[3px] bg-gray-900 absolute -right-[17px] top-[142px] rounded-r-lg'></div>
      <div className='rounded-[2rem] overflow-hidden w-full h-full bg-gray-50 relative z-10'>
        <AppUI />
      </div>
    </div>
  );
}
