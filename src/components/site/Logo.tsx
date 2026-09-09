type LogoMarkProps = {
  className?: string;
  variant?: "onLight" | "onDark";
};

/** Three converging chevrons: air, sea and road, with a mint leading edge. */
export function LogoMark({ className = "size-10", variant = "onLight" }: LogoMarkProps) {
  const onDark = variant === "onDark";
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        width="40"
        height="40"
        rx="10"
        fill={onDark ? "rgba(255,255,255,0.12)" : "#152038"}
      />
      <path
        d="M7.5 11.2 16.2 20 7.5 28.8h3.2L19.4 20 10.7 11.2z"
        fill={onDark ? "rgba(244,247,251,0.45)" : "rgba(244,247,251,0.4)"}
      />
      <path
        d="M14.2 11.2 22.9 20 14.2 28.8h3.2L26.1 20 17.4 11.2z"
        fill="#F4F7FB"
      />
      <path d="M21.2 11.2 31.4 20 21.2 28.8h3.4L34.8 20 24.6 11.2z" fill="#6EE7C5" />
    </svg>
  );
}

export function BrandLockup({
  variant = "onLight",
}: {
  variant?: "onLight" | "onDark";
}) {
  const onDark = variant === "onDark";
  return (
    <span className="flex items-center gap-3">
      <LogoMark variant={variant} className="size-10 shrink-0" />
      <span className="leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${
            onDark ? "text-mist" : "text-brand"
          }`}
        >
          Logi
          <span className={onDark ? "text-mint" : "text-accent-blue"}>Edge</span>
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-medium uppercase tracking-[0.18em] ${
            onDark ? "text-mist/55" : "text-ink/50"
          }`}
        >
          Consulting
        </span>
      </span>
    </span>
  );
}
