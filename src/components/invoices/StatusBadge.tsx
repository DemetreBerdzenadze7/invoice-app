const statusStyles = {
  paid: "bg-paid/6 text-paid",
  pending: "bg-pending/6 text-pending",
  draft: "bg-draft/6 text-draft",
};

interface StatusBadgeProps {
  status: keyof typeof statusStyles;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span
      className={`flex h-10 w-26 items-center justify-center gap-2 rounded-md pt-0.5 text-primary leading-primary font-bold tracking-primary capitalize ${statusStyles[status]}`}
    >
      <span className="size-2 -translate-y-px rounded-full bg-current" />
      {status}
    </span>
  );
};

export default StatusBadge;
