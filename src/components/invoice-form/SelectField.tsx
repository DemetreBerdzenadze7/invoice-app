import { useRef, useState } from "react";

const terms = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];

const SelectField = () => {
  const [selected, setSelected] = useState("Net 30 Days");
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleSelect = (term: string) => {
    setSelected(term);
    detailsRef.current?.removeAttribute("open");
  };

  return (
    <div className="flex flex-col gap-2.25">
      <span className="form-label">Payment Terms</span>
      <details ref={detailsRef} className="group relative">
        <summary className="form-input flex cursor-pointer list-none items-center justify-between pr-4 group-open:border-btn [&::-webkit-details-marker]:hidden">
          {selected}
          <img
            src="/images/icon-arrow-down.svg"
            alt=""
            className="transition-transform group-open:rotate-180"
          />
        </summary>

        <ul className="absolute top-full left-0 z-10 mt-6 w-full divide-y divide-field rounded-lg bg-white shadow-dropdown">
          {terms.map((term) => (
            <li key={term}>
              <button
                type="button"
                onClick={() => handleSelect(term)}
                className="w-full cursor-pointer px-6 py-4 text-left text-primary leading-primary font-bold tracking-primary text-title transition-colors hover:text-btn"
              >
                {term}
              </button>
            </li>
          ))}
        </ul>
      </details>
      <input type="hidden" name="paymentTerms" value={selected} />
    </div>
  );
};

export default SelectField;
