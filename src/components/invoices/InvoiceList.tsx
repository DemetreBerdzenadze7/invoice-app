import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import InvoiceItem from "./InvoiceItem";
import EmptyState from "./EmptyState";

const InvoiceList = () => {
  const invoices = useSelector((store: RootState) => store.inputs);
  return (
    <ul className="flex flex-col gap-4">
      {invoices.length > 0 ? (
        invoices.map((invoice) => (
          <InvoiceItem
            id={invoice.inputs.id}
            due={invoice.inputs.date}
            name={invoice.inputs.clientName}
            amount={invoice.itemLists.reduce(
              (total, item) => total + item.total,
              0,
            )}
            status={"paid"}
            key={invoice.inputs.id}
          />
        ))
      ) : (
        <EmptyState />
      )}
    </ul>
  );
};

export default InvoiceList;
