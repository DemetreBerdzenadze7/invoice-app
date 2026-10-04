import StatusBadge from "./StatusBadge";

interface InvoiceItemProps {
  id: string;
  due: string;
  name: string;
  amount: string;
  status: TStatus;
}

const InvoiceItem = ({ id, due, name, amount, status }: InvoiceItemProps) => {
  return (
    <li className="grid cursor-pointer grid-cols-2 items-center rounded-lg bg-surface px-6 pt-6.25 pb-5.5 shadow-card outline-1 -outline-offset-1 outline-transparent transition-colors hover:outline-btn md:flex md:py-4 lg:pl-8">
      <p className="col-start-1 row-start-1 text-primary leading-primary font-bold tracking-primary text-title md:w-21.75 lg:w-25.75">
        <span className="text-description">#</span>
        {id}
      </p>

      <p className="col-start-1 row-start-2 mt-6 text-secondary leading-secondary font-medium tracking-body whitespace-pre text-muted md:mt-0 md:w-35.75 lg:w-37.75">
        {"Due  "}
        <span className="text-description">{due}</span>
      </p>

      <p className="col-start-2 row-start-1 justify-self-end text-secondary leading-secondary font-medium tracking-body text-name md:flex-1">
        {name}
      </p>

      <p className="col-start-1 row-start-3 mt-2.25 text-primary leading-primary-loose font-bold tracking-primary text-title md:mt-0 md:text-right">
        £ {amount}
      </p>

      <div className="col-start-2 row-span-2 row-start-2 mb-1.5 self-end justify-self-end md:mb-0 md:ml-10">
        <StatusBadge status={status} />
      </div>

      <img
        src="/images/icon-arrow-right.svg"
        alt=""
        className="hidden md:ml-5 md:block"
      />
    </li>
  );
};

export default InvoiceItem;
