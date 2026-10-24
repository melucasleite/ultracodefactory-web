import Image from "next/image";
import AppMock from "@/components/AppMock";
import FactoryLine from "@/components/FactoryLine";
import MagicMoments from "@/components/MagicMoments";
import QuestionDemo from "@/components/QuestionDemo";
import {
  ArrowIcon,
  BellIcon,
  BoardIcon,
  BubbleIcon,
  FileIcon,
  GearIcon,
  GitHubIcon,
  ShieldIcon,
  TerminalIcon,
  WandIcon,
} from "@/components/Icons";

const REPO = "https://github.com/melucasleite/ultracodefactory";

const features = [
  {
    icon: BoardIcon,
    title: "A board that watches the disk",
    body: "Six stations from Proposed to Done. Drag a card and the file moves. Edit it in Obsidian, vim or an agent, and the board updates instantly via FSEvents.",
  },
  {
    icon: WandIcon,
    title: "Create Work from one line",
    body: "Type an idea. A headless Claude Code agent researches the repo and writes a real card, while a hazard-striped placeholder holds its spot.",
  },
  {
    icon: TerminalIcon,
    title: "Agents in real terminals",
    body: "Run Work and Triage start interactive Claude Code sessions in tmux. Watch them live in full colour, type straight into them, or attach from your own shell.",
  },
  {
    icon: BubbleIcon,
    title: "Questions become buttons",
    body: "When an agent asks a multiple-choice question, Code Factory turns the TUI prompt into native buttons. ⌘1–⌘9 and you're done.",
  },
  {
    icon: BellIcon,
    title: "It taps you on the shoulder",
    body: "Notifications and a menu bar light tell you when an agent finishes or needs input, so you can walk away from the board.",
  },
  {
    icon: FileIcon,
    title: "Your cards stay plain text",
    body: "One markdown file per card, one folder per status. No database or lock-in, and it works with git, grep and whatever comes next.",
  },
];

const tenets = [
  {
    title: "The spec is the product.",
    body: "Code is an implementation detail. The brief, the cards and their acceptance criteria are what you own. Code can be rewritten; a clear spec keeps its value.",
  },
  {
    title: "Docs first, always.",
    body: "Every project starts with a PROJECT.md, and every change starts as a card that says what and why before anything writes how.",
  },
  {
    title: "Specs live with the code.",
    body: "Cards are markdown in your repo, versioned in the same commits as the work. No database, no SaaS, no lock-in.",
  },
  {
    title: "You decide, agents do.",
    body: "You set direction, answer questions and review. Agents do the typing. The factory never merges for you.",
  },
  {
    title: "Small cards, small PRs.",
    body: "Every card fits in one reviewable pull request. If it can’t, it’s two cards.",
  },
  {
    title: "Review is the job.",
    body: "Your time is the scarce resource, so it goes to judgement, not keystrokes.",
  },
];

const safety = [
  "Agents start in Accept file edits mode. Bypassing permissions is opt-in, with a red warning.",
  "Every command runs without a shell. Prompts and typed text can never become shell syntax.",
  "Text sent to tmux is typed literally, and named keys come from a fixed allow-list.",
  "Card and project names are validated, so nothing can escape your vault.",
  "Deleting a card moves it to the Trash, and a move never overwrites another card.",
  "No telemetry or network calls of its own. MIT licensed: read every line.",
];

const steps = [
  {
    n: "8:58 AM",
    title: "You empty your head",
    body: "Every idea, bug and someday-maybe goes in as one line. Create Work turns each into a proper card while you type the next.",
  },
  {
    n: "9:04 AM",
    title: "You hit Run and walk away",
    body: "Agents pick up cards, write the code, run the tests and open pull requests. If one has a question, your Mac taps you and a click answers it.",
  },
  {
    n: "9:31 AM",
    title: "You come back to a stack of PRs",
    body: "Green checks, one card per PR. Merge what’s good, bounce what isn’t, and queue the next batch before your coffee’s cold.",
  },
];

