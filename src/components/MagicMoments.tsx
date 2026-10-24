"use client";

import { useEffect, useState } from "react";

const chips = {
  platforms: ["iOS", "Web app"],
  stack: ["SwiftUI", "Next.js", "Supabase"],
  features: [
    "Water reminders",
    "Plant journal",
    "Sign in with Apple",
    "Push notifications",
  ],
};

/** Pitch in, chips light up one by one: "Suggest the rest from my pitch". */
function SuggestDemo() {
  const all = [...chips.platforms, ...chips.stack, ...chips.features];
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const show = setTimeout(() => setLit(all.length), 0);
      return () => clearTimeout(show);
    }
    const t = setInterval(
      () => setLit((n) => (n >= all.length + 6 ? 0 : n + 1)),
      380,
    );
    return () => clearInterval(t);
  }, [all.length]);

  let i = 0;
  const row = (label: string, items: string[]) => (
    <div>
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-white/40">
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((c) => {
          const on = i++ < lit;
          return (
            <span
              key={c}
              className={`rounded-full border px-2.5 py-1 text-[11px] transition-all duration-500 ${
                on
                  ? "scale-100 border-[#ff8500]/60 bg-[#ff8500]/20 font-semibold text-[#ffb13b] shadow-[0_0_14px_rgba(255,133,0,.35)]"
                  : "scale-95 border-white/10 bg-white/5 text-white/40"
              }`}
            >
              {on && "✓ "}
              {c}
            </span>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-[12px] leading-relaxed text-white/75">
        <span className="font-semibold text-white">Plant Pal.</span> An app that
        reminds me to water my plants and keeps a little photo journal of each
        one.
      </div>
      <div className="flex items-center gap-2 text-[11px] font-semibold text-[#ffb13b]">
        <span className={lit > 0 && lit < all.length ? "animate-pulse" : ""}>
          ✨
        </span>
        {lit < all.length
          ? "Suggesting the rest from your pitch…"
          : "Pre-filled. Tweak anything."}
      </div>
      {row("Platforms", chips.platforms)}
      {row("Stack", chips.stack)}
      {row("Features", chips.features)}
    </div>
  );
}

/** The build finale: a checklist that ticks itself off. */
function FinaleDemo() {
  const steps = [
    "Creating plant-pal/",
    "Writing the brief, PROJECT.md",
    "Starting a git repository",
    "Opening the board",
    "Planner clocking in",
  ];
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const show = setTimeout(() => setDone(steps.length), 0);
      return () => clearTimeout(show);
    }
    const t = setInterval(
      () => setDone((n) => (n >= steps.length + 4 ? 0 : n + 1)),
      650,
    );
    return () => clearInterval(t);
  }, [steps.length]);

  const all = done >= steps.length;
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`text-5xl transition-all duration-500 ${all ? "scale-110 text-[#3fb950] drop-shadow-[0_0_20px_rgba(63,185,80,.7)]" : "spin-slow text-[#ff8500] drop-shadow-[0_0_20px_rgba(255,133,0,.7)]"}`}
      >
        {all ? "✓" : "⚙"}
      </div>
      <div className="text-lg font-bold">
        {all ? "Your factory is open" : "Building Plant Pal…"}
      </div>
      <div className="glass w-full rounded-2xl p-4">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`flex items-center gap-3 py-1 text-[12px] transition-all duration-300 ${i < done ? "text-white" : "text-white/35"}`}
          >
            <span className={i < done ? "text-[#3fb950]" : "text-white/30"}>
              {i < done ? "●" : "○"}
            </span>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

/** A card that just landed, already linked to its PR. */
function ArrivalDemo() {
  const [k, setK] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setK((n) => n + 1), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="glass rounded-xl p-3 opacity-60">
        <div className="text-[12px] font-semibold">
          Set up the project skeleton
        </div>
        <span className="mt-2 inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/50">
          chore
        </span>
      </div>
      <div key={k} className="arrive glass relative rounded-xl p-3">
        <span className="absolute right-2 top-2 text-[12px] text-[#ff8500]">
          ✨
        </span>
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ffc400] shadow-[0_0_6px_#ffc400]" />
          <span className="text-[12px] font-semibold">
            Water reminders with push notifications
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-2">
          <span className="rounded-full border border-[#4f8cff]/40 bg-[#4f8cff]/15 px-2 py-0.5 text-[10px] font-bold text-[#4f8cff]">
            feature
          </span>
          <span className="ml-auto rounded-full border border-[#3fb950]/50 bg-[#3fb950]/15 px-2 py-0.5 text-[10px] font-bold text-[#3fb950]">
            ⇄ Review PR #12
          </span>
        </div>
      </div>
    </div>
  );
}

/** "While you were away…" */
function AwayDemo() {
  return (
    <div className="glass-strong flex items-center gap-4 rounded-2xl p-4">
      <span className="glass grid h-12 w-12 shrink-0 place-items-center rounded-xl text-2xl shadow-[0_0_20px_rgba(255,133,0,.35)]">
        ☕
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold text-white/45">
          While you were away · 34 minutes ago
        </div>
        <div className="font-bold">3 pull requests ready for review</div>
        <div className="text-[12px] text-white/55">
          5 jobs finished · 1 waiting for you
        </div>
      </div>
    </div>
  );
}

const moments = [
  {
    title: "It finishes your sentences",
    body: "Pitch the idea in a sentence. One click and Claude suggests platforms, stack, features and style, all as chips you can change.",
    demo: <SuggestDemo />,
  },
  {
    title: "It builds the factory for you",
    body: "Folder, brief, git, board, and a planner that drafts your first backlog. You watch it tick by.",
    demo: <FinaleDemo />,
  },
  {
    title: "Work arrives on its own",
    body: "Cards an agent writes drop onto the board with a glow. When a card links its pull request, review is one click away.",
    demo: <ArrivalDemo />,
  },
  {
    title: "It tells you what you missed",
    body: "Come back from your coffee and a banner sums it up: what shipped, what’s waiting on you, how many PRs to review.",
    demo: <AwayDemo />,
  },
];

export default function MagicMoments() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {moments.map((m) => (
        <div
          key={m.title}
          className="glass flex flex-col gap-5 rounded-3xl p-7"
        >
          <div>
            <h3 className="text-lg font-semibold">{m.title}</h3>
            <p className="mt-1.5 leading-relaxed text-white/60">{m.body}</p>
          </div>
          <div className="mt-auto rounded-2xl bg-black/25 p-4">{m.demo}</div>
        </div>
      ))}
    </div>
  );
}
