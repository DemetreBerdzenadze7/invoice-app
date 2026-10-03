import { type ReactNode } from "react";

interface InvoiceInfoProps {
  label: string;
  value: string;
  children?: ReactNode;
  className?: string;
}

const InvoiceInfo = ({
  label,
  value,
  children,
  className = "",
}: InvoiceInfoProps) => {
  return (
    <div className={className}>
      <p className="form-label">{label}</p>
      <p className="mt-3.25 text-primary leading-value font-bold tracking-primary text-title">
        {value}
      </p>
      {children}
    </div>
  );
};

export default InvoiceInfo;
