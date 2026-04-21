"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Database,
  Gauge,
  Globe,
  LineChart,
  Mail,
  MapPinned,
  Menu,
  MessageSquareText,
  Phone,
  Search,
  Settings2,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const nav = [
  { label: "Home", href: "home" },
  { label: "Marketing", href: "marketing" },
  { label: "Labs", href: "labs" },
  { label: "Process", href: "process" },
  { label: "FAQ", href: "faq" },
  { label: "Contact", href: "contact" },
];

const marketingServices = [
  {
    icon: Search,
    title: "Local SEO",
    text: "Search visibility systems designed to increase qualified traffic, calls, and location-based demand.",
  },
  {
    icon: MapPinned,
    title: "Google Business Profile",
    text: "Optimization, posting cadence, review systems, category strategy, and profile management that converts attention into action.",
  },
  {
    icon: Globe,
    title: "Content & Landing Pages",
    text: "Sharper location pages, service pages, and messaging architecture built to support ranking and conversion.",
  },
  {
    icon: MessageSquareText,
    title: "Reputation Systems",
    text: "Review generation, response workflows, routing strategy, and trust-building assets that improve close rates.",
  },
];

const labsServices = [
  {
    icon: Database,
    title: "Data Analysis",
    text: "Reporting that creates clarity around leads, sales performance, source quality, and operational bottlenecks.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    text: "Systemized workflows that reduce manual work, strengthen follow-up, and remove friction from the customer journey.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    text: "Practical AI applications for content, internal operations, lead handling, knowledge management, and team leverage.",
  },
  {
    icon: BrainCircuit,
    title: "Content Systems",
    text: "Repeatable content engines that make creation faster, cleaner, and more aligned with your growth strategy.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit",
    text: "We identify what is leaking, where opportunities are hiding, and which systems will move the business fastest.",
  },
  {
    number: "02",
    title: "Architect",
    text: "We design a focused growth system tailored to your current stage, constraints, and revenue priorities.",
  },
  {
    number: "03",
    title: "Implement",
    text: "We build the visibility, reporting, automations, and workflows that connect strategy to execution.",
  },
  {
    number: "04",
    title: "Compound",
    text: "We refine based on data so your gains stack over time through stronger conversion and cleaner operations.",
  },
];

const stats = [
  { value: "2", label: "Focused divisions" },
  { value: "1", label: "Strategic operating system" },
  { value: "∞", label: "Ways to compound value" },
];

const faqs = [
  {
    q: "What is the difference between MC3 Marketing and MC3 Labs?",
    a: "MC3 Marketing focuses on visibility, demand capture, and conversion from the front end. MC3 Labs focuses on leverage behind the scenes through analytics, automation, AI, and operational systems.",
  },
  {
    q: "Do I need both divisions to work with MC3?",
    a: "No. Many businesses start with MC3 Marketing to create demand, then expand into MC3 Labs when they need more control, clarity, and scale on the backend.",
  },
  {
    q: "Who is MC3 best suited for?",
    a: "MC3 is built for established service businesses and growing teams that want smarter systems, better lead quality, stronger follow-up, and less chaos.",
  },
  {
    q: "How do you approach AI?",
    a: "Pragmatically. We focus on useful implementations that improve workflow, speed, visibility, and output rather than trendy tools with no operational ROI.",
  },
  {
    q: "Do you offer custom engagements?",
    a: "Yes. Some clients need a focused monthly system, while others need a tailored blend of visibility, analytics, and automation. The strategy call helps determine the right structure.",
  },
];

const testimonials = [
  {
    quote:
      "For the first time ever, my business is booked solid through the winter thanks to MC3.",
    name: "Tom F.",
    role: "Service Business Owner",
  },
  {
    quote:
      "The dashboards MC3 has created have helped our business make better operational decisions and save millions.",
    name: "Shaun R.",
    role: "Operations Leader",
  },
  {
    quote:
      "MC3 has successfully removed negative reviews from our Google profile that we had been trying to remove for years.",
    name: "Chris H.",
    role: "Founder",
  },
];

function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">{eyebrow}</div>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-zinc-400">{text}</p>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-300">
      {children}
    </span>
  );
}

