import React, { InputHTMLAttributes, useRef } from 'react';
import { useField } from 'formik';

type ITextInputSize = 'small' | 'medium' | 'large';

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  inputsize?: ITextInputSize;
};

const TextInput: React.FC<IProps> = (props) => {
  const { inputsize } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [field, { error, touched }] = useField(props as string);
  return (
    <div className=" my-3 ">
      <input
        ref={inputRef}
        {...field}
        {...props}
        className={`w-full px-2 border border-gray-300 rounded-md focus:border-primary outline-none ${
          inputsize === 'small' ? 'h-7' : inputsize === 'large' ? 'h-12' : 'h-8'
        }`}
      />
      {touched && error ? (
        <div className="text-sm w-full text-red-500">
          <p>{error}</p>
        </div>
      ) : null}
    </div>
  );
};

export { TextInput };
