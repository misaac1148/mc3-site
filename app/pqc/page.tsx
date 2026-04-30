"use client";

import { useState } from "react";

export default function PQCLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interest: "PQC Readiness Audit",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send inquiry");
      }

      setFormStatus("Thanks — your PQC audit request was sent.");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        interest: "PQC Readiness Audit",
      });
    } catch (error) {
      setFormStatus(
        "Something went wrong. Please email us directly at info@mc3grp.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="/" className="text-sm font-semibold text-white">
            MC3 Group
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Request Audit
          </a>
        </div>
      </div>

      <section className="relative overflow-hidden px-6 py-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_30%)]" />

        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Post-Quantum Cryptography Readiness Audit
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Government contractors need to know where their encryption will
              fail before quantum requirements become contract problems.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              MC3 Group helps contractors, subcontractors, and security-focused
              companies identify post-quantum cryptography exposure, document
              risk, and build a clear migration roadmap without locking you into
              an implementation contract.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-cyan-400 px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
              >
                Request a PQC Readiness Audit
              </a>
              <a
                href="#audit"
                className="rounded-xl border border-white/15 px-6 py-4 text-center text-base font-semibold text-white hover:bg-white/10"
              >
                See What’s Included
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            [
              "NIST Standards",
              "The first federal post-quantum cryptography standards have been finalized.",
            ],
            [
              "CISA Guidance",
              "Organizations are being encouraged to inventory cryptography and prepare quantum-readiness roadmaps.",
            ],
            [
              "Contract Pressure",
              "Prime contractors and regulated buyers will increasingly expect vendors to explain their PQC plan.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-2xl font-bold text-cyan-300">{title}</p>
              <p className="mt-2 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The risk is not just future quantum computers. It is sensitive
              encrypted data being collected today.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Many companies still rely on RSA, ECC, TLS configurations, VPNs,
              certificates, code signing, email security, and vendor tools that
              were not designed for a post-quantum threat model.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Attackers can capture encrypted data now and decrypt it later when
              capable quantum systems exist.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <h3 className="text-xl font-semibold">Common exposure areas</h3>
            <ul className="mt-6 space-y-4 text-slate-200">
              <li>• Public key infrastructure and certificates</li>
              <li>• TLS, VPN, SSH, email, and API encryption</li>
              <li>• Software, firmware, and document signing</li>
              <li>• Cloud, SaaS, MSP, and security vendors</li>
              <li>• Long-retention sensitive data</li>
              <li>• Contract and compliance questionnaires</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="audit" className="bg-slate-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What the MC3 PQC Readiness Audit includes
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This is an audit and recommendation engagement. We help you find
              the gaps, understand the risk, and create a roadmap.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Cryptographic inventory",
                "Identify where classical public-key cryptography appears across systems, vendors, workflows, and policies.",
              ],
              [
                "Risk prioritization",
                "Separate urgent exposure from low-risk noise so leadership knows what needs attention first.",
              ],
              [
                "Vendor readiness review",
                "Assess which vendors support PQC, have roadmaps, or may create future compliance gaps.",
              ],
              [
                "Contractor positioning",
                "Prepare language your team can use in questionnaires, proposals, and internal security reviews.",
              ],
              [
                "Migration roadmap",
                "Create a phased plan for discovery, testing, procurement, implementation, and documentation.",
              ],
              [
                "Executive report",
                "Deliver a plain-English summary leadership can understand without needing a cryptography background.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Who this is for
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Best fit for organizations that need to look credible before
                PQC becomes an urgent procurement, compliance, or contract issue.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Federal contractors",
                "Government subcontractors",
                "Defense industrial base suppliers",
                "Critical infrastructure vendors",
                "MSPs and cybersecurity providers",
                "Companies with long-retention sensitive data",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-5 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple audit process
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              [
                "01",
                "Discovery",
                "We review your environment, vendors, systems, and known encryption touchpoints.",
              ],
              [
                "02",
                "Inventory",
                "We document visible PQC exposure areas and identify missing information.",
              ],
              [
                "03",
                "Risk scoring",
                "We rank systems by sensitivity, data lifetime, external exposure, and contract relevance.",
              ],
              [
                "04",
                "Roadmap",
                "You receive a clear report with recommended next steps and implementation options.",
              ],
            ].map(([step, title, body]) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-cyan-700">{step}</p>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A focused audit before you spend money on tools, vendors, or a
              rushed migration.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              MC3 Group gives you a practical, decision-ready report that helps
              leadership understand what matters, what can wait, and what needs
              immediate attention.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              Audit engagement
            </p>
            <h3 className="mt-3 text-3xl font-bold">PQC Readiness Review</h3>
            <p className="mt-4 text-slate-300">
              Designed as a first-step assessment for organizations preparing
              for customer, contract, or compliance pressure.
            </p>

            <ul className="mt-6 space-y-3 text-slate-200">
              <li>• Leadership-ready summary</li>
              <li>• Technical exposure inventory</li>
              <li>• Vendor and system risk notes</li>
              <li>• Prioritized migration roadmap</li>
              <li>• Optional follow-up advisory session</li>
            </ul>

            <a
              href="#contact"
              className="mt-8 block rounded-xl bg-cyan-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Start With an Audit
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why MC3 Group?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              You do not need a 200-page theoretical cryptography report. You
              need a practical outside assessment your leadership, sales,
              compliance, and technical teams can actually use.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <ul className="space-y-4 text-slate-200">
              <li>• Independent audit and recommendation model</li>
              <li>• Plain-English reporting for executives</li>
              <li>• Built for government-contractor sales pressure</li>
              <li>• No requirement to hire us for implementation</li>
              <li>• Roadmap your team or chosen contractor can execute</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>

          <div className="mt-8 space-y-6">
            {[
              [
                "Is this the same as implementation?",
                "No. This offer is focused on auditing, documenting risk, and recommending a migration path.",
              ],
              [
                "What does PQC stand for?",
                "PQC stands for post-quantum cryptography.",
              ],
              [
                "Why should we care now?",
                "Sensitive encrypted data can be captured today and decrypted later. Federal agencies and national-security-adjacent organizations are already being pushed to inventory cryptography and plan migration.",
              ],
              [
                "Do we need to replace everything immediately?",
                "Usually no. The first move is inventory and prioritization.",
              ],
              [
                "Can this help with customer or prime-contractor questionnaires?",
                "Yes. One goal of the audit is to help you explain your PQC posture in a credible, practical way.",
              ],
            ].map(([q, a]) => (
              <div
                key={q}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-lg font-semibold">{q}</h3>
                <p className="mt-3 text-slate-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-white px-6 py-20 text-slate-950 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Request a PQC Readiness Audit
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Send a short message and MC3 Group will follow up about fit,
              scope, and next steps.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-100 p-6">
              <p className="font-semibold">Good fit if you are:</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Selling into government or regulated industries</li>
                <li>• Supporting prime contractors</li>
                <li>• Handling sensitive long-retention data</li>
                <li>• Unsure where your encryption exposure lives</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="interest" value={formData.interest} />

              <div>
                <label className="block text-sm font-semibold">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Tell us a little about your organization and why you are looking at PQC readiness."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit Audit Request"}
              </button>

              {formStatus && (
                <p className="text-center text-sm text-slate-600">
                  {formStatus}
                </p>
              )}

              <p className="text-center text-sm text-slate-500">
                Or email directly: info@mc3grp.com
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
