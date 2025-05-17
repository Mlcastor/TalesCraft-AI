import * as React from "react";
import { cn } from "@/lib/utils/cn";

/**
 * Alert component for displaying messages
 */
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive";
}

export function Alert({
  className,
  variant = "default",
  ...props
}: AlertProps) {
  return (
    <div
      className={cn(
        "relative w-full rounded-lg border p-4",
        variant === "default"
          ? "bg-background text-foreground"
          : "border-destructive/50 text-destructive bg-destructive/10 dark:border-destructive [&>svg]:text-destructive",
        className
      )}
      {...props}
    />
  );
}

/**
 * Alert title component
 */
interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h5
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  );
}

/**
 * Alert description component
 */
interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return (
    <div
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
}
