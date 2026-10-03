import StatusBadge from "../invoices/StatusBadge";
import InvoiceActions from "./InvoiceActions";

interface InvoiceStatusBarProps {
  id: string;
  status: TStatus;
}

const InvoiceStatusBar = ({ id, status }: InvoiceStatusBarProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-6 pt-6 pb-6.75 shadow-card md:px-8 md:py-6">
      <div className="flex w-full items-center justify-between md:w-auto md:justify-start md:gap-5">
        <span className="text-secondary leading-secondary font-medium tracking-body text-name">
          Status
        </span>
        <StatusBadge status={status} />
      </div>

      <div className="hidden md:block">
        <InvoiceActions id={id} status={status} />
      </div>
    </div>
  );
};

export default InvoiceStatusBar;
