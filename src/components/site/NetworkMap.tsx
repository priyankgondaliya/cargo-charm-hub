const hubs = [
  { id: "southampton", cx: 425, cy: 395, label: "Southampton (HQ)", isHQ: true },
  { id: "london", cx: 470, cy: 365, label: "London & Home Counties" },
  { id: "birmingham", cx: 405, cy: 295, label: "Birmingham (Midlands)" },
  { id: "manchester", cx: 390, cy: 240, label: "Manchester (North West)" },
  { id: "bristol", cx: 345, cy: 380, label: "Bristol & South West" },
  { id: "cardiff", cx: 310, cy: 350, label: "Cardiff (Wales)" },
  { id: "norwich", cx: 520, cy: 305, label: "East Anglia & Ports" },
  { id: "leeds", cx: 435, cy: 215, label: "Leeds & Yorkshire" },
  { id: "newcastle", cx: 430, cy: 160, label: "Newcastle & North East" },
  { id: "edinburgh", cx: 405, cy: 120, label: "Edinburgh & Scotland" },
  { id: "belfast", cx: 270, cy: 180, label: "Belfast (Northern Ireland)" },
] as const;

const routes: [string, string][] = [
  ["southampton", "london"],
  ["southampton", "birmingham"],
  ["southampton", "bristol"],
  ["southampton", "cardiff"],
  ["southampton", "norwich"],
  ["southampton", "manchester"],
  ["birmingham", "leeds"],
  ["manchester", "newcastle"],
  ["manchester", "edinburgh"],
  ["manchester", "belfast"],
];

function hub(id: string) {
  return hubs.find((h) => h.id === id)!;
}

function arc(a: (typeof hubs)[number], b: (typeof hubs)[number]) {
  const mx = (a.cx + b.cx) / 2;
  const my = (a.cy + b.cy) / 2 - Math.abs(b.cx - a.cx) * 0.12;
  return `M ${a.cx} ${a.cy} Q ${mx} ${my} ${b.cx} ${b.cy}`;
}

export function NetworkMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 480"
      className={className}
      role="img"
      aria-label="LogiEdge Consulting nationwide UK logistics coverage map across all UK counties"
    >
      <defs>
        <pattern id="logiedge-uk-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="rgba(170,183,196,0.15)"
            strokeWidth="0.6"
          />
        </pattern>
        <radialGradient id="hq-pulse-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="760" height="480" fill="url(#logiedge-uk-grid)" />

      {/* UK Map Silhouette (Great Britain & Ireland) */}
      <g fill="rgba(255,255,255,0.06)" stroke="rgba(170,183,196,0.25)" strokeWidth="1">
        {/* Mainland Great Britain */}
        <path d="M 400 45 C 430 50 445 75 425 95 C 410 110 435 125 415 145 C 445 155 435 185 450 200 C 440 215 460 235 440 250 C 475 260 520 275 540 300 C 555 320 515 345 480 370 C 455 425 385 435 345 445 C 295 440 280 405 320 380 C 275 365 270 335 305 320 C 350 305 375 275 360 245 C 345 225 370 190 380 150 C 365 120 370 85 400 45 Z" />
        {/* Northern Ireland & Ireland contour */}
        <path d="M 265 150 C 295 155 300 185 285 210 C 260 240 220 220 225 190 C 220 170 245 150 265 150 Z" />
      </g>

      {/* Logistics Routes */}
      {routes.map(([from, to]) => {
        const a = hub(from);
        const b = hub(to);
        return (
          <path
            key={`${from}-${to}`}
            d={arc(a, b)}
            fill="none"
            stroke="#155EEF"
            strokeOpacity="0.65"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            className="route-dash"
          />
        );
      })}

      {/* Hub Pins & Labels */}
      {hubs.map((h) => {
        const isHQ = "isHQ" in h && h.isHQ;
        return (
          <g key={h.id}>
            {isHQ ? (
              <>
                <circle cx={h.cx} cy={h.cy} r="18" fill="url(#hq-pulse-glow)" />
                <circle cx={h.cx} cy={h.cy} r="8" fill="#F59E0B" fillOpacity="0.25" />
                <circle cx={h.cx} cy={h.cy} r="4.5" fill="#F59E0B" />
              </>
            ) : (
              <>
                <circle cx={h.cx} cy={h.cy} r="7" fill="#155EEF" fillOpacity="0.2" />
                <circle cx={h.cx} cy={h.cy} r="3" fill="#155EEF" />
              </>
            )}

            <text
              x={h.cx + (isHQ ? 12 : 9)}
              y={h.cy + (isHQ ? 4 : 3)}
              fill={isHQ ? "#FFFFFF" : "#AAB7C4"}
              fontSize={isHQ ? "11" : "10"}
              fontWeight={isHQ ? "700" : "500"}
              fontFamily="Inter, sans-serif"
              letterSpacing="0.03em"
            >
              {h.label}
            </text>
          </g>
        );
      })}
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
