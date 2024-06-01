import { useField } from 'formik';
import React, { InputHTMLAttributes, useRef } from 'react';
import { cn } from '../../../utils';

type ITextInputSize = 'small' | 'medium' | 'large';

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: ITextInputSize;
};

const TextInput: React.FC<IProps> = (props) => {
  const { inputSize } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [field, { error, touched }] = useField(props as string);
  return (
    <div className="my-3">
      <input
        ref={inputRef}
        {...field}
        {...props}
        className={cn(
          'w-full rounded-md border border-gray-300 px-2 outline-none focus:border-primary',
          inputSize === 'small'
            ? 'h-7'
            : inputSize === 'large'
              ? 'h-12'
              : 'h-8',
        )}
      />
      {touched && error ? (
        <div className="w-full text-sm text-red-500">
          <p>{error}</p>
        </div>
      ) : null}
    </div>
  );
};

export { TextInput };
