import { useNewInvoice } from "../../context/NewInvoiceContext";
import FormField from "./FormField";

const AddressFields = () => {
  const {
    address,
    setAdress,
    city,
    setCity,
    post,
    setPost,
    country,
    setCountry,
  } = useNewInvoice();
  return (
    <div className="grid grid-cols-2 gap-x-5.75 gap-y-6.25 md:grid-cols-3 md:gap-x-6">
      <FormField
        label="Street Address"
        name="address"
        className="col-span-2 md:col-span-3"
        value={address}
        onChange={
          ((e: { target: { value: string } }) =>
            setAdress(e.target.value)) as never
        }
      />
      <FormField
        label="City"
        name="city"
        value={city}
        onChange={
          ((e: { target: { value: string } }) =>
            setCity(e.target.value)) as never
        }
      />
      <FormField
        label="Post Code"
        name="post"
        value={post}
        onChange={
          ((e: { target: { value: string } }) =>
            setPost(e.target.value)) as never
        }
      />
      <FormField
        label="Country"
        name="country"
        className="col-span-2 md:col-span-1"
        value={country}
        onChange={
          ((e: { target: { value: string } }) =>
            setCountry(e.target.value)) as never
        }
      />
    </div>
  );
};

export default AddressFields;
