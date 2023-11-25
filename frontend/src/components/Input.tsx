import TextField, { TextFieldProps } from '@mui/material/TextField';
import React, { forwardRef } from 'react';

interface TailwindStyledInputProps {
  label: string;
}

const TailwindStyledInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TailwindStyledInputProps & Omit<TextFieldProps, 'label'>
> = ({ label, ...props }, ref) => {
  return (
    <TextField
      label={label}
      variant="standard"
      className="w-full"
      inputRef={ref}
      {...props}
    />
  );
};

const ForwardedTailwindStyledInput = forwardRef(TailwindStyledInput);

export default ForwardedTailwindStyledInput;
