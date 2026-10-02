const Calendar = () => {
  return (
    <div className="absolute top-full left-0 z-10 mt-6 w-60 rounded-lg bg-white pt-6.5 pb-7.75 shadow-dropdown">
      <div className="flex items-center justify-between px-6 text-primary leading-primary font-bold tracking-primary text-title">
        <button type="button" aria-label="Previous month" className="cursor-pointer px-1">
          <img src="/images/icon-arrow-left.svg" alt="" />
        </button>
        <span>Aug 2021</span>
        <button type="button" aria-label="Next month" className="cursor-pointer px-1">
          <img src="/images/icon-arrow-right.svg" alt="" />
        </button>
      </div>

      <div className="mt-8 grid grid-cols-[repeat(7,16px)] justify-center gap-x-3.75 gap-y-4 text-center text-primary leading-primary font-bold tracking-primary text-title">
        {Array.from({ length: 31 }, (_, i) => (
          <button
            key={i}
            type="button"
            className="cursor-pointer transition-colors hover:text-btn"
          >
            {i + 1}
          </button>
        ))}
        <span className="text-title/8">1</span>
        <span className="text-title/8">2</span>
        <span className="text-title/8">3</span>
        <span className="text-title/8">4</span>
      </div>
    </div>
  );
};

export default Calendar;
