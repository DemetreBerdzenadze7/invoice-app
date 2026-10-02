const DateField = () => {
  return (
    <label className="flex flex-col gap-2.25">
      <span className="form-label">Invoice Date</span>
      <span className="relative">
        <input type="text" className="form-input pr-12" />
        <img
          src="/images/icon-calendar.svg"
          alt=""
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
        />
      </span>
    </label>
  );
};

export default DateField;
