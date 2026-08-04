import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-[15px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-miami focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary: "bg-miami text-white hover:bg-ink hover:-translate-y-px",
  outline: "bg-white text-ink border border-miami hover:bg-miami-light",
  ghost: "bg-white text-ink border border-ink/10 hover:bg-cream-dark",
  subtle: "bg-cream text-ink border border-ink/10 hover:bg-cream-dark",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {buttonProps.children}
    </button>
  );
}
