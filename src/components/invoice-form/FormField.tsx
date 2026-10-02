interface FormFieldProps {
  label: string;
  type?: string;
  className?: string;
}

const FormField = ({ label, type = "text", className = "" }: FormFieldProps) => {
  return (
    <label className={`flex flex-col gap-2.25 ${className}`}>
      <span className="form-label">{label}</span>
      <input type={type} className="form-input" />
    </label>
  );
};

export default FormField;
