import AddressFields from "./AddressFields";
import DateField from "./DateField";
import FormActions from "./FormActions";
import FormField from "./FormField";
import ItemList from "./ItemList";
import SelectField from "./SelectField";

const InvoiceForm = () => {
  return (
    <div
      id="invoice-form"
      popover="auto"
      className="fixed inset-x-0 top-18 bottom-0 hidden h-auto w-full max-w-none flex-col overflow-hidden bg-white open:flex backdrop:top-18 backdrop:bg-black/50 md:top-20 md:w-154 md:rounded-r-[20px] md:backdrop:top-20 lg:top-0 lg:left-25.75 lg:backdrop:top-0 lg:backdrop:left-25.75"
    >
      <form className="flex min-h-0 flex-1 flex-col">
        <div className="flex-1 overflow-y-auto px-6 pt-8.25 pb-22 [scrollbar-color:var(--color-field)_transparent] md:px-14 md:pt-14.75 md:pb-3.75 lg:pb-1.75">
          <button
            type="button"
            popoverTarget="invoice-form"
            popoverTargetAction="hide"
            className="flex cursor-pointer items-center gap-5.5 text-primary leading-primary font-bold tracking-primary text-title md:hidden"
          >
            <img src="/images/icon-arrow-left.svg" alt="" />
            Go back
          </button>

          <h2 className="mt-6.5 text-heading-m leading-heading font-bold tracking-heading-drawer text-title md:mt-0">
            New Invoice
          </h2>

          <section className="mt-5.5 md:mt-11.5">
            <h3 className="text-primary leading-primary font-bold tracking-primary text-btn">
              Bill From
            </h3>
            <div className="mt-6">
              <AddressFields />
            </div>
          </section>

          <section className="mt-10.25 md:mt-12.25">
            <h3 className="text-primary leading-primary font-bold tracking-primary text-btn">
              Bill To
            </h3>
            <div className="mt-6 flex flex-col gap-6.25">
              <FormField label="Client’s Name" />
              <FormField label="Client’s Email" type="email" />
              <AddressFields />
            </div>
          </section>

          <section className="mt-10.25 grid gap-6.25 md:mt-12.25 md:grid-cols-2 md:gap-x-6">
            <DateField />
            <SelectField />
            <FormField label="Project Description" className="md:col-span-2" />
          </section>

          <ItemList />
        </div>

        <FormActions />
      </form>
    </div>
  );
};

export default InvoiceForm;
