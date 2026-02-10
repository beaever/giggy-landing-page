import React from 'react';
import {
  Bell,
  Home,
  List,
  MessageCircle,
  User,
  Clock,
  Calendar,
} from 'lucide-react';

const jobPosts = [
  {
    id: 1,
    type: 'casual job',
    company: 'Nina Armando, 25',
    location: 'Martin Place, Sydney, Sydney CBD',
    time: '03:00 ~ 05:00',
    date: '06 / 02 / 2026',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=200&fit=crop',
  },
  {
    id: 2,
    type: 'barista',
    company: 'Blue Bottle Coffee',
    location: 'Circular Quay, Sydney',
    time: '07:00 ~ 15:00',
    date: '07 / 02 / 2026',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=200&fit=crop',
  },
  {
    id: 3,
    type: 'kitchen hand',
    company: 'Sake Restaurant',
    location: 'The Rocks, Sydney',
    time: '17:00 ~ 23:00',
    date: '08 / 02 / 2026',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop',
  },
  {
    id: 4,
    type: 'retail assistant',
    company: 'Uniqlo Australia',
    location: 'Pitt Street Mall, Sydney',
    time: '10:00 ~ 18:00',
    date: '09 / 02 / 2026',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop',
  },
];

export default function AppUI() {
  return (
    <div className='flex flex-col h-full bg-gray-50 text-gray-900 font-sans overflow-hidden'>
      {/* Status Bar */}
      <div className='h-11 w-full shrink-0 flex items-center justify-between px-6 pt-2 bg-white'>
        <span className='text-xs font-semibold'>9:41</span>
        <div className='flex items-center gap-1'>
          <div className='w-4 h-2.5 bg-gray-900 rounded-sm'></div>
          <div className='w-4 h-2.5 bg-gray-900 rounded-sm'></div>
          <div className='relative w-6 h-3 bg-gray-900 rounded-sm'>
            <span className='absolute -right-1 top-1/2 -translate-y-1/2 text-[8px] font-bold text-white bg-green-500 rounded-full w-3 h-3 flex items-center justify-center'>
              69
            </span>
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className='px-5 py-3 bg-white shrink-0'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 flex items-center justify-center overflow-hidden'>
              <div className='w-8 h-8 rounded-full bg-white/20'></div>
            </div>
            <div>
              <p className='text-lg font-bold'>Hey !</p>
              <p className='text-sm text-gray-500'>User 님</p>
            </div>
          </div>
          <div className='relative'>
            <Bell className='w-6 h-6 text-gray-700' />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='h-px bg-gray-200'></div>

      {/* Content */}
      <div className='flex-1 overflow-y-auto pb-20 scrollbar-hide'>
        {/* Recommend Section */}
        <div className='px-5 py-4'>
          <div className='flex justify-between items-center mb-3'>
            <h2 className='text-lg font-bold text-gray-900'>Recommend post</h2>
            <button className='text-sm text-blue-500 font-medium'>more</button>
          </div>

          {/* Job Cards */}
          <div className='space-y-4'>
            {jobPosts.map((job) => (
              <div
                key={job.id}
                className='bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100'
              >
                {/* Job Image */}
                <div className='h-32 bg-gray-200 relative overflow-hidden'>
                  <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${job.image})`,
                    }}
                  />
                </div>
                {/* Job Info */}
                <div className='p-4'>
                  <h3 className='font-semibold text-base text-gray-900 mb-1'>
                    {job.type}
                  </h3>
                  <p className='text-sm text-blue-500 mb-2 truncate'>
                    {job.company}, {job.location}
                  </p>
                  <div className='flex items-center gap-4 text-xs text-gray-500'>
                    <div className='flex items-center gap-1'>
                      <Clock className='w-3.5 h-3.5' />
                      <span>{job.time}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Calendar className='w-3.5 h-3.5' />
                      <span>{job.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around px-2'>
        <div className='flex flex-col items-center gap-0.5'>
          <Home className='w-5 h-5 text-gray-900' fill='currentColor' />
          <span className='text-[10px] font-medium text-gray-900'>HOME</span>
        </div>
        <div className='flex flex-col items-center gap-0.5'>
          <List className='w-5 h-5 text-gray-400' />
          <span className='text-[10px] text-gray-400'>LIST</span>
        </div>
        <div className='flex flex-col items-center gap-0.5'>
          <MessageCircle className='w-5 h-5 text-gray-400' />
          <span className='text-[10px] text-gray-400'>CHAT</span>
        </div>
        <div className='flex flex-col items-center gap-0.5'>
          <User className='w-5 h-5 text-gray-400' />
          <span className='text-[10px] text-gray-400'>PROFILE</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className='absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-900 rounded-full'></div>
    </div>
  );
}
