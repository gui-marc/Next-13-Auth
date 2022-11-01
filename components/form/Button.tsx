"use client";

import { ButtonHTMLAttributes } from "react";
import Spinner from "../feedback/Spinner";

type ButtonVariant = "solid" | "outlined" | "ghost";
type ColorScheme = "indigo" | "neutral" | "danger" | "warning";

export type ButtonProps = {
  variant?: ButtonVariant;
  colorScheme?: ColorScheme;
  isLoading?: boolean;
  fullWidth?: boolean;
} & React.HTMLAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "solid",
  colorScheme = "indigo",
  isLoading = false,
  fullWidth = false,
  ...rest
}: ButtonProps) {
  const commom =
    "inline-flex h-10 hover:contrast-125 focus:ring-2 transition-all duration-150 items-center justify-center px-6 rounded-sm gap-3 fill-white min-w-10";

  const variants = {
    solid: "bg-opacity-100 border-0",
    outlined: "bg-opacity-5 border-2 border-opacity-25 hover:bg-opacity-20",
    ghost: "bg-opacity-0 border-0 hover:bg-opacity-20",
  };

  const schemes = {
    indigo: "bg-indigo-600 text-white border-indigo-600 ring-indigo-200/5",
    neutral: "bg-zinc-600 text-white border-zinc-600 ring-zinc-600/50",
    danger: "bg-rose-600 text-white border-rose-600 ring-rose-600/50",
    warning: "bg-amber-600 text-white border-amber-600 ring-amber-600/50",
  };

  const loading = isLoading
    ? "opacity-50 pointer-events-none text-zinc-200"
    : "";

  const full = fullWidth ? "w-full" : "";

  return (
    <button
      {...rest}
      className={`${commom} ${variants[variant]} ${schemes[colorScheme]} ${loading} ${full} ${rest.className}`}
    >
      {isLoading ? <Spinner /> : rest.children}
    </button>
  );
}
