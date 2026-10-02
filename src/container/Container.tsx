import { type ReactNode } from "react";
interface Children {
  children: ReactNode;
}

const Container = ({ children }: Children) => {
  return (
    <div className="mx-auto w-full max-w-206.5 px-6 md:px-12">{children}</div>
  );
};

export default Container;
