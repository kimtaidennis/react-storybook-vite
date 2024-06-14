import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  [
    "block w-full border border-gray-200",
    "text-sm rounded-[4px] focus:border-blue-500 focus:ring-blue-500",
    "disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700",
    "dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600",
  ],
  {
    variants: {
      padding: {
        sm: "py-1.5 px-2",
        md: "py-2 px-3",
        lg: "py-3 px-5",
      },
      corners: {
        sm: "rounded-[4px]",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      padding: "md",
      corners: "lg",
    },
  }
);

type Props = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

/**
 * # The Input Component
 * These stories showcase the input
 */
const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, padding, corners, ...props }, ref) => {
    return (
      <input
        type="text"
        ref={ref}
        className={cn(className, inputStyles({ padding, corners }))}
        {...props}
      />
    );
  }
);

export default Input;
