import FilterDropdown from "./FilterDropdown";

const InvoicesHeader = () => {
  return (
    <div className="flex items-end justify-between md:items-start">
      <div className="md:mt-px">
        <h1 className="text-heading-m leading-heading-m font-bold tracking-heading-m text-title md:text-heading-l md:leading-heading-l md:tracking-heading-l">
          Invoices
        </h1>
        <p className="mt-0.75 text-secondary leading-secondary font-medium tracking-body text-muted">
          <span className="hidden md:inline">There are </span>7
          <span className="hidden md:inline"> total</span> invoices
        </p>
      </div>

      <div className="flex items-center gap-4.5 md:gap-10">
        <FilterDropdown />

        <button
          type="button"
          popoverTarget="invoice-form"
          className="flex h-11 w-22.5 cursor-pointer items-center gap-2 rounded-full bg-btn p-1.5 text-primary leading-primary font-bold tracking-primary text-white transition-colors hover:bg-deleteHover md:h-12 md:w-37.5 md:gap-4 md:p-2"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-white">
            <img src="/images/icon-plus.svg" alt="" />
          </span>
          <span>
            New<span className="hidden md:inline"> Invoice</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default InvoicesHeader;
