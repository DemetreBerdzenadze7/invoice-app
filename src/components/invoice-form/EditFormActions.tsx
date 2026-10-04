const EditFormActions = () => {
  return (
    <div className="relative flex justify-end gap-2 bg-white px-6 pt-5.25 pb-5.5 text-primary leading-primary font-bold tracking-primary md:rounded-br-[20px] md:px-14 md:py-8">
      <span className="pointer-events-none absolute inset-x-0 bottom-full h-16 bg-linear-to-b from-transparent to-black/10 md:hidden" />

      <button
        type="button"
        popoverTarget="edit-invoice-form"
        popoverTargetAction="hide"
        className="h-12 w-24 cursor-pointer rounded-full bg-soft text-description transition-colors hover:bg-field"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="h-12 w-34.5 cursor-pointer rounded-full bg-btn text-white transition-colors hover:bg-deleteHover"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditFormActions;
