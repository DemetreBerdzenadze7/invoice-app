const DateField = () => {
  return (
    <label className="flex flex-col gap-2.25">
      <span className="form-label">Invoice Date</span>
      <input
        type="date"
        onClick={(e) => e.currentTarget.showPicker()}
        className="form-input cursor-pointer pr-4 [&::-webkit-calendar-picker-indicator]:size-4 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:bg-[url(/images/icon-calendar.svg)] [&::-webkit-calendar-picker-indicator]:bg-center [&::-webkit-calendar-picker-indicator]:bg-no-repeat [&::-webkit-calendar-picker-indicator]:p-0"
      />
    </label>
  );
};

export default DateField;