export default function MC3GroupWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [division, setDivision] = useState("marketing");
  const [faqOpen, setFaqOpen] = useState(0);

  const activeDivision = useMemo(
    () =>
      division === "marketing"
        ? {
            name: "MC3 Marketing",
            tagline: "More Clicks. More Calls. More Customers.",
            summary:
              "A visibility and conversion division built for businesses that need better search presence, better trust signals, and more qualified demand.",
            href: "marketing",
            color: "from-blue-400 to-cyan-300",
            badge: "Demand Engine",
            services: marketingServices,
          }
        : {
            name: "MC3 Labs",
            tagline: "More Creativity. More Clarity. More Control.",
            summary:
              "A systems and intelligence division focused on operational leverage through analytics, automation, AI, and cleaner execution.",
            href: "labs",
            color: "from-fuchsia-400 to-violet-300",
            badge: "Leverage Engine",
            services: labsServices,
          },
    [division]
  );

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
    setExploreOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(35,35,35,0.8),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.18),transparent_25%),linear-gradient(180deg,#030303_0%,#090909_55%,#030303_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollToId("home")} className="group flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-semibold tracking-[0.24em]">
              MC3
            </div>
            <div>
              <div className="text-sm font-semibold">MC3 Group</div>
              <div className="text-xs uppercase tracking-[0.26em] text-zinc-500">Growth Systems</div>
            </div>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToId(item.href)}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex md:items-center md:gap-3">
            <button
              onClick={() => setExploreOpen(true)}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Explore
            </button>
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Start a Conversation
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="space-y-2 px-6 py-4">
                {nav.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToId(item.href)}
                    className="block w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-zinc-200"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setExploreOpen(true);
                  }}
                  className="block w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-zinc-200"
                >
                  Explore MC3
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setContactOpen(true);
                  }}
                  className="block w-full rounded-2xl bg-white px-4 py-3 text-left text-sm font-semibold text-black"
                >
                  Start a Conversation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Pill>MC3 Group</Pill>
              <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                More Clarity.
                <br />
                More Control.
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-white to-violet-300 bg-clip-text text-transparent">
                  More Conversion.
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
                MC3 Group builds premium growth systems for businesses that want stronger visibility, better operations, cleaner data, and practical AI leverage.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => setExploreOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  Explore MC3
                  <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => setContactOpen(true)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Start a Conversation
                </button>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <Card key={stat.label} className="p-5">
                    <div className="text-3xl font-semibold">{stat.value}</div>
                    <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-4 shadow-2xl shadow-blue-950/20">
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                      alt="Analytics dashboard"
                      className="h-[20rem] w-full object-cover opacity-80 md:h-[25rem]"
                    />
                  </div>
                  <div className="grid gap-4 p-4 md:grid-cols-3">
                    {[
                      { icon: Gauge, label: "Visibility", value: "Demand" },
                      { icon: LineChart, label: "Insight", value: "Clarity" },
                      { icon: Settings2, label: "Systems", value: "Control" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <Icon size={18} className="text-zinc-300" />
                          <div className="mt-4 text-xs uppercase tracking-[0.28em] text-zinc-500">{item.label}</div>
                          <div className="mt-2 text-lg font-medium">{item.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </Card>              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <Card className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div>
              <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Brand Architecture</div>
              <h3 className="mt-3 text-2xl font-semibold">One strategic umbrella. Two focused engines.</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                MC3 Group is designed to help businesses generate demand on the front end and create leverage on the backend. Start with the system you need now, then expand as complexity and opportunity grow.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-5">
                <div className="text-xs uppercase tracking-[0.28em] text-blue-400">MC3 Marketing</div>
                <div className="mt-3 text-xl font-semibold">More Clicks. More Calls. More Customers.</div>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Visibility, search presence, reputation, and demand generation.
                </p>
              </Card>
              <Card className="p-5">
                <div className="text-xs uppercase tracking-[0.28em] text-fuchsia-400">MC3 Labs</div>
                <div className="mt-3 text-xl font-semibold">More Creativity. More Clarity. More Control.</div>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Analytics, automation, AI integration, and operational leverage.
                </p>
              </Card>
            </div>
          </Card>
        </section>

        <section id="marketing" className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="MC3 Marketing"
            title="Build visibility that turns into real demand."
            text="MC3 Marketing is built for businesses that need stronger local presence, clearer messaging, more trust, and better conversion from the attention they already earn."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {marketingServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-6 transition hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{service.text}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="labs" className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="MC3 Labs"
            title="Engineer systems that create leverage."
            text="MC3 Labs helps businesses increase output and reduce friction through practical analytics, automation, AI tooling, and content infrastructure."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {labsServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-6 transition hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{service.text}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Division Selector"
                title="Explore the engine that fits your next move."
                text="Switch between MC3 Marketing and MC3 Labs to preview where each division creates value."
              />
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setDivision("marketing")}
                  className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                    division === "marketing"
                      ? "bg-white text-black"
                      : "border border-white/10 bg-white/[0.04] text-white"
                  }`}
                >
                  MC3 Marketing
                </button>
                <button
                  onClick={() => setDivision("labs")}
                  className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                    division === "labs"
                      ? "bg-white text-black"
                      : "border border-white/10 bg-white/[0.04] text-white"
                  }`}
                >
                  MC3 Labs
                </button>
              </div>
            </div>

            <motion.div
              key={division}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Card className="overflow-hidden p-0">
                <div className={`h-2 w-full bg-gradient-to-r ${activeDivision.color}`} />
                <div className="p-7 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">{activeDivision.badge}</div>
                      <h3 className="mt-3 text-3xl font-semibold">{activeDivision.name}</h3>
                      <div className="mt-2 text-lg text-zinc-300">{activeDivision.tagline}</div>
                    </div>
                    <button
                      onClick={() => scrollToId(activeDivision.href)}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
                    >
                      View Section
                    </button>
                  </div>
                  <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400">{activeDivision.summary}</p>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {activeDivision.services.slice(0, 4).map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <div className="text-base font-semibold">{item.title}</div>
                        <div className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Process"
            title="A cleaner path from complexity to compounding growth."
            text="MC3 engagements are built around focused diagnosis, smart architecture, disciplined implementation, and ongoing refinement."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.number} className="p-6">
                <div className="text-5xl font-semibold text-white/15">{step.number}</div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{step.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Outcomes"
              title="What businesses are really buying is less chaos and better output."
              text="The best systems do more than create leads. They improve trust, reduce waste, tighten follow-up, and give leaders a clearer picture of what to do next."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Phone,
                  title: "More Qualified Calls",
                  text: "Attract better-fit leads with stronger local presence and better conversion surfaces.",
                },
                {
                  icon: CircleDollarSign,
                  title: "Better Revenue Visibility",
                  text: "Connect data to decisions so performance becomes easier to understand and improve.",
                },
                {
                  icon: Clock3,
                  title: "Less Manual Friction",
                  text: "Use systems and automation to save time while improving consistency.",
                },
                {
                  icon: BarChart3,
                  title: "Stronger Decision Confidence",
                  text: "Gain clarity about bottlenecks, opportunities, and the next highest-leverage move.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-5">
                    <Icon size={18} className="text-zinc-300" />
                    <div className="mt-4 text-lg font-semibold">{item.title}</div>
                    <div className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Testimonials"
            title="Built to sound premium without feeling abstract."
            text="Placeholders for now, but the layout is ready for real client proof, outcomes, and case study-driven credibility."
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6">
                <Sparkles size={18} className="text-zinc-300" />
                <p className="mt-5 text-base leading-8 text-zinc-300">“{t.quote}”</p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions smart clients usually ask first."
            text="This section gives the brand confidence and clarity without forcing users to book a call before they understand the model."
            align="center"
          />
          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => {
              const open = faqOpen === index;
              return (
                <Card key={faq.q} className="overflow-hidden">
                  <button
                    onClick={() => setFaqOpen(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold md:text-lg">{faq.q}</span>
                    <ChevronDown className={`transition ${open ? "rotate-180" : "rotate-0"}`} size={18} />
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <Card className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
                <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Start Here</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Start the conversation with a sharper intake experience.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
                  Whether you need stronger visibility, cleaner operations, or a system that ties both together, MC3 is designed to meet you at the right layer.
                </p>
                <div className="mt-10 space-y-4 text-sm text-zinc-300">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-zinc-500" /> info@mc3grp.com
                  </div>
                </div>
                <button
                  onClick={() => setContactOpen(true)}
                  className="mt-10 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  Open Full Inquiry Form
                </button>
              </div>
              <div className="p-8 md:p-10">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Visibility strategy",
                    "Google Business Profile",
                    "Analytics & dashboards",
                    "Automation systems",
                    "AI integration",
                    "Content systems",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-zinc-300">
                      <CheckCircle2 size={16} className="text-zinc-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-semibold tracking-[0.24em]">
                MC3
              </div>
              <div>
                <div className="font-semibold">MC3 Group</div>
                <div className="text-xs uppercase tracking-[0.26em] text-zinc-500">More Clarity. More Control. More Conversion.</div>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              MC3 Group is the strategic umbrella for MC3 Marketing and MC3 Labs — designed to help businesses grow through visibility, intelligence, and leverage.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Navigate</div>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                {nav.map((item) => (
                  <button key={item.href} onClick={() => scrollToId(item.href)} className="block transition hover:text-white">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Divisions</div>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <button onClick={() => scrollToId("marketing")} className="block transition hover:text-white">MC3 Marketing</button>
                <button onClick={() => scrollToId("labs")} className="block transition hover:text-white">MC3 Labs</button>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Contact</div>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <div>info@mc3grp.com</div>
                <button onClick={() => setContactOpen(true)} className="transition hover:text-white">
                  Inquiry Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {exploreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-zinc-950/95 p-6 shadow-2xl md:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Explore MC3</div>
                  <h3 className="mt-3 text-3xl font-semibold">Choose your path.</h3>
                </div>
                <button
                  onClick={() => setExploreOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card className="group p-6 transition hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-blue-400">MC3 Marketing</div>
                      <div className="mt-3 text-2xl font-semibold">More Clicks. More Calls. More Customers.</div>
                    </div>
                    <Gauge className="text-zinc-400" />
                  </div>
                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    Built for businesses that need better local visibility, cleaner messaging, stronger trust, and more conversion.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => scrollToId("marketing")}
                      className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black"
                    >
                      Go to Marketing
                    </button>
                    <button
                      onClick={() => {
                        setExploreOpen(false);
                        setContactOpen(true);
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold"
                    >
                      Ask About Marketing
                    </button>
                  </div>
                </Card>
                <Card className="group p-6 transition hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-fuchsia-400">MC3 Labs</div>
                      <div className="mt-3 text-2xl font-semibold">More Creativity. More Clarity. More Control.</div>
                    </div>
                    <Workflow className="text-zinc-400" />
                  </div>
                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    Built for teams that need analytics, automation, AI integration, and operational leverage that actually gets used.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => scrollToId("labs")}
                      className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black"
                    >
                      Go to Labs
                    </button>
                    <button
                      onClick={() => {
                        setExploreOpen(false);
                        setContactOpen(true);
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold"
                    >
                      Ask About Labs
                    </button>
                  </div>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4 backdrop-blur-xl"
          >
            <div className="flex min-h-full items-center justify-center py-10">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-zinc-950/95 p-6 shadow-2xl md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Inquiry Form</div>
                    <h3 className="mt-3 text-3xl font-semibold">Start a conversation.</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                      Share what you are trying to improve and we will route the conversation toward the right division, system, and next step.
                    </p>
                  </div>
                  <button
                    onClick={() => setContactOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]"
                  >
                    <X size={18} />
                  </button>
                </div>

                <form className="mt-8 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">Full Name</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/25" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">Email</label>
                    <input type="email" className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/25" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">Company</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/25" placeholder="Business name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">Phone</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/25" placeholder="(555) 555-5555" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm text-zinc-400">Primary Interest</label>
                    <select className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/25">
                      <option>MC3 Marketing</option>
                      <option>MC3 Labs</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm text-zinc-400">What are you trying to improve?</label>
                    <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/25" placeholder="Tell us about your goals, bottlenecks, current systems, or what feels messy right now." />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm text-zinc-400">Current Monthly Lead Volume</label>
                    <select className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/25">
                      <option>Under 25</option>
                      <option>25–100</option>
                      <option>100–500</option>
                      <option>500+</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-6 text-zinc-500">
                      This form is designed to feel premium now and can be connected later to a CRM, email, or automation workflow.
                    </p>
                    <button type="button" className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
