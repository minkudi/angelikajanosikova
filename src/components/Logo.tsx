// Logo Angelika Jánošíková : marque géométrique monochrome (carré arrondi + « A »)
// avec un point d'accent sarcelle — codes visuels tech minimalistes, 2 couleurs max.
// `inverted` : version pour fonds sombres (carré blanc, « A » encre).
export function LogoMark({
  size = 30,
  inverted = false,
}: {
  size?: number;
  inverted?: boolean;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill={inverted ? "#ffffff" : "currentColor"} />
      <path
        d="M9 23.5 L16 8.5 L23 23.5 M11.6 17.5 H20.4"
        fill="none"
        stroke={inverted ? "#0f766e" : "#ffffff"}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25.5" cy="8" r="2.1" fill={inverted ? "#0d9488" : "#5eead4"} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-[1.05rem] font-bold tracking-tight">
        Angelika Jánošíková
      </span>
    </span>
  );
}
