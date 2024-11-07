import { ReactElement } from 'react';
import PricingBoxItem from './PricingBoxItem';

interface PricingBoxProps {
  title: string;
  price: number;
  className?: string;
  glow?: boolean;
  children:
    | ReactElement<typeof PricingBoxItem>[]
    | ReactElement<typeof PricingBoxItem>;
}

const PricingBox = (props: PricingBoxProps) => {
  return (
    <div
      className={`${
        props.glow ? 'shadow-[0px_0px_27px_0px_rgba(251,146,60,1)]' : ''
      } w-full max-w-[400px] rounded-lg bg-slate-900 p-8 ${props.className}`}
    >
      <h3 className="mb-2 text-2xl font-semibold">{props.title}</h3>
      <p className="mb-6">
        <span className="text-3xl font-semibold text-orange-400">
          ${props.price}
        </span>{' '}
        / session
      </p>

      <ul>{props.children}</ul>
    </div>
  );
};

export default PricingBox;
