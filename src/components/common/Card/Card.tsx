import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex items-center rounded-xl shadow-lg bg-slate-100 p-3 gap-4">
      {children}
    </div>
  );
};

export default Card;
