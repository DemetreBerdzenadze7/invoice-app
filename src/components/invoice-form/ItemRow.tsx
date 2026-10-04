import { useFormContext } from "react-hook-form";
import { onlyDigits, onlyPrice } from "./formFunctions";

interface ItemRowProps {
  index: number;
  onRemove: () => void;
}

const ItemRow = ({ index, onRemove }: ItemRowProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<TInvoiceForm>();

  const quantity = watch(`items.${index}.quantity`);
  const price = watch(`items.${index}.price`);
  const itemErrors = errors.items?.[index];

  const quantityField = register(`items.${index}.quantity`);
  const priceField = register(`items.${index}.price`);

  return (
    <li className="grid items-start grid-cols-[64px_100px_1fr_auto] gap-x-4 gap-y-6.25 md:grid-cols-[214px_46px_100px_1fr_auto]">
      <label className="col-span-4 flex flex-col gap-3.75 md:col-span-1">
        <span className="form-label md:sr-only">Item Name</span>
        <input
          type="text"
          className={`form-input ${itemErrors?.itemName ? "border-delete!" : ""}`}
          {...register(`items.${index}.itemName`)}
        />
        {itemErrors?.itemName && (
          <p className="text-xs text-delete">{itemErrors.itemName.message}</p>
        )}
      </label>

      <label className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Qty.</span>
        <input
          type="text"
          inputMode="numeric"
          className={`form-input md:px-0 md:text-center ${itemErrors?.quantity ? "border-delete!" : ""}`}
          {...quantityField}
          onChange={(e) => {
            e.target.value = onlyDigits(e.target.value);
            quantityField.onChange(e);
          }}
        />
        {itemErrors?.quantity && (
          <p className="text-xs text-delete">{itemErrors.quantity.message}</p>
        )}
      </label>

      <label className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Price</span>
        <input
          type="text"
          inputMode="decimal"
          className={`form-input ${itemErrors?.price ? "border-delete!" : ""}`}
          {...priceField}
          onChange={(e) => {
            e.target.value = onlyPrice(e.target.value);
            priceField.onChange(e);
          }}
        />
        {itemErrors?.price && (
          <p className="text-xs text-delete">{itemErrors.price.message}</p>
        )}
      </label>

      <div className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Total</span>
        <p className="flex h-12 items-center text-primary leading-primary font-bold tracking-primary text-muted">
          {(+quantity * +price || 0).toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col gap-2.25">
        <span className="form-label invisible md:sr-only">Delete</span>
        <button
          type="button"
          aria-label="Delete item"
          onClick={onRemove}
          className="mr-2 flex h-12 cursor-pointer items-center md:mr-0"
        >
          <img src="/images/icon-delete.svg" alt="" />
        </button>
      </div>
    </li>
  );
};

export default ItemRow;
