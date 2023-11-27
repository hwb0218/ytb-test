import React, { ButtonHTMLAttributes } from 'react';
import type { PropsWithClasses } from '../types';

type InputMainProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function InputMain({ children, className, onSubmit }: PropsWithClasses<InputMainProps>) {
  return (
    <form
      onSubmit={onSubmit}
      className={className}
    >
      {children}
    </form>
  );
}

type InputFormProps = {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  value, placeholder, className, onChange,
}: PropsWithClasses<InputFormProps>) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      className={className}
    />
  );
}

type InputButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement> & {type?: 'submit'}

function InputButton({
  type,
  children,
  className,
  onClick,
}: PropsWithClasses<InputButtonProps>) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

const Input = Object.assign(InputMain, {
  field: InputField,
  button: InputButton,
});

export default Input;
