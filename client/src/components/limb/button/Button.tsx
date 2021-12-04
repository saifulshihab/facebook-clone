import React, { ButtonHTMLAttributes } from 'react';

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
      className={`${
        block ? 'w-full' : 'inline-block'
      } px-4 items-center justify-center rounded-md shadow-md font ${
        size === 'small' ? 'h-7' : size === 'large' ? 'h-11' : 'h-8'
      } ${color ? color : 'text-white'} ${bg ? bg : 'bg-primary'}
      ${fontWeight ? fontWeight : 'font-semibold'}
      ${fontSize ? fontSize : 'text-sm'}
      `}
      disabled={isDisabled}
    >
      {isLoading ? '...' : children}
    </button>
  );
};

export default Button;
