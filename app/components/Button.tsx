import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "nav" | "primary" | "cta";
  isActive?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isActive = false,
  href,
  className = "",
  children,
  ...props
}) => {
  // Base classes common to all buttons
  const baseClasses =
    "border border-surface transition-all duration-300 cursor-pointer flex items-center justify-center";

  // Variant-specific classes
  let variantClasses = "";
  if (variant === "nav") {
    variantClasses = "rounded-full rounded-tr-none px-3";
  } else if (variant === "primary") {
    // "Portfolio" CTA style
    variantClasses =
      "w-full px-8 py-3 text-primary text-lg font-semibold rounded-full rounded-tr-none hover:border-b-[8px] shadow-lg duration-400";
  } else if (variant === "cta") {
    // "Contact me" CTA style (similar to primary but gray text initially)
    variantClasses =
      "w-full md:w-auto px-8 py-3 text-primary text-lg font-semibold rounded-full rounded-tr-none hover:text-primary hover:border-b-[8px]";
  }

  // Active/Hover State Logic with Margin Compensation
  let stateClasses = "";

  if (variant === "nav") {
    if (isActive) {
      stateClasses = "text-white border-b-[4px] mb-0 w-full";
    } else {
      stateClasses =
        "text-primary hover:text-white hover:border-b-[4px] mb-[3px] hover:mb-0 w-full";
    }
  } else {
    // Primary / CTA buttons (6px border on hover)
    stateClasses = "mb-[5px] hover:mb-0";
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${stateClasses} ${className}`;

  if (href) {
    // Check if it's an external link
    const isExternal = href.startsWith("http");
    const isFullWidth =
      className.includes("w-full") || className.includes("w-[100%]");
    const linkClassName = isFullWidth
      ? "w-full"
      : variant === "primary"
        ? "w-full md:w-auto"
        : "";

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          <button className={combinedClasses} {...props}>
            {children}
          </button>
        </a>
      );
    }

    // Internal link using Next.js Link

    return (
      <Link href={href} className={linkClassName}>
        <button className={combinedClasses} {...props}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
