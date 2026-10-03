import InvoiceAddress from "./InvoiceAddress";
import InvoiceInfo from "./InvoiceInfo";
import InvoiceItemsTable from "./InvoiceItemsTable";

interface InvoiceDetailsProps {
  invoice: TInputs;
}

const InvoiceDetails = ({ invoice }: InvoiceDetailsProps) => {
  const { inputs, itemLists } = invoice;

  return (
    <div className="rounded-lg bg-white px-6 pt-6.25 pb-6 shadow-card md:px-8 md:pt-8.5 md:pb-8 lg:px-12 lg:pt-12.5 lg:pb-12">
      <div className="flex flex-col gap-7.5 md:flex-row md:justify-between">
        <div>
          <p className="text-primary leading-primary font-bold tracking-primary text-title md:leading-primary-loose">
            <span className="text-description md:text-muted">#</span>
            {inputs.id}
          </p>
          <p className="mt-1 text-secondary leading-secondary font-medium tracking-body text-description md:mt-1.75">
            {inputs.project}
          </p>
        </div>

        <InvoiceAddress
          street={inputs.address}
          city={inputs.city}
          post={inputs.post}
          country={inputs.country}
          className="md:text-right"
        />
      </div>

      <div className="mt-7.75 flex flex-wrap justify-between gap-y-8 md:mt-5.25 md:grid md:grid-cols-[196px_203px_1fr]">
        <div>
          <InvoiceInfo label="Invoice Date" value={inputs.date} />
          <InvoiceInfo
            label="Payment Due"
            value={inputs.payment}
            className="mt-7.75"
          />
        </div>

        <InvoiceInfo label="Bill To" value={inputs.clientName}>
          <InvoiceAddress
            street={inputs.clientAddress}
            city={inputs.clientCity}
            post={inputs.clientPost}
            country={inputs.clientCountry}
            className="mt-1.75"
          />
        </InvoiceInfo>

        <InvoiceInfo
          label="Sent to"
          value={inputs.clientEmail}
          className="w-full md:w-auto"
        />
      </div>

      <div className="mt-9.5 md:mt-11.75 lg:mt-11">
        <InvoiceItemsTable items={itemLists} />
      </div>
    </div>
  );
};

export default InvoiceDetails;
