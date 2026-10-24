"use client";

import { useEffect, useState } from "react";

/** One trip down the line: the card that goes in and the PR that comes out. */
const jobs = [
  {
    title: "Crash when the config file is empty",
    kind: "bug",
    pr: 142,
    add: 84,
    del: 12,
  },
  {
    title: "Add rate limiting to the public API",
    kind: "feature",
    pr: 143,
    add: 211,
    del: 9,
  },
  {
    title: "Extract the HTTP client into a module",
    kind: "refactor",
    pr: 144,
    add: 156,
    del: 173,
  },
  {
    title: "Write the getting-started guide",
    kind: "docs",
    pr: 145,
    add: 320,
    del: 4,
  },
];

const kindColor: Record<string, string> = {
  feature: "#4f8cff",
  bug: "#ff5a5a",
  docs: "#3ccf6e",
  refactor: "#c56cf0",
};

const TRIP = 16; // seconds for one item to cross the line
const GAP = TRIP / jobs.length; // a new card enters every GAP seconds

const terminal = [
  "$ claude /work crash-when-config-empty.md",
  "● Reading src/config/loader.ts",
  "● Writing failing test…",
  "✓ 48 tests passed",
  "$ git push -u origin fix/empty-config",
  "$ gh pr create --fill",
  "✓ PR opened",
];

function Card({ title, kind }: { title: string; kind: string }) {
  const c = kindColor[kind];
  return (
    <div className="line-face line-card glass rounded-2xl p-3.5">
      <div className="mb-2 flex items-center gap-2 font-mono text-[10px] text-white/45">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: c, boxShadow: `0 0 6px ${c}` }}
        />
        todo/{kind}.md
      </div>
      <div className="text-[13px] font-semibold leading-snug">{title}</div>
      <span
        className="mt-2.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold"
        style={{ color: c, background: `${c}22`, border: `1px solid ${c}55` }}
      >
        {kind}
      </span>
    </div>
  );
}

