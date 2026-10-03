import { useFormContext } from "react-hook-form";
import { useNewInvoice } from "../../context/NewInvoiceContext";

const ItemRow = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TInvoiceForm>();

  const {
    price,
    setPrice,
    quantity,
    setQuantity,
    total,
    setTotal,
    itemName,
    setItemName,
  } = useNewInvoice();

  setTotal(+quantity * +price);

  return (
    <li className="grid items-start grid-cols-[64px_100px_1fr_auto] gap-x-4 gap-y-6.25 md:grid-cols-[214px_46px_100px_1fr_auto]">
      <label className="col-span-4 flex flex-col gap-3.75 md:col-span-1">
        <span className="form-label md:sr-only">Item Name</span>
        <input
          type="text"
          className={`form-input ${errors.itemName ? "border-delete!" : ""}`}
          {...register("itemName", {
            onChange: (e) => setItemName(e.target.value),
          })}
          value={itemName}
        />
        {errors.itemName && (
          <p className="text-xs text-delete">{errors.itemName.message}</p>
        )}
      </label>

      <label className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Qty.</span>
        <input
          type="text"
          inputMode="numeric"
          className={`form-input md:px-0 md:text-center ${errors.quantity ? "border-delete!" : ""}`}
          {...register("quantity", {
            onChange: (e) => setQuantity(e.target.value),
          })}
          value={quantity}
        />
        {errors.quantity && (
          <p className="text-xs text-delete">{errors.quantity.message}</p>
        )}
      </label>

      <label className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Price</span>
        <input
          type="text"
          inputMode="decimal"
          className={`form-input ${errors.price ? "border-delete!" : ""}`}
          {...register("price", {
            onChange: (e) => setPrice(e.target.value),
          })}
          value={price}
        />
        {errors.price && (
          <p className="text-xs text-delete">{errors.price.message}</p>
        )}
      </label>

      <div className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Total</span>
        <p className="flex h-12 items-center text-primary leading-primary font-bold tracking-primary text-muted">
          {total}
        </p>
      </div>

      <div className="flex flex-col gap-2.25">
        <span className="form-label invisible md:sr-only">Delete</span>
        <button
          type="button"
          aria-label="Delete item"
          className="mr-2 flex h-12 cursor-pointer items-center md:mr-0"
        >
          <img src="/images/icon-delete.svg" alt="" />
        </button>
      </div>
    </li>
  );
};

export default ItemRow;
