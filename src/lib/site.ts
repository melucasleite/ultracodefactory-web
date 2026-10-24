/** One source of truth for names, URLs and copy used by metadata and JSON-LD. */
export const site = {
  name: "Ultra Code Factory",
  url: "https://ultracodefactory.com",
  repo: "https://github.com/melucasleite/ultracodefactory",
  author: "Lucas Leite",
  tagline: "Write the backlog. Grab a coffee. Come back to PRs.",
  description:
    "Ultra Code Factory is a free, open-source Mac app for solo builders: turn a markdown backlog into reviewed pull requests with Claude Code agents. Kanban board, AI backlog planning, native macOS with Liquid Glass.",
  keywords: [
    "Ultra Code Factory",
    "AI coding agents",
    "Claude Code",
    "Claude Code GUI",
    "AI software factory",
    "autonomous coding agent",
    "AI pull requests",
    "backlog to pull requests",
    "kanban for developers",
    "markdown kanban",
    "AI project planning",
    "solo developer tools",
    "indie hacker tools",
    "macOS developer tools",
    "SwiftUI app",
    "Liquid Glass",
    "tmux",
    "open source",
  ],
};

export const faqs: { q: string; a: string }[] = [
  {
    q: "What is Ultra Code Factory?",
    a: "A native macOS app that runs your software backlog like a production line. Each work card is a markdown file in your repository; Claude Code agents pick cards up, write the code and open pull requests for you to review.",
  },
  {
    q: "Who is it for?",
    a: "Solo builders and small teams with projects bigger than their calendar: indie hackers, founders and developers who want to queue up work, step away, and come back to a stack of pull requests.",
  },
  {
    q: "Is it free?",
    a: "Yes. Ultra Code Factory is open source under the MIT license. The agents run on Claude Code, so you use your own Claude Code plan or API account.",
  },
  {
    q: "What can it build: web, mobile, desktop?",
    a: "Anything Claude Code can work on. The New Project wizard supports web apps, iOS, Android, Mac apps, Windows and Linux desktop apps, backends and CLI tools, with stack suggestions such as Next.js, SwiftUI, React Native, Flutter, Tauri, FastAPI, Go and Rust.",
  },
  {
    q: "Will the agents merge or ship code without me?",
    a: "No. Agents work on branches and open pull requests; you review and merge. By default they may edit files but must ask before running other commands, and fully unattended permissions are an explicit, opt-in setting.",
  },
  {
    q: "Where do my cards and specs live?",
    a: "In your repository, in a .codefactory folder with one markdown file per card and one folder per status, next to a PROJECT.md brief. No database, no account, no lock-in. They work with git, grep, your editor and Obsidian.",
  },
  {
    q: "Does my code leave my Mac?",
    a: "Ultra Code Factory itself makes no network calls of its own and has no telemetry. The agents you launch talk to Anthropic through your Claude Code setup, exactly as Claude Code does in your terminal.",
  },
  {
    q: "What do I need to run it?",
    a: "macOS 15 or later (it looks its best on macOS 26 with Liquid Glass), Claude Code, and tmux for interactive agents. Building from source needs Xcode and XcodeGen.",
  },
];
