import { useFormContext } from "react-hook-form";
import { useNewInvoice } from "../../context/NewInvoiceContext";

const DateField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TInvoiceForm>();

  const { date, setDate } = useNewInvoice();
  return (
    <label className="flex flex-col gap-2.25">
      <span className="form-label">Invoice Date</span>
      <input
        type="date"
        onClick={(e) => {
          e.currentTarget.showPicker();
        }}
        {...register("date", {
          onChange: (e) => setDate(e.target.value),
        })}
        value={date}
        className={`form-input ${errors.date ? "border-delete!" : ""} cursor-pointer pr-4 [&::-webkit-calendar-picker-indicator]:size-4 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:bg-[url(/images/icon-calendar.svg)] [&::-webkit-calendar-picker-indicator]:bg-center [&::-webkit-calendar-picker-indicator]:bg-no-repeat [&::-webkit-calendar-picker-indicator]:p-0`}
      />
      {errors.date && (
        <p className="text-xs text-delete">{errors.date.message}</p>
      )}
    </label>
  );
};

export default DateField;
