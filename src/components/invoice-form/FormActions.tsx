const FormActions = () => {
  return (
    <div className="relative flex gap-1.75 bg-white px-6 pt-5.25 pb-5.5 text-primary leading-primary font-bold tracking-primary md:gap-2 md:rounded-br-[20px] md:px-14 md:py-8">
      <span className="pointer-events-none absolute inset-x-0 bottom-full h-16 bg-linear-to-b from-transparent to-black/10 md:hidden" />

      <button
        type="button"
        popoverTarget="invoice-form"
        popoverTargetAction="hide"
        className="h-12 w-21 cursor-pointer rounded-full bg-soft text-description transition-colors hover:bg-field md:mr-auto md:w-24"
      >
        Discard
      </button>

      <button
        type="button"
        className="h-12 w-29.25 cursor-pointer rounded-full bg-draft text-muted transition-colors hover:bg-title md:w-33.25"
      >
        Save as Draft
      </button>

      <button
        type="submit"
        className="h-12 w-28 cursor-pointer rounded-full bg-btn text-white transition-colors hover:bg-deleteHover md:w-32"
      >
        Save &amp; Send
      </button>
    </div>
  );
};

export default FormActions;
