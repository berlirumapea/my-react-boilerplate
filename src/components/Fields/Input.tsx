import { forwardRef } from "react";
import cx from "classnames";

export type Ref = HTMLInputElement;

const Input = forwardRef<
  Ref,
  React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: "primary" | "secondary";
    postFix?: string;
  }
>((props, ref) => {
  const { type, className, variant = "primary", postFix, ...rest } = props;

  return (
    <input
      ref={ref}
      {...rest}
      className={cx(
        "bg-white border-slate-200 w-full p-4 text-sm focus:outline-none border-b-2 focus-within:border-b-2 focus-within:border-sky-600  disabled:bg-slate-300 disabled:text-primary",
        className
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;
