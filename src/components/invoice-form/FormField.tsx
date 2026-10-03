import type { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  label: string;
  name: keyof TInvoiceForm;
  type?: string;
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FormField = ({
  label,
  name,
  type = "text",
  className = "",
  value,
  onChange,
}: FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TInvoiceForm>();
  return (
    <label className={`flex flex-col gap-2.25 ${className}`}>
      <span className="form-label">{label}</span>
      <input
        type={type}
        className={`form-input ${errors[name] ? "border-delete!" : ""}`}
        {...register(name, { onChange })}
        value={value}
      />
      {errors[name] && (
        <p className="text-xs text-delete">{errors[name].message}</p>
      )}
    </label>
  );
};

export default FormField;
