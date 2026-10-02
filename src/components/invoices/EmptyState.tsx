const EmptyState = () => {
  return (
    <div className="mt-26 flex flex-col items-center text-center md:mt-52 lg:mt-36">
      <img
        src="/images/illustration-empty.svg"
        alt=""
        className="w-48 md:w-60"
      />
      <h2 className="mt-10 text-heading-m leading-heading-m font-bold tracking-heading-m text-title md:mt-16">
        There is nothing here
      </h2>
      <p className="mt-6 max-w-55 text-secondary leading-body tracking-body text-muted">
        Create an invoice by clicking the{" "}
        <span className="font-bold">
          New<span className="hidden md:inline"> Invoice</span>
        </span>{" "}
        button and get started
      </p>
    </div>
  );
};

export default EmptyState;
