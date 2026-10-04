import { FormProvider, useForm } from "react-hook-form";
import AddressFields from "./AddressFields";
import ClientAddressFields from "./ClientAddressFields";
import DateField from "./DateField";
import EditFormActions from "./EditFormActions";
import FormField from "./FormField";
import ItemList from "./ItemList";
import SelectField from "./SelectField";
import { useNewInvoice } from "../../context/NewInvoiceContext";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { AppDispatch, RootState } from "../../redux/store";
import { changeInvoice } from "../../redux/slices/inputSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./invoiceSchema";

dayjs.extend(customParseFormat);

interface EditInvoiceFormProps {
  id: string;
}

const EditInvoiceForm = ({ id }: EditInvoiceFormProps) => {
  const invoices = useSelector((store: RootState) => store.inputs);
  const dispatch = useDispatch<AppDispatch>();

  const { setClientName, setClientEmail, setProject } = useNewInvoice();

  const found = invoices.find((invoice) => invoice.inputs.id === id);

  const date = found?.inputs.date
    ? dayjs(found.inputs.date, "DD MMM YYYY").format("YYYY-MM-DD")
    : "";

  const methods = useForm<TInvoiceForm>({
    defaultValues: found
      ? {
          ...found.inputs,
          items: found.itemLists.map(({ itemName, quantity, price }) => ({
            itemName,
            quantity,
            price,
          })),
          date,
        }
      : { payment: "Net 30 Days" },
    resolver: yupResolver(schema),
  });

  if (!found) return;

  const onSubmit = (data: TInvoiceForm) => {
    const { items, ...inputs } = data;

    dispatch(
      changeInvoice({
        inputs: {
          ...inputs,
          id,
          date: inputs.date ? dayjs(inputs.date).format("DD MMM YYYY") : "",
        },
        itemLists: items.map((item, index) => ({
          ...item,
          itemID: String(index),
          total: +item.quantity * +item.price,
        })),
        status: found.status,
      }),
    );

    document.getElementById("edit-invoice-form")?.hidePopover();
  };

  return (
    <div
      id="edit-invoice-form"
      popover="auto"
      className="fixed inset-x-0 top-18 bottom-0 hidden h-auto w-full max-w-none flex-col overflow-hidden bg-white open:flex backdrop:top-18 backdrop:bg-black/50 md:top-20 md:w-154 md:rounded-r-[20px] md:backdrop:top-20 lg:top-0 lg:left-25.75 lg:backdrop:top-0 lg:backdrop:left-25.75"
    >
      <FormProvider {...methods}>
        <form
          className="flex min-h-0 flex-1 flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex-1 overflow-y-auto px-6 pt-8.25 pb-22 [scrollbar-color:var(--color-field)_transparent] md:px-14 md:pt-14.75 md:pb-3.75 lg:pb-1.75">
            <button
              type="button"
              popoverTarget="edit-invoice-form"
              popoverTargetAction="hide"
              className="flex cursor-pointer items-center gap-5.5 text-primary leading-primary font-bold tracking-primary text-title md:hidden"
            >
              <img src="/images/icon-arrow-left.svg" alt="" />
              Go back
            </button>

            <h2 className="mt-6.5 text-heading-m leading-heading font-bold tracking-heading-drawer text-title md:mt-0">
              Edit <span className="text-muted">#</span>
              {id}
            </h2>

            <section className="mt-5.5 md:mt-11.5">
              <h3 className="text-primary leading-primary font-bold tracking-primary text-btn">
                Bill From
              </h3>
              <div className="mt-6">
                <AddressFields defaults={found.inputs} />
              </div>
            </section>

            <section className="mt-10.25 md:mt-12.25">
              <h3 className="text-primary leading-primary font-bold tracking-primary text-btn">
                Bill To
              </h3>
              <div className="mt-6 flex flex-col gap-6.25">
                <FormField
                  label="Client’s Name"
                  name="clientName"
                  defaultValue={found.inputs.clientName}
                  onChange={
                    ((e: { target: { value: string } }) =>
                      setClientName(e.target.value)) as never
                  }
                />
                <FormField
                  label="Client’s Email"
                  name="clientEmail"
                  type="email"
                  defaultValue={found.inputs.clientEmail}
                  onChange={
                    ((e: { target: { value: string } }) =>
                      setClientEmail(e.target.value)) as never
                  }
                />
                <ClientAddressFields defaults={found.inputs} />
              </div>
            </section>

            <section className="mt-10.25 grid gap-6.25 md:mt-12.25 md:grid-cols-2 md:gap-x-6">
              <DateField defaultValue={date} />
              <SelectField defaultValue={found.inputs.payment} />
              <FormField
                label="Project Description"
                name="project"
                className="md:col-span-2"
                defaultValue={found.inputs.project}
                onChange={
                  ((e: { target: { value: string } }) =>
                    setProject(e.target.value)) as never
                }
              />
            </section>

            <ItemList />
          </div>

          <EditFormActions />
        </form>
      </FormProvider>
    </div>
  );
};

export default EditInvoiceForm;
