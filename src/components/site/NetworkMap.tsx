const hubs = [
  { id: "uk", cx: 368, cy: 112, label: "UK" },
  { id: "eu", cx: 410, cy: 128, label: "Europe" },
  { id: "me", cx: 478, cy: 158, label: "Gulf" },
  { id: "af", cx: 398, cy: 214, label: "W. Africa" },
  { id: "in", cx: 538, cy: 176, label: "India" },
  { id: "asean", cx: 612, cy: 204, label: "ASEAN" },
  { id: "east", cx: 648, cy: 148, label: "Far East" },
  { id: "us", cx: 168, cy: 138, label: "N. America" },
] as const;

const routes: [string, string][] = [
  ["uk", "east"],
  ["uk", "af"],
  ["uk", "me"],
  ["uk", "eu"],
  ["uk", "in"],
  ["uk", "us"],
  ["uk", "asean"],
];

function hub(id: string) {
  return hubs.find((h) => h.id === id)!;
}

function arc(a: (typeof hubs)[number], b: (typeof hubs)[number]) {
  const mx = (a.cx + b.cx) / 2;
  const my = (a.cy + b.cy) / 2 - Math.abs(b.cx - a.cx) * 0.18;
  return `M ${a.cx} ${a.cy} Q ${mx} ${my} ${b.cx} ${b.cy}`;
}

export function NetworkMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 320"
      className={className}
      role="img"
      aria-label="Global logistics corridors from the United Kingdom"
    >
      <defs>
        <pattern id="logiedge-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="rgba(170,183,196,0.18)"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="800" height="320" fill="url(#logiedge-grid)" />

      {/* Simplified landmass silhouettes */}
      <g fill="rgba(255,255,255,0.06)" stroke="rgba(170,183,196,0.22)" strokeWidth="0.8">
        <path d="M118 92c28-18 62-22 96-8 18 8 22 24 10 38-16 18-48 22-74 14-22-6-42-22-32-44z" />
        <path d="M214 78c46-28 96-18 128 14 18 18 8 42-14 52-36 16-86 8-116-18-18-16-16-32 2-48z" />
        <path d="M348 78c22-16 48-10 58 8 8 16-2 28-18 34-22 8-44-2-50-18-4-12 2-18 10-24z" />
        <path d="M372 122c18-8 38 2 46 22 10 26-4 58-22 78-16 18-40 22-52 8-14-16-4-48 8-72 6-12 12-28 20-36z" />
        <path d="M448 128c34-8 58 10 70 36 10 22 2 40-16 46-28 8-58-10-70-32-10-18-4-42 16-50z" />
        <path d="M520 118c48-6 86 18 108 52 16 24 8 46-14 52-40 10-88-8-112-38-18-22-10-60 18-66z" />
        <path d="M132 168c40 4 48 28 36 48-12 18-40 22-58 8-16-12-14-32 4-44 8-6 12-14 18-12z" />
      </g>

      {routes.map(([from, to]) => {
        const a = hub(from);
        const b = hub(to);
        return (
          <path
            key={`${from}-${to}`}
            d={arc(a, b)}
            fill="none"
            stroke="#155EEF"
            strokeOpacity="0.55"
            strokeWidth="1.25"
            strokeDasharray="5 7"
            className="route-dash"
          />
        );
      })}

      {hubs.map((h) => (
        <g key={h.id}>
          <circle cx={h.cx} cy={h.cy} r="7" fill="#155EEF" fillOpacity="0.18" />
          <circle cx={h.cx} cy={h.cy} r="3.2" fill={h.id === "uk" ? "#F59E0B" : "#155EEF"} />
          <text
            x={h.cx + 10}
            y={h.cy - 8}
            fill="#AAB7C4"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.04em"
          >
            {h.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function RouteLine({
  origin,
  destination,
  status,
  progress,
  dark = false,
}: {
  origin: string;
  destination: string;
  status: string;
  progress: number;
  dark?: boolean;
}) {
  const clamped = Math.min(100, Math.max(0, progress));
  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em]">
        <span className={dark ? "text-white" : "text-navy"}>{origin}</span>
        <span className={dark ? "text-white" : "text-navy"}>{destination}</span>
      </div>
      <div className={`relative mt-3 h-[2px] ${dark ? "bg-white/15" : "bg-line"}`}>
        <div
          className="absolute inset-y-0 left-0 bg-accent-blue"
          style={{ width: `${clamped}%` }}
        />
        <span className="absolute left-0 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber" />
        <span
          className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue"
          style={{ left: `${clamped}%` }}
        />
        <span
          className={`absolute right-0 top-1/2 size-2.5 translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
            dark ? "border-white/40 bg-navy" : "border-line bg-white"
          }`}
        />
      </div>
      <p className={`mt-3 text-sm ${dark ? "text-navy-muted" : "text-subtle"}`}>{status}</p>
    </div>
  );
}
