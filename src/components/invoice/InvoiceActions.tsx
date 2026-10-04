import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { markAsPaid, removeInvoice } from "../../redux/slices/inputSlice";
import { useNavigate } from "react-router";

interface InvoiceActionsProps {
  id: string;
  status: TStatus;
}

const InvoiceActions = ({ id, status }: InvoiceActionsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 text-primary leading-primary font-bold tracking-primary">
      <button
        type="button"
        popoverTarget="edit-invoice-form"
        className="h-12 w-18.25 cursor-pointer rounded-full bg-soft pt-px text-description transition-colors hover:bg-field"
      >
        Edit
      </button>

      <button
        type="button"
        className="h-12 w-22.25 cursor-pointer rounded-full bg-delete pt-px text-white transition-colors hover:bg-delete-hover"
        onClick={() => {
          dispatch(removeInvoice(id));
          navigate("/home");
        }}
      >
        Delete
      </button>

      {status !== "paid" && (
        <button
          type="button"
          onClick={() => dispatch(markAsPaid(id))}
          className="h-12 flex-1 cursor-pointer rounded-full bg-btn px-6 pt-px text-white transition-colors hover:bg-deleteHover md:w-32.75 md:flex-none md:px-0"
        >
          Mark as Paid
        </button>
      )}
    </div>
  );
};

export default InvoiceActions;