function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.25em] text-[#ff8500]">
        {eyebrow}
      </p>
      <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/60">
          {sub}
        </p>
      )}
      <div className="mt-14">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Nav */}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="glass mx-auto flex max-w-4xl items-center gap-6 rounded-full py-2 pl-2 pr-2 sm:pl-3">
          <a
            href="#"
            className="flex items-center gap-2 whitespace-nowrap font-semibold"
          >
            <Image
              src="/app-icon.png"
              alt=""
              width={32}
              height={32}
              priority
              className="rounded-[9px]"
            />
            Code Factory
          </a>
          <div className="ml-auto hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#magic" className="hover:text-white">
              Magic
            </a>
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#tenets" className="hover:text-white">
              Beliefs
            </a>
            <a href="#safety" className="hover:text-white">
              Safety
            </a>
          </div>
          <a
            href={REPO}
            aria-label="Code Factory on GitHub"
            className="ml-auto grid h-9 w-9 place-items-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white md:ml-0"
          >
            <GitHubIcon />
          </a>
          <a
            href="#install"
            className="whitespace-nowrap rounded-full bg-[#ff8500] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_24px_rgba(255,133,0,.45)] transition hover:brightness-110"
          >
            Get it free
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative px-5 pb-16 pt-36 text-center sm:pt-44">
          <div className="float mx-auto mb-8 w-fit">
            <Image
              src="/app-icon.png"
              alt="Code Factory app icon"
              width={128}
              height={128}
              priority
              className="drop-shadow-[0_20px_50px_rgba(255,133,0,.45)]"
            />
          </div>
          <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4dcc73] shadow-[0_0_8px_#4dcc73]" />
            For solo builders with ambitious projects
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-7xl">
            Write the backlog.
            <br />
            Grab a coffee.
            <br />
            <span className="text-shine">Come back to PRs.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65 sm:text-xl">
            Your project is bigger than one person and your backlog is longer
            than a weekend. Code Factory is a native Mac app that hands your
            cards to a crew of Claude Code agents, so the work keeps moving
            while you&apos;re away from the desk.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#install"
              className="group flex items-center gap-2 rounded-full bg-[#ff8500] px-6 py-3 font-semibold text-black shadow-[0_0_40px_rgba(255,133,0,.5)] transition hover:scale-[1.03]"
            >
              Build it in one command
              <ArrowIcon className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={REPO}
              className="glass flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:bg-white/15"
            >
              <GitHubIcon /> Star on GitHub
            </a>
          </div>

          <div className="mt-16">
            <FactoryLine />
          </div>
        </section>

        {/* Strip */}
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-5 py-6">
          {[
            "SwiftUI",
            "Liquid Glass",
            "Claude Code",
            "tmux",
            "Plain markdown",
            "Obsidian-friendly",
            "MIT",
          ].map((t) => (
            <span
              key={t}
              className="glass rounded-full px-4 py-1.5 font-mono text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <Section
          eyebrow="The board"
          title="The whole line in one window"
          sub="What’s queued, what’s being built and what’s waiting on you, at a glance."
        >
          <div className="[perspective:2000px]">
            <div className="[transform:rotateX(8deg)] transition duration-700 hover:[transform:rotateX(0deg)]">
              <AppMock />
            </div>
          </div>
        </Section>

        <Section
          id="magic"
          eyebrow="The magic"
          title="Small moments that feel like a crew"
          sub="The parts of Code Factory that make one person feel like a team."
        >
          <MagicMoments />
        </Section>

        <Section
          id="features"
          eyebrow="The line"
          title="A team’s throughput. A team of one."
          sub="Everything you need to run more work than one pair of hands allows, on files you already own."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="glass group rounded-3xl p-7 transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="glass mb-5 grid h-12 w-12 place-items-center rounded-2xl text-[#ff8500] shadow-[0_0_24px_rgba(255,133,0,.25)] transition group-hover:shadow-[0_0_36px_rgba(255,133,0,.5)]">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Agents ask, you click"
          title={
            <>
              Terminal prompts,{" "}
              <span className="text-[#ff8500]">native buttons.</span>
            </>
          }
          sub="Code Factory reads Claude's multiple-choice prompt straight off the tmux pane and gives you real controls. Go on, answer it."
        >
          <QuestionDemo />
        </Section>

        <Section
          id="how"
          eyebrow="A morning at the factory"
          title="Your crew clocks in when you do"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="glass relative overflow-hidden rounded-3xl p-8"
              >
                <span className="absolute -right-2 -top-4 font-mono text-[64px] font-black text-white/[0.04]">
                  {s.n}
                </span>
                <span className="font-mono text-sm text-[#ff8500]">{s.n}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-white/60">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <pre className="glass overflow-x-auto rounded-3xl p-7 font-mono text-[13px] leading-relaxed text-white/80">
              {`my-app/               ← your repo; agents work here
├─ PROJECT.md         ← the brief, written first
└─ .codefactory/
   ├─ proposed/
   ├─ todo/
   ├─ picked-up/      ← agents move cards
   ├─ waiting/          as they go
   ├─ done/
   └─ wont-do/`}
            </pre>
            <pre className="glass overflow-x-auto rounded-3xl p-7 font-mono text-[13px] leading-relaxed">
              <span className="text-white/40">---</span>
              {"\n"}
              <span className="text-[#56ccdc]">title</span>: Crash when the
              config is empty
              {"\n"}
              <span className="text-[#56ccdc]">status</span>: todo
              {"\n"}
              <span className="text-[#56ccdc]">kind</span>:{" "}
              <span className="text-[#ff5a5a]">bug</span>
              {"\n"}
              <span className="text-white/40">---</span>
              {"\n\n"}
              <span className="text-[#ff8500]">## Acceptance criteria</span>
              {"\n\n"}- [x] Add a failing test{"\n"}- [ ] Fix the parser
            </pre>
          </div>
        </Section>

        <Section
          id="tenets"
          eyebrow="What we believe"
          title="Docs first. Code second."
          sub="Code Factory is built on a few convictions about how one person ships like a team."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tenets.map((t, i) => (
              <div key={t.title} className="glass rounded-3xl p-7">
                <span className="font-mono text-xs text-[#ff8500]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-white/60">{t.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="safety"
          eyebrow="Hard hats on"
          title="Safe by default. Paranoid by design."
          sub="It launches AI agents in your repositories, so the guard rails come built in."
        >
          <div className="glass-strong mx-auto grid max-w-4xl gap-x-10 gap-y-5 rounded-3xl p-8 sm:grid-cols-2 sm:p-10">
            {safety.map((s) => (
              <div key={s} className="flex gap-3">
                <ShieldIcon className="mt-0.5 shrink-0 text-[#4dcc73]" />
                <p className="text-white/75">{s}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="install"
          eyebrow="Clock in"
          title="Build it in one command"
          sub="Free and open source. Requires macOS 15+, Claude Code, and tmux. Looks best on macOS 26+ with Liquid Glass."
        >
          <div className="glass-strong mx-auto max-w-2xl overflow-hidden rounded-3xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-white/40">zsh</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[14px] leading-loose">
              {[
                ["# tools"],
                ["$", "brew install xcodegen tmux"],
                [""],
                ["# get the source"],
                [
                  "$",
                  "git clone https://github.com/melucasleite/ultracodefactory.git",
                ],
                ["$", "cd ultracodefactory"],
                [""],
                ["# build & launch"],
                ["$", "make run"],
              ].map(([a, b], i) => (
                <span key={i} className="block">
                  {b === undefined ? (
                    <span className="text-white/40">{a || "\u00a0"}</span>
                  ) : (
                    <>
                      <span className="text-[#ff8500]">{a}</span> {b}
                    </>
                  )}
                </span>
              ))}
            </pre>
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            Example <code className="font-mono">/work-create</code>,{" "}
            <code className="font-mono">/work</code> and{" "}
            <code className="font-mono">/work-triage</code> skills ship with the
            source.
          </p>
        </Section>

        {/* Final CTA */}
        <section className="px-5 pb-24">
          <div className="glass-strong relative mx-auto max-w-5xl overflow-hidden rounded-[36px] p-12 text-center sm:p-16">
            <div className="hazard absolute inset-x-0 bottom-0 h-2 opacity-80" />
            <GearIcon className="spin-slow mx-auto mb-6 h-12 w-12 text-[#ff8500]" />
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Big ambitions. Team of one.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
              Fill the backlog, go get a coffee, and come back to a stack of PRs
              to review.
            </p>
            <a
              href="#install"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff8500] px-7 py-3.5 font-semibold text-black shadow-[0_0_40px_rgba(255,133,0,.5)] transition hover:scale-[1.03]"
            >
              Get Code Factory <ArrowIcon />
            </a>
            <a
              href={REPO}
              className="glass ml-3 mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:bg-white/15"
            >
              <GitHubIcon /> View source
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/40">
        <p>
          Code Factory is{" "}
          <a
            href={REPO}
            className="underline decoration-white/30 hover:text-white"
          >
            open source
          </a>{" "}
          under the MIT License. An independent project, not affiliated with or
          endorsed by Anthropic.
        </p>
        <p className="mt-1">
          “Claude” and “Claude Code” are trademarks of their owner.
        </p>
      </footer>
    </>
  );
}
