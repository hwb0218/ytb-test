import React from 'react';
import type { PropsWithClasses } from '../../types';

type InputMainProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function InputMain({ children, onSubmit, className }: PropsWithClasses<InputMainProps>) {
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
  onClick?: () => void;
};

function InputButton({ children, className, onClick }: PropsWithClasses<InputButtonProps>) {
  return (
    <button
      type="button"
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
