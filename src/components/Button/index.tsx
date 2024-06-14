import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-[4px]",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    /**
     * # Button stories
     * These stories showcase the button
     */
    variants: {
      types: {
        solid: "",
        outline: "border",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorScheme: {
        primary: "text-white",
        secondary: "text-pink-500",
      },
    },
    compoundVariants: [
      {
        types: "solid",
        colorScheme: "primary",
        className: "bg-pink-500 hover:bg-pink-700",
      },
      {
        types: "outline",
        colorScheme: "secondary",
        className: "border-pink-600 hover:bg-pink-100",
      },
      {
        types: "ghost",
        colorScheme: "primary",
        className: "text-pink-500 bg-transparent hover:bg-pink-100",
      },
    ],
    defaultVariants: {
      types: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);

type Props = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

/**
 * # The Button component
 * Shows a button
 */
const Button = forwardRef<HTMLButtonElement, Props>(
  ({ types, size, colorScheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ types, size, colorScheme, className }))}
        {...props}
      />
    );
  }
);

export default Button;
