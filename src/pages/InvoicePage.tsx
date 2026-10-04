import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../redux/store";
import GoBack from "../components/invoice/GoBack";
import InvoiceStatusBar from "../components/invoice/InvoiceStatusBar";
import InvoiceDetails from "../components/invoice/InvoiceDetails";
import InvoiceActions from "../components/invoice/InvoiceActions";
import EditInvoiceForm from "../components/invoice-form/EditInvoiceForm";

const InvoicePage = () => {
  const { id } = useParams();
  const invoices = useSelector((store: RootState) => store.inputs);

  const invoice = invoices.find((invoice) => invoice.inputs.id === id);

  if (!invoice) return null;

  return (
    <section className="pt-8.25 md:pt-12.25 md:pb-13.5 lg:pt-16.25">
      <GoBack />

      <div className="mt-7.75">
        <InvoiceStatusBar id={invoice.inputs.id} status={invoice.status} />
      </div>

      <div className="mt-4 md:mt-6">
        <InvoiceDetails invoice={invoice} />
      </div>

      <div className="-mx-6 mt-14 bg-surface px-6 pt-5.25 pb-5.5 md:hidden">
        <InvoiceActions id={invoice.inputs.id} status={invoice.status} />
      </div>

      <EditInvoiceForm id={invoice.inputs.id} />
    </section>
  );
};

export default InvoicePage;
