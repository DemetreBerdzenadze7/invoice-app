import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import InvoiceItem from "./InvoiceItem";
import EmptyState from "./EmptyState";
import { Link } from "react-router";
import { useNewInvoice } from "../../context/NewInvoiceContext";

const InvoiceList = () => {
  const invoices = useSelector((store: RootState) => store.inputs);
  const { checked } = useNewInvoice();

  const filteredInvoices = invoices.filter(
    (invoice) => !checked || invoice.status === checked,
  );

  return (
    <ul className="flex flex-col gap-4">
      {filteredInvoices.length > 0 ? (
        filteredInvoices.map((invoice) => (
          <Link to={`/invoice/${invoice.inputs.id}`} key={invoice.inputs.id}>
            <InvoiceItem
              id={invoice.inputs.id}
              due={invoice.inputs.date}
              name={invoice.inputs.clientName}
              amount={invoice.itemLists
                .reduce((total, item) => total + item.total, 0)
                .toFixed(2)}
              status={invoice.status}
            />
          </Link>
        ))
      ) : (
        <EmptyState />
      )}
    </ul>
  );
};

export default InvoiceList;
