interface InvoiceAddressProps {
  street: string;
  city: string;
  post: string;
  country: string;
  className?: string;
}

const InvoiceAddress = ({
  street,
  city,
  post,
  country,
  className = "",
}: InvoiceAddressProps) => {
  return (
    <address
      className={`flex flex-col gap-px text-secondary leading-body font-medium tracking-body text-description not-italic ${className}`}
    >
      <span>{street}</span>
      <span>{city}</span>
      <span>{post}</span>
      <span>{country}</span>
    </address>
  );
};

export default InvoiceAddress;
