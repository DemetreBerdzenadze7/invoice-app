import type { ChangeEventHandler } from "react";

interface FormFieldProps {
  label: string;
  type?: string;
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FormField = ({
  label,
  type = "text",
  className = "",
  value,
  onChange,
}: FormFieldProps) => {
  return (
    <label className={`flex flex-col gap-2.25 ${className}`}>
      <span className="form-label">{label}</span>
      <input
        type={type}
        className="form-input"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default FormField;
