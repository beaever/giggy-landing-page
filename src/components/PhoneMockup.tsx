import React from 'react';
import AppUI from './AppUI';

export default function PhoneMockup() {
  return (
    <div className='relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-14 rounded-[2.5rem] h-150 w-75 shadow-xl'>
      <div className='w-37 h-4.5 bg-gray-800 top-0 rounded-b-2xl left-1/2 -translate-x-1/2 absolute z-20'></div>
      <div className='h-8 w-0.75 bg-gray-800 absolute -start-4.25 top-18 rounded-s-lg'></div>
      <div className='h-11.5 w-0.75 bg-gray-800 absolute -start-4.25 top-31 rounded-s-lg'></div>
      <div className='h-11.5 w-0.75 bg-gray-800 absolute -start-4.25 top-44.5 rounded-s-lg'></div>
      <div className='h-16 w-0.75 bg-gray-800 absolute -end-4.25 top-35.5 rounded-e-lg'></div>
      <div className='rounded-4xl overflow-hidden w-full h-full bg-black dark:bg-gray-800 relative z-10'>
        <AppUI />
      </div>
    </div>
  );
}
