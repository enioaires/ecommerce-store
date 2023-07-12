"use client";
import * as React from "react";
import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "relative disabled:opacity-70 rounded-full hover:opacity-80 transition",
  {
    variants: {
      variant: {
        default: "text-white",
        filter:
          "rounded-lg text-sm text-gray-800 p-2 bg-white border border-gray-300",
        mobileFilter: "flex items-center gap-x-2 lg:hidden text-white bg-black",
        icon: "flex items-center bg-black",
        outline: "bg-white border-black text-black hover:bg-gray-50",
        product:
          "flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
      },
      size: {
        default: "p-2 text-md font-semibold border-2",
        sm: "p-1 text-sm font-light border-[1px]",
        icon: "px-4 py-2 font-semibold",
        filter: "px-4 py-2 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  Icon?: LucideIcon;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, Icon, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {Icon && <Icon size={24} className="absolute left-4 top-3" />}
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && <Icon size={24} className="absolute left-4 top-3" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
