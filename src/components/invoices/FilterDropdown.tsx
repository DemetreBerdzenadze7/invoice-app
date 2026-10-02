import FilterOption from "./FilterOption";

const FilterDropdown = () => {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-3 text-primary leading-primary font-bold tracking-primary text-title md:gap-3.5 [&::-webkit-details-marker]:hidden">
        <span>
          Filter<span className="hidden md:inline"> by status</span>
        </span>
        <img
          src="/images/icon-arrow-down.svg"
          alt=""
          className="transition-transform group-open:rotate-180"
        />
      </summary>

      <div className="absolute top-full left-1/2 z-10 mt-5.5 flex w-48 -translate-x-1/2 flex-col gap-3.75 rounded-lg bg-white px-6 pt-6 pb-5.75 shadow-dropdown">
        <FilterOption label="Draft" />
        <FilterOption label="Pending" />
        <FilterOption label="Paid" />
      </div>
    </details>
  );
};

export default FilterDropdown;
