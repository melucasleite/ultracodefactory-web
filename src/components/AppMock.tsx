const columns = [
  {
    title: "Proposed",
    color: "#5cc7db",
    cards: [{ t: "Add a dark-mode toggle to settings", k: "feature" }],
  },
  {
    title: "To-Do",
    color: "#598fff",
    fabricating: "/work-create Add rate limiting to the API",
    cards: [
      { t: "Crash when the config file is empty", k: "bug" },
      { t: "Write the getting-started guide", k: "docs" },
    ],
  },
  {
    title: "Picked Up",
    color: "#ff8500",
    cards: [{ t: "Extract the HTTP client into a module", k: "refactor" }],
  },
  {
    title: "Waiting",
    color: "#ffc400",
    cards: [{ t: "Pick a charting library", k: "spike" }],
  },
  {
    title: "Done",
    color: "#4dcc73",
    cards: [
      { t: "Set up continuous integration", k: "chore" },
      { t: "Ship the onboarding flow", k: "feature" },
    ],
  },
];

const kindColor: Record<string, string> = {
  feature: "#4f8cff",
  bug: "#ff5a5a",
  docs: "#3ccf6e",
  refactor: "#c56cf0",
  spike: "#ff9f1a",
  chore: "#9aa0a6",
};

/** A hand-built, pure-CSS rendition of the app window. */
export default function AppMock() {
  return (
    <div className="glass-strong relative mx-auto w-full max-w-6xl overflow-hidden rounded-[28px]">
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-2 leading-tight">
          <div className="text-[13px] font-semibold">demo-factory</div>
          <div className="text-[11px] text-white/45">6 open · 8 total</div>
        </div>
        <div className="ml-auto hidden items-center gap-2 sm:flex">
          <span className="rounded-full bg-[#ff8500] px-3 py-1 text-[12px] font-semibold text-black shadow-[0_0_20px_rgba(255,133,0,.5)]">
            ✦ Create Work
          </span>
          {["≡", "+", "⚖", "▶", "⚙"].map((g) => (
            <span
              key={g}
              className="glass grid h-7 w-7 place-items-center rounded-full text-[12px] text-white/80"
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="hidden w-40 shrink-0 border-r border-white/10 p-3 md:block">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
            Projects
          </div>
          {["demo-factory", "api-server", "marketing-site"].map((p, i) => (
            <div
              key={p}
              className={`mb-1 flex items-center justify-between rounded-lg px-2 py-1.5 text-[12px] ${
                i === 0 ? "bg-white/12 font-semibold" : "text-white/60"
              }`}
            >
              <span>📦 {p}</span>
              {i === 0 && <span className="spin-slow text-[#ff8500]">⚙</span>}
              {i === 1 && <span className="text-[#ffc400]">!</span>}
            </div>
          ))}
        </div>

        {/* board */}
        <div className="grid flex-1 grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col, ci) => (
            <div
              key={col.title}
              className={`flex flex-col gap-2.5 rounded-2xl bg-white/[0.025] p-1.5 ${
                ci > 2 ? "hidden lg:flex" : ci > 1 ? "hidden sm:flex" : ""
              }`}
            >
              <div className="glass relative flex items-center justify-between rounded-xl px-3 py-2">
                <span
                  className="absolute inset-x-4 top-0 h-[2px] rounded-full"
                  style={{
                    background: col.color,
                    boxShadow: `0 0 10px ${col.color}`,
                  }}
                />
                <span className="text-[12px] font-semibold">{col.title}</span>
                <span
                  className="rounded-full bg-white/10 px-2 text-[10px] font-bold"
                  style={{ color: col.color }}
                >
                  {col.cards.length}
                </span>
              </div>
              {col.fabricating && (
                <div className="glass relative overflow-hidden rounded-xl p-3 pt-4 shadow-[0_0_24px_rgba(255,133,0,.35)]">
                  <div className="hazard absolute inset-x-0 top-0 h-1" />
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#ff8500]">
                    <span className="spin-slow inline-block">⚙</span>{" "}
                    Fabricating…
                  </div>
                  <div className="mt-1 text-[10px] leading-snug text-white/55">
                    {col.fabricating}
                  </div>
                </div>
              )}
              {col.cards.map((c) => (
                <div
                  key={c.t}
                  className="glass rounded-xl p-3 transition hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  <div className="flex gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        background: col.color,
                        boxShadow: `0 0 6px ${col.color}`,
                      }}
                    />
                    <span className="text-[12px] font-semibold leading-snug">
                      {c.t}
                    </span>
                  </div>
                  <span
                    className="mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{
                      color: kindColor[c.k],
                      background: `${kindColor[c.k]}22`,
                      border: `1px solid ${kindColor[c.k]}55`,
                    }}
                  >
                    {c.k}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* factory floor */}
        <div className="glass m-3 ml-0 hidden w-60 shrink-0 rounded-2xl p-3 xl:block">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-bold text-[#ff8500]">
              ⚙ Factory Floor
            </span>
            <span className="rounded-full bg-[#ff8500]/20 px-2 text-[10px] font-bold">
              3 live
            </span>
          </div>
          {[
            ["⚖", "Triage", "waiting for you · 1m 12s", "#ffc400"],
            ["▶", "Run Work", "working · 4m 03s", "#ff8500"],
            ["✦", "Create Work", "working · 22s", "#ff8500"],
            ["✓", "Run Work", "finished in 6m 41s", "#4dcc73"],
          ].map(([g, a, s, c], i) => (
            <div key={i} className="mb-2.5 flex gap-2.5">
              <span
                className="glass grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px]"
                style={{ color: c, boxShadow: `0 0 12px ${c}55` }}
              >
                {g}
              </span>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold">{a}</div>
                <div className="text-[10px] text-white/45">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
