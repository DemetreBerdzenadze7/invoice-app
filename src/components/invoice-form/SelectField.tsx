const SelectField = () => {
  return (
    <div className="flex flex-col gap-2.25">
      <span className="form-label">Payment Terms</span>
      <details className="group relative">
        <summary className="form-input flex cursor-pointer list-none items-center justify-between pr-4 group-open:border-btn [&::-webkit-details-marker]:hidden">
          Net 30 Days
          <img
            src="/images/icon-arrow-down.svg"
            alt=""
            className="transition-transform group-open:rotate-180"
          />
        </summary>

        <ul className="absolute top-full left-0 z-10 mt-6 w-full divide-y divide-field rounded-lg bg-white shadow-dropdown">
          <li>
            <button type="button" className="w-full cursor-pointer px-6 py-4 text-left text-primary leading-primary font-bold tracking-primary text-title transition-colors hover:text-btn">
              Net 1 Day
            </button>
          </li>
          <li>
            <button type="button" className="w-full cursor-pointer px-6 py-4 text-left text-primary leading-primary font-bold tracking-primary text-title transition-colors hover:text-btn">
              Net 7 Days
            </button>
          </li>
          <li>
            <button type="button" className="w-full cursor-pointer px-6 py-4 text-left text-primary leading-primary font-bold tracking-primary text-title transition-colors hover:text-btn">
              Net 14 Days
            </button>
          </li>
          <li>
            <button type="button" className="w-full cursor-pointer px-6 py-4 text-left text-primary leading-primary font-bold tracking-primary text-title transition-colors hover:text-btn">
              Net 30 Days
            </button>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default SelectField;
