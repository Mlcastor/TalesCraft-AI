"use client";

import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

/* --------------------------------------------------------------------------
 * Button
 * ------------------------------------------------------------------------*/
export type ButtonVariant = "primary" | "secondary" | "link" | "outline";

interface ButtonProps
  extends Omit<ComponentProps<"button">, "color">,
    PropsWithChildren {
  variant?: ButtonVariant;
  href?: string; // if provided, render Link
  [key: string]: any; // allow anchor props like target
}

const baseBtn =
  "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2";

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 focus:ring-amber-500 disabled:opacity-60",
  secondary:
    "bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:opacity-60",
  link: "text-amber-400 hover:text-amber-300 disabled:opacity-60",
  outline:
    "bg-transparent border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-amber-500 focus:ring-gray-500 disabled:opacity-60",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(baseBtn, variantMap[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

/* --------------------------------------------------------------------------
 * SectionTitle
 * ------------------------------------------------------------------------*/
interface SectionTitleProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
}

export function SectionTitle({
  children,
  as = "h2",
  className,
}: SectionTitleProps) {
  const Tag = as as any;
  return (
    <Tag
      className={cn(
        "font-bold text-amber-400 mb-4 text-center",
        {
          h1: "text-5xl md:text-6xl",
          h2: "text-3xl md:text-4xl",
          h3: "text-2xl md:text-3xl",
          h4: "text-xl md:text-2xl",
          h5: "text-lg md:text-xl",
        }[as],
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* --------------------------------------------------------------------------
 * Card
 * ------------------------------------------------------------------------*/
interface CardProps extends PropsWithChildren {
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

/* --------------------------------------------------------------------------
 * PageHeader
 * ------------------------------------------------------------------------*/
interface PageHeaderProps {
  title: string;
  description?: string;
  backLink?: { href: string; label?: string };
  className?: string;
}

export function PageHeader({
  title,
  description,
  backLink,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      {backLink ? (
        <div className="flex items-center mb-4">
          <Button
            href={backLink.href}
            variant="secondary"
            aria-label={backLink.label || "Go back"}
            className="mr-3 p-2 h-auto w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
          <SectionTitle as="h1" className="mb-0 text-left flex-1">
            {title}
          </SectionTitle>
        </div>
      ) : (
        <SectionTitle as="h1">{title}</SectionTitle>
      )}

      {description && <p className="text-gray-300">{description}</p>}
    </div>
  );
}

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}
