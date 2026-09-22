import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-ink/10 text-ink border-ink/20",
    secondary: "bg-surface-high text-ink-soft border-hairline",
    outline: "bg-transparent text-ink-muted border-hairline",
    success: "bg-forest/10 text-forest border-forest/20",
    accent: "bg-terracotta/10 text-terracotta border-terracotta/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