function PullRequest({
  title,
  pr,
  add,
  del,
}: {
  title: string;
  pr: number;
  add: number;
  del: number;
}) {
  return (
    <div className="line-face line-pr rounded-2xl border border-[#3fb950]/40 bg-[#0d1117]/90 p-3.5 shadow-[0_0_30px_rgba(63,185,80,.25)] backdrop-blur">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex items-center gap-1 rounded-full bg-[#238636] px-2 py-0.5 text-[10px] font-semibold text-white">
          <svg
            width="10"
            height="10"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden
          >
            <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM4.25 5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm.75 7.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 1.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM3.5 5.5h1.5v5H3.5zM12.25 11a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM11.5 5.56V10h1.5V5.5A2.5 2.5 0 0 0 10.5 3H8.06l1.22-1.22L8.22.72 5.19 3.75l3.03 3.03 1.06-1.06L8.06 4.5h2.44c.55 0 1 .45 1 1.06Z" />
          </svg>
          Open
        </span>
        <span className="font-mono text-[11px] text-white/50">#{pr}</span>
      </div>
      <div className="text-[13px] font-semibold leading-snug text-white">
        {title}
      </div>
      <div className="mt-2.5 flex items-center gap-3 font-mono text-[10px]">
        <span className="text-[#3fb950]">+{add}</span>
        <span className="text-[#f85149]">−{del}</span>
        <span className="ml-auto flex items-center gap-1 text-[#3fb950]">
          ✓ checks passed
        </span>
      </div>
    </div>
  );
}

/** The hero centrepiece: cards ride in, the factory works, PRs pop out. */
export default function FactoryLine() {
  const [shipped, setShipped] = useState(1287);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const ship = setInterval(() => setShipped((n) => n + 1), GAP * 1000);
    const type = setInterval(
      () => setLine((n) => (n + 1) % terminal.length),
      900,
    );
    return () => {
      clearInterval(ship);
      clearInterval(type);
    };
  }, []);

  return (
    <div
      className="factory-line relative mx-auto w-full max-w-6xl"
      aria-label="Animation: work cards enter the Ultra Code Factory and come out as pull requests"
    >
      {/* Stage labels */}
      <div className="relative mb-4 flex items-end justify-between px-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
        <span>Backlog ↓</span>
        <span className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 sm:inline">
          Ultra Code Factory
        </span>
        <span className="text-right">
          Pull requests ↓
          <span className="mt-1 block text-[13px] normal-case tracking-normal text-[#3fb950]">
            {shipped.toLocaleString("en-US")} shipped
          </span>
        </span>
      </div>

      <div className="relative h-[320px] overflow-hidden rounded-[32px]">
        {/* Belt */}
        <div className="absolute inset-x-0 top-[74%] h-[56px] -translate-y-1/2">
          <div className="belt h-full w-full rounded-full" />
          <div className="absolute inset-x-6 -bottom-3 flex justify-between">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className="roller h-5 w-5 rounded-full" />
            ))}
          </div>
        </div>

        {/* Items riding the belt */}
        {jobs.map((job, i) => (
          <div
            key={job.pr}
            className={`line-item absolute top-[74%] w-[165px] sm:w-[240px] ${i % 2 ? "max-sm:hidden" : ""}`}
            style={{
              animationDelay: `${-i * GAP}s`,
              animationDuration: `${TRIP}s`,
            }}
          >
            <Card title={job.title} kind={job.kind} />
            <PullRequest
              title={job.title}
              pr={job.pr}
              add={job.add}
              del={job.del}
            />
          </div>
        ))}

        {/* The machine */}
        <div className="machine absolute left-1/2 top-0 z-10 flex h-[94%] w-[150px] -translate-x-1/2 flex-col items-center rounded-b-[28px] rounded-t-[36px] sm:w-[300px]">
          <div className="mt-3 flex items-center gap-2">
            <span className="led" />
            <span className="led" style={{ animationDelay: ".4s" }} />
            <span className="led" style={{ animationDelay: ".8s" }} />
          </div>
          <div className="relative mt-2 flex items-center justify-center">
            <svg
              className="spin-slow h-11 w-11 text-[#ff8500] drop-shadow-[0_0_12px_rgba(255,133,0,.8)]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9.4 5.4-.1-2.8 2-1.6-2-3.5-2.4.9-2.4-1.4L16.2 2h-4l-.4 2.5-2.4 1.4-2.4-.9-2 3.5 2 1.6-.1 2.8-2 1.6 2 3.5 2.4-.9 2.4 1.4.4 2.5h4l.4-2.5 2.4-1.4 2.4.9 2-3.5Z" />
            </svg>
            <svg
              className="spin-reverse -ml-1.5 mt-6 h-7 w-7 text-white/70"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9.4 5.4-.1-2.8 2-1.6-2-3.5-2.4.9-2.4-1.4L16.2 2h-4l-.4 2.5-2.4 1.4-2.4-.9-2 3.5 2 1.6-.1 2.8-2 1.6 2 3.5 2.4-.9 2.4 1.4.4 2.5h4l.4-2.5 2.4-1.4 2.4.9 2-3.5Z" />
            </svg>
          </div>
          <div className="relative z-10 mx-4 mt-2 hidden w-[calc(100%-2rem)] sm:block rounded-xl border border-white/10 bg-black/60 px-3 py-2 font-mono text-[10px] leading-relaxed sm:text-[11px]">
            {[0, 1, 2].map((k) => {
              const text = terminal[(line + k) % terminal.length];
              return (
                <div
                  key={k}
                  className={`truncate ${text.startsWith("✓") ? "text-[#3fb950]" : text.startsWith("$") ? "text-[#ffb13b]" : "text-white/60"} ${k === 2 ? "typing" : ""}`}
                >
                  {text}
                </div>
              );
            })}
          </div>
          {/* Mouth the belt runs through */}
          <div className="mouth absolute inset-x-0 bottom-0 h-[50%] rounded-b-[28px]" />
          <div className="hazard absolute inset-x-0 bottom-0 h-1.5 rounded-b-[28px] opacity-80" />
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#07080b] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#07080b] to-transparent" />
      </div>
    </div>
  );
}
