import InvoiceForm from "../components/invoice-form/InvoiceForm";
import InvoiceList from "../components/invoices/InvoiceList";
import InvoicesHeader from "../components/invoices/InvoicesHeader";

const Home = () => {
  return (
    <section className="pt-8 pb-8 md:pt-15.25 md:pb-14 lg:pt-19.25 lg:pb-18">
      <InvoicesHeader />
      <div className="mt-8 md:mt-13.75 lg:mt-16">
        <InvoiceList />
      </div>

      <InvoiceForm />
    </section>
  );
};

export default Home;
