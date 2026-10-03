import { Link } from "react-router";

const GoBack = () => {
  return (
    <Link
      to="/home"
      className="group flex w-fit items-center gap-5.25 text-primary leading-primary font-bold tracking-primary text-title"
    >
      <img src="/images/icon-arrow-left.svg" alt="" />
      <span className="pt-px transition-colors group-hover:text-muted">
        Go back
      </span>
    </Link>
  );
};

export default GoBack;
