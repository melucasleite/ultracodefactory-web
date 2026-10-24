"use client";

import { useState } from "react";

const options = ["Move to To-Do", "Keep in Proposed", "Won't do"];

/** Claude's TUI prompt on the left, the native buttons Ultra Code Factory draws on the right. */
export default function QuestionDemo() {
  const [pointer, setPointer] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null);

  function choose(i: number) {
    setPointer(i);
    setAnswered(i);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f13]/90 font-mono text-[13px] leading-relaxed shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-[11px] text-white/40">
          <span className="h-2 w-2 rounded-full bg-[#ffc400] shadow-[0_0_8px_#ffc400]" />
          tmux · codefactory-job-mvluhhm4
        </div>
        <div className="p-4">
          <p>
            <span className="text-[#ff8500]">●</span> <b>Triage</b>: 2 proposed
            cards, 1 waiting.
          </p>
          <p className="text-white/40">
            {"  "}Reading proposed/add-a-dark-mode-toggle.md…
          </p>
          <p className="mt-3">
            <span className="text-[#ff8500]">●</span>{" "}
            <b>“Add a dark-mode toggle to the settings page”</b>
          </p>
          <p className="text-white/70">
            {"  "}Small, well-scoped. No blockers found.
          </p>
          <div className="mt-3 rounded-lg border border-white/15 p-3">
            <p>What should happen to this card?</p>
            {options.map((o, i) => (
              <p
                key={o}
                className={i === pointer ? "text-[#56ccdc]" : "text-white/80"}
              >
                {i === pointer ? "❯" : " "} {i + 1}. {o}
              </p>
            ))}
          </div>
          {answered !== null && (
            <p className="mt-3 text-[#73d16f]">
              ✓ Moved to{" "}
              {answered === 0
                ? "todo/"
                : answered === 1
                  ? "proposed/"
                  : "wont-do/"}
            </p>
          )}
        </div>
      </div>

      <div className="glass-strong flex flex-col justify-center rounded-2xl p-6">
        <div className="mb-4 flex items-center gap-2 font-semibold">
          <span className="text-[#ffc400]">💬</span> What should happen to this
          card?
        </div>
        <div className="flex flex-col gap-2">
          {options.map((o, i) => (
            <button
              key={o}
              onClick={() => choose(i)}
              className={`glass flex items-center gap-3 rounded-full px-5 py-3 text-left text-sm transition hover:scale-[1.02] active:scale-[0.98] ${
                i === pointer
                  ? "!border-[#ff8500]/60 !bg-[#ff8500]/20 shadow-[0_0_24px_rgba(255,133,0,.3)]"
                  : ""
              }`}
            >
              <span className="font-mono text-xs text-white/40">⌘{i + 1}</span>
              <span className="flex-1">{o}</span>
              {i === pointer && <span className="text-[#ff8500]">◀</span>}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/45">
          {answered === null
            ? "Click an option. Ultra Code Factory steers the TUI cursor and presses Enter for you."
            : "Sent ↓ ×" +
              answered +
              " then ⏎ to the tmux session. Try another."}
        </p>
      </div>
    </div>
  );
}
