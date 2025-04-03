import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../utils";

const inputStyles = cva("outline-none font-dmsans text-woodsmoke-800", {
  variants: {
    variant: {
      sm: "border-1 border-woodsmoke-200 px-2 py-1 rounded",
      md: "",
      lg: "w-full border-1 border-woodsmoke-200 px-3 py-1 rounded-lg font-medium tracking-wide text-lg text-woodsmoke-900",
    },
    labelStyle: {
      normal: "text-base font-stretch-110% font-medium tracking-wide",
      dark: "px-3 py-2 text-lg font-semibold tracking-wide leading-2",
    },
  },
});

type InputVariants = VariantProps<typeof inputStyles>;

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Required<InputVariants> {
  type: string;
  placeholder: string;
  label: string;
}

export default function Input({
  type,
  placeholder,
  label,
  variant,
  labelStyle,
  className,
  ...props
}: InputProps) {
  return (
    <div className={cn("flex flex-col gap-1 justify-items-start py-1 w-full")}>
      <label
        htmlFor={placeholder.toUpperCase()}
        className={cn(inputStyles({ labelStyle }))}
      >
        {label}
      </label>
      <input
        id={placeholder.toUpperCase()}
        type={type}
        placeholder={placeholder}
        {...props}
        className={cn(inputStyles({ variant }), "w-full", className)}
      />
    </div>
  );
}
