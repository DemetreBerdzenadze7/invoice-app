const SelectField = () => {
  return (
    <label className="flex flex-col gap-2.25">
      <span className="form-label">Payment Terms</span>
      <span className="relative">
        <select
          defaultValue="30"
          className="form-input cursor-pointer appearance-none pr-12"
        >
          <option value="1">Net 1 Day</option>
          <option value="7">Net 7 Days</option>
          <option value="14">Net 14 Days</option>
          <option value="30">Net 30 Days</option>
        </select>
        <img
          src="/images/icon-arrow-down.svg"
          alt=""
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
        />
      </span>
    </label>
  );
};

export default SelectField;
