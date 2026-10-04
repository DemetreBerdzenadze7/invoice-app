import { useFieldArray, useFormContext } from "react-hook-form";
import ItemRow from "./ItemRow";

const ItemList = () => {
  const { control } = useFormContext<TInvoiceForm>();
  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  return (
    <section className="mt-17.25 md:mt-6.75 lg:mt-8.75">
      <h3 className="text-heading-s leading-heading font-bold tracking-heading-s text-subheading">
        Item List
      </h3>

      <div className="form-label mt-3.5 hidden grid-cols-[214px_46px_100px_1fr_auto] gap-x-4 md:grid">
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span className="w-3.25" />
      </div>

      <ul className="mt-5.5 flex flex-col gap-12.25 md:mt-3.75 md:gap-4.5">
        {fields.map((field, index) => (
          <ItemRow
            key={field.id}
            index={index}
            onRemove={() => remove(index)}
          />
        ))}
      </ul>

      <button
        type="button"
        onClick={() => append({ itemName: "", quantity: "", price: "" })}
        className="mt-12 h-12 w-full cursor-pointer rounded-full bg-soft text-primary leading-primary font-bold tracking-primary text-description transition-colors hover:bg-field md:mt-4.5"
      >
        + Add New Item
      </button>
    </section>
  );
};

export default ItemList;
