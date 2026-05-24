const ITEMS = [
  'BARISTA',
  'SYDNEY',
  'KITCHEN HAND',
  'MELBOURNE',
  'RETAIL',
  'BRISBANE',
  'WAITER',
  'PERTH',
  'FARM WORKER',
  'ADELAIDE',
  'CLEANER',
  'GOLD COAST',
  'DELIVERY',
  'CAIRNS',
  'DISHWASHER',
  'DARWIN',
];

export default function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className='border-y border-white/[0.07] py-5 overflow-hidden'>
      <div
        className='flex animate-marquee whitespace-nowrap'
        style={{ width: 'max-content' }}
        aria-hidden
      >
        {doubled.map((item, i) => (
          <span key={i} className='inline-flex items-center'>
            <span className='text-[10px] font-bold tracking-[0.28em] text-white/25 uppercase mx-5'>
              {item}
            </span>
            <span className='text-white/10 text-[8px]'>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
