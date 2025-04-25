import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, Ref } from "react";
import { cn } from "../utils";

const inputStyles = cva("outline-none font-dmsans text-woodsmoke-900 transition-all duration-200", {
  variants: {
    variant: {
      sm: "border-1 border-woodsmoke-200 px-2 py-1 rounded focus:shadow-sm text-woodsmoke-800",
      md: "",
      lg: "w-full border-1 border-woodsmoke-200 px-3 py-1.5 rounded-lg focus:shadow-sm font-medium tracking-wide text-lg",
    },
    labelStyle: {
      normal: "text-base font-stretch-110% font-semibold tracking-wide",
      dark: "px-1.5 py-2.5 text-xl font-bold tracking-wide leading-2 tracking-tight",
    },
  },
});

type InputVariants = VariantProps<typeof inputStyles>;

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Required<InputVariants> {
  type: string;
  placeholder: string;
  labelName: string;
  reference: Ref<HTMLInputElement>;
}

export default function Input({
  type,
  placeholder,
  labelName,
  reference,
  variant,
  labelStyle,
  className,
  ...props
}: InputProps) {
  return (
    <div className={cn("flex flex-col gap-1 justify-items-start py-1 w-full")}>
      <label
        htmlFor={placeholder.toUpperCase()}
        className={cn(inputStyles({ labelStyle }), "pl-1")}
      >
        {labelName}
      </label>
      <input
        ref={reference}
        id={placeholder.toUpperCase()}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        {...props}
        className={cn(inputStyles({ variant }), "w-full focus:ring-2 focus:ring-offset-1 ring-woodsmoke-200 ring-offset-woodsmoke-100", className)}
      />
    </div>
  );
}
