import { useNewInvoice } from "../../context/NewInvoiceContext";

interface FilterOptionProps {
  label: string;
  value: TStatus;
  onChange: (value: TStatus | "") => void;
}

const FilterOption = ({ label, value, onChange }: FilterOptionProps) => {
  const { checked } = useNewInvoice();
  const isChecked = checked === value;
  return (
    <label className="group/option flex h-4.25 cursor-pointer items-center gap-3.25 text-primary leading-primary font-bold tracking-primary text-title">
      <input
        type="radio"
        className="size-4 shrink-0 cursor-pointer appearance-none rounded-xs border border-transparent bg-line bg-center bg-no-repeat transition-colors group-hover/option:border-btn checked:bg-btn checked:bg-[url(/images/icon-check.svg)]"
        name="status-filter"
        value={value}
        checked={isChecked}
        readOnly
        onClick={() => onChange(isChecked ? "" : value)}
      />
      <span className="pt-0.5">{label}</span>
    </label>
  );
};

export default FilterOption;
