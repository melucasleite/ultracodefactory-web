import type { SVGProps } from "react";

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type P = SVGProps<SVGSVGElement>;

export const BoardIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="5" height="16" rx="1.5" />
    <rect x="10" y="4" width="5" height="10" rx="1.5" />
    <rect x="17" y="4" width="4" height="13" rx="1.5" />
  </svg>
);
export const WandIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m4 20 11-11" />
    <path d="m14 4 1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
    <path d="M19 12v2M18 13h2M8 3v2M7 4h2" />
  </svg>
);
export const TerminalIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="m7 9 3 3-3 3M13 15h4" />
  </svg>
);
export const BubbleIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5h16v11H9l-5 4z" />
    <path d="M9.5 9a2.5 2.5 0 1 1 3 2.4c-.5.2-.5.6-.5 1.1M12 14.5v.01" />
  </svg>
);
export const BellIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
);
export const FileIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M9 12h6M9 16h4" />
  </svg>
);
export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const GearIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
  </svg>
);
export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
