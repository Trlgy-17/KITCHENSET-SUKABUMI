import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "accent";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-walnut/30 disabled:opacity-50 disabled:pointer-events-none rounded-[12px]";

    const variants = {
      primary: "bg-ink text-white hover:bg-ink-soft active:bg-walnut-dark shadow-sm",
      accent: "bg-terracotta text-white hover:bg-terracotta-dark active:bg-walnut-dark shadow-sm",
      secondary: "bg-surface-high text-ink hover:bg-surface-highest border border-hairline",
      outline: "border border-hairline bg-transparent text-ink hover:bg-surface-high",
      ghost: "text-ink-soft hover:bg-surface-high",
      whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] active:bg-[#1da850] shadow-sm font-semibold",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
