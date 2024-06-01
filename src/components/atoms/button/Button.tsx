import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../../../utils';

type IColor = 'text-primary';
type IBackground = 'bg-white' | 'bg-greenLight';
type IButtonSize = 'small' | 'medium' | 'large';
type IFontSize = 'text-xs' | 'text-md' | 'text-xl' | 'text-2xl';
type IFontWeight = 'font-bold' | 'font-extrabold' | 'font-thin' | 'font-medium';

type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: IButtonSize;
  bg?: IBackground;
  color?: IColor;
  fontWeight?: IFontWeight;
  fontSize?: IFontSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  block?: boolean;
};

const Button: React.FC<IProps> = (props) => {
  const {
    color,
    bg,
    size,
    fontSize,
    fontWeight,
    isDisabled,
    isLoading,
    children,
    block,
  } = props;
  return (
    <button
      {...props}
      className={cn(
        'items-center justify-center rounded-md px-4 shadow-md',
        block ? 'w-full' : 'inline-block',
        size === 'small' ? 'h-7' : size === 'large' ? 'h-11' : 'h-8',
        bg ? bg : 'bg-primary',
        color ? color : 'text-white',
        fontWeight ? fontWeight : 'font-semibold',
        fontSize ? fontSize : 'text-sm',
      )}
      disabled={isDisabled}
    >
      {isLoading ? '...' : children}
    </button>
  );
};

export default Button;
