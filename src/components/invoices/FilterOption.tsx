interface FilterOptionProps {
  label: string;
}

const FilterOption = ({ label }: FilterOptionProps) => {
  return (
    <label className="group/option flex h-4.25 cursor-pointer items-center gap-3.25 text-primary leading-primary font-bold tracking-primary text-title">
      <input
        type="checkbox"
        className="size-4 shrink-0 cursor-pointer appearance-none rounded-xs border border-transparent bg-field bg-center bg-no-repeat transition-colors group-hover/option:border-btn checked:bg-btn checked:bg-[url(/images/icon-check.svg)]"
      />
      <span className="pt-0.5">{label}</span>
    </label>
  );
};

export default FilterOption;
