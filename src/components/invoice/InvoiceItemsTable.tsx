interface InvoiceItemsTableProps {
  items: IItemLists[];
}

const InvoiceItemsTable = ({ items }: InvoiceItemsTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="bg-soft px-6 pt-6 pb-5.75 md:px-8 md:pt-8.25 md:pb-9.75">
        <div className="hidden text-secondary leading-body font-medium tracking-body text-description md:grid md:grid-cols-[1fr_80px_95px_137px]">
          <span>Item Name</span>
          <span className="text-center">QTY.</span>
          <span className="text-right">Price</span>
          <span className="text-right">Total</span>
        </div>

        <ul className="flex flex-col gap-6 text-primary leading-primary font-bold tracking-primary md:mt-8 md:gap-8">
          {items.map((item) => (
            <li
              key={item.itemID}
              className="flex items-center justify-between md:grid md:grid-cols-[1fr_80px_95px_137px]"
            >
              <div>
                <p className="text-title">{item.itemName}</p>
                <p className="mt-2 text-description md:hidden">
                  {item.quantity} x £ {Number(item.price).toFixed(2)}
                </p>
              </div>
              <span className="hidden text-center text-description md:block">
                {item.quantity}
              </span>
              <span className="hidden text-right text-description md:block">
                £ {Number(item.price).toFixed(2)}
              </span>
              <span className="text-right text-title">
                £ {item.total.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex h-20 items-center justify-between bg-total px-6 text-white md:px-8">
        <span className="text-secondary leading-body font-medium tracking-body">
          <span className="md:hidden">Grand Total</span>
          <span className="hidden md:inline">Amount Due</span>
        </span>
        <span className="text-heading-m leading-heading font-bold tracking-heading-drawer">
          £ {items.reduce((total, item) => total + item.total, 0).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default InvoiceItemsTable;
