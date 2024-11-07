import { ReactNode } from 'react';

interface PricingBoxItemProps {
  className?: string;
  strikeThrough?: boolean;
  children: ReactNode;
}

const PricingBoxItem = ({
  className,
  children,
  strikeThrough,
}: PricingBoxItemProps) => {
  return (
    <li
      className={`mb-3 ${
        strikeThrough ? 'text-gray-400 line-through' : ''
      } ${className}`}
    >
      {children}
    </li>
  );
};

export default PricingBoxItem;
