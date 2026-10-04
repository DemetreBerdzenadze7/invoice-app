import { useNewInvoice } from "../../context/NewInvoiceContext";
import FormField from "./FormField";

interface ClientAddressFieldsProps {
  defaults?: IInputs;
}

const ClientAddressFields = ({ defaults }: ClientAddressFieldsProps) => {
  const {
    clientAddress,
    setClientAddress,
    clientCity,
    setClientCity,
    clientPost,
    setClientPost,
    clientCountry,
    setClientCountry,
  } = useNewInvoice();
  return (
    <div className="grid grid-cols-2 gap-x-5.75 gap-y-6.25 md:grid-cols-3 md:gap-x-6">
      <FormField
        label="Street Address"
        name="clientAddress"
        className="col-span-2 md:col-span-3"
        value={defaults ? undefined : clientAddress}
        defaultValue={defaults?.clientAddress}
        onChange={
          ((e: { target: { value: string } }) =>
            setClientAddress(e.target.value)) as never
        }
      />
      <FormField
        label="City"
        name="clientCity"
        value={defaults ? undefined : clientCity}
        defaultValue={defaults?.clientCity}
        onChange={
          ((e: { target: { value: string } }) =>
            setClientCity(e.target.value)) as never
        }
      />
      <FormField
        label="Post Code"
        name="clientPost"
        value={defaults ? undefined : clientPost}
        defaultValue={defaults?.clientPost}
        onChange={
          ((e: { target: { value: string } }) =>
            setClientPost(e.target.value)) as never
        }
      />
      <FormField
        label="Country"
        name="clientCountry"
        className="col-span-2 md:col-span-1"
        value={defaults ? undefined : clientCountry}
        defaultValue={defaults?.clientCountry}
        onChange={
          ((e: { target: { value: string } }) =>
            setClientCountry(e.target.value)) as never
        }
      />
    </div>
  );
};

export default ClientAddressFields;
