import Calendar from "./Calendar";

const DateField = () => {
  return (
    <div className="flex flex-col gap-2.25">
      <span className="form-label">Invoice Date</span>
      <details className="group relative">
        <summary className="form-input flex cursor-pointer list-none items-center justify-between group-open:border-btn [&::-webkit-details-marker]:hidden">
          21 Aug 2021
          <img src="/images/icon-calendar.svg" alt="" />
        </summary>
        <Calendar />
      </details>
    </div>
  );
};

export default DateField;
