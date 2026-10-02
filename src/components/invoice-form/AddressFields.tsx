import FormField from "./FormField";

const AddressFields = () => {
  return (
    <div className="grid grid-cols-2 gap-x-5.75 gap-y-6.25 md:grid-cols-3 md:gap-x-6">
      <FormField label="Street Address" className="col-span-2 md:col-span-3" />
      <FormField label="City" />
      <FormField label="Post Code" />
      <FormField label="Country" className="col-span-2 md:col-span-1" />
    </div>
  );
};

export default AddressFields;
