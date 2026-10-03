import { useNewInvoice } from "../../context/NewInvoiceContext";

const ItemRow = () => {
  const { quantity, setQuantity, price, setPrice, itemName, setItemName } =
    useNewInvoice();
  return (
    <li className="grid grid-cols-[64px_100px_1fr_auto] gap-x-4 gap-y-6.25 md:grid-cols-[214px_46px_100px_1fr_auto] md:items-center">
      <label className="col-span-4 flex flex-col gap-3.75 md:col-span-1">
        <span className="form-label md:sr-only">Item Name</span>
        <input
          type="text"
          className="form-input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>

      <label className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Qty.</span>
        <input
          type="text"
          inputMode="numeric"
          className="form-input md:px-0 md:text-center"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>

      <label className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Price</span>
        <input
          type="text"
          inputMode="decimal"
          className="form-input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <div className="flex flex-col gap-2.25">
        <span className="form-label md:sr-only">Total</span>
        <p className="flex h-12 items-center text-primary leading-primary font-bold tracking-primary text-muted">
          0.00
        </p>
      </div>

      <button
        type="button"
        aria-label="Delete item"
        className="mr-2 flex h-12 cursor-pointer items-center self-end md:mr-0"
      >
        <img src="/images/icon-delete.svg" alt="" />
      </button>
    </li>
  );
};

export default ItemRow;
