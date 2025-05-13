import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Using type assertion to handle the conditional element type
    const Comp = asChild ? ("div" as any) : "button";
    return (
      <Comp
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
          disabled:opacity-50 disabled:pointer-events-none 
          ${
            variant === "default"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : variant === "outline"
              ? "border border-input hover:bg-accent hover:text-accent-foreground"
              : variant === "ghost"
              ? "hover:bg-accent hover:text-accent-foreground"
              : "underline-offset-4 hover:underline text-primary"
          } 
          ${
            size === "default"
              ? "h-10 py-2 px-4"
              : size === "sm"
              ? "h-9 px-3 rounded-md"
              : "h-11 px-8 rounded-md"
          } 
          ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
