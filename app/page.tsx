
"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    title: "Document everything",
    description:
      "Capture photos, notes, and property conditions before you settle in.",
    icon: "▧",
  },
  {
    number: "02",
    title: "Compare with confidence",
    description:
      "Keep move-in and move-out records organised so changes are easier to identify.",
    icon: "↔",
  },
  {
    number: "03",
    title: "Build mutual trust",
    description:
      "Give tenants and landlords a clearer, shared record of the property's condition.",
    icon: "✓",
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fafbf8] text-[#20372b]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          handover<span className="text-[#7c9b78]">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-[#617065] md:flex">
          <a href="#how-it-works" className="transition hover:text-[#20372b]">
            How it works
          </a>
          <a href="#features" className="transition hover:text-[#20372b]">
            Features
          </a>
          <a href="#contact" className="transition hover:text-[#20372b]">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-[#294b38] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#3d654b]"
        >
          Get early access <span aria-hidden="true">↗</span>
        </a>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-12 md:pt-20 lg:grid-cols-2 lg:px-10 lg:pb-32"
      >
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce6d9] bg-white px-4 py-2 text-sm text-[#4b6a50]">
            <span className="h-2 w-2 rounded-full bg-[#81a67c]" />
            A better beginning for every home
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Move in with confidence.
            <span className="mt-2 block text-[#829b78]">
              Move out with proof.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#6c786e]">
            Moving should be exciting, not stressful. Handover helps tenants
            and landlords document property conditions and keep a clearer
            record from day one to move-out.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#294b38] px-7 py-4 font-medium text-white transition hover:-translate-y-1 hover:bg-[#3d654b]"
            >
              Join the early-access list <span aria-hidden="true">→</span>
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-[#dce2d9] bg-white px-7 py-4 font-medium transition hover:border-[#91a68d]"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-sm text-[#879188]">
            Designed for tenants, landlords and property managers.
          </p>
        </div>

        {/* Visual property card */}
        <div className="animate-fade-up relative mx-auto w-full max-w-xl">
          <div className="absolute -right-5 -top-7 h-36 w-36 rounded-full bg-[#e5ebd9] blur-3xl" />

          <div className="relative rounded-[2rem] border border-[#e5e9df] bg-white p-4 shadow-[0_30px_90px_-45px_rgba(41,75,56,0.28)] sm:p-6">
            <div className="flex items-center justify-between px-2 pb-5 pt-2">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8b968b]">
                  Property record
                </p>
                <h2 className="mt-1 text-lg font-semibold">Your new beginning</h2>
              </div>
              <span className="rounded-full bg-[#eaf2e6] px-3 py-2 text-xs font-medium text-[#52744e]">
                ● Demo
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-[#e7e9dc]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85"
                alt="Bright, welcoming modern living room"
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 pt-16 text-white">
                <p className="text-sm text-white/80">PROPERTY CHECKLIST</p>
                <p className="mt-1 text-xl font-medium">Living room</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="rounded-2xl bg-[#f4f6f0] p-4">
                <p className="text-sm text-[#758175]">Move-in record</p>
                <p className="mt-2 font-semibold">Photos & notes</p>
                <p className="mt-1 text-xs text-[#829082]">Document the start</p>
              </div>
              <div className="rounded-2xl bg-[#f4f6f0] p-4">
                <p className="text-sm text-[#758175]">Move-out record</p>
                <p className="mt-2 font-semibold">Compare changes</p>
                <p className="mt-1 text-xs text-[#829082]">Keep a clear history</p>
              </div>
            </div>
            <p className="px-2 pb-1 pt-4 text-xs text-[#879188]">
              Illustrative preview — property records are not stored yet.
            </p>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="border-y border-[#e8ebe3] bg-white px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">Clear records</p>
            <p className="mt-2 text-sm leading-6 text-[#7a857b]">
              Keep important property details organised.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">Shared understanding</p>
            <p className="mt-2 text-sm leading-6 text-[#7a857b]">
              Help both parties start on the same page.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">Fewer surprises</p>
            <p className="mt-2 text-sm leading-6 text-[#7a857b]">
              Make condition changes easier to discuss.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#789272]">
            Why Handover
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A little more clarity goes a long way.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#748075]">
            Property handovers deserve a simple, consistent process that
            respects both sides.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group rounded-3xl border border-[#e5e9df] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#b9cbb2] hover:shadow-xl hover:shadow-[#294b38]/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf2e8] text-2xl text-[#52744e]">
                  {feature.icon}
                </span>
                <span className="text-sm text-[#a1aba0]">{feature.number}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-[#778277]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-[#eef2e9] px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#789272]">
              The process
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Three steps to a clearer handover.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ["01", "Record", "Document the property's condition with photos and notes at move-in."],
              ["02", "Review", "Keep your records ready to revisit throughout the tenancy."],
              ["03", "Compare", "At move-out, review the records together and discuss any changes."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-[#cbd6c5] pt-6">
                <p className="text-sm font-medium text-[#789272]">{number}</p>
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#6f7e70]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early access form */}
      <section id="contact" className="px-6 py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 rounded-[2rem] bg-[#294b38] p-7 text-white sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#c1d6b8]">
              Get involved
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Better handovers start here.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#d4dfd1]">
              Interested in trying Handover or sharing feedback? Join our
              early-access list and help shape the product.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 text-[#20372b] sm:p-8"
          >
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-xl font-semibold">Thank you for your interest.</p>
                <p className="mt-3 text-sm leading-6 text-[#748075]">
                  This is a front-end demo. Your details have not been sent or
                  saved. We'll connect the form to a real submission service next.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-medium text-[#52744e] underline"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold">Join the early-access list</h3>
                <p className="mt-2 text-sm leading-6 text-[#7b867b]">
                  Tell us a little about yourself.
                </p>

                <label htmlFor="name" className="mt-6 block text-sm font-medium">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-[#dfe5db] px-4 py-3 outline-none transition focus:border-[#779574] focus:ring-2 focus:ring-[#779574]/20"
                />

                <label htmlFor="email" className="mt-4 block text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-[#dfe5db] px-4 py-3 outline-none transition focus:border-[#779574] focus:ring-2 focus:ring-[#779574]/20"
                />

                <label htmlFor="role" className="mt-4 block text-sm font-medium">
                  I am a...
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[#dfe5db] bg-white px-4 py-3 outline-none focus:border-[#779574]"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="tenant">Tenant</option>
                  <option value="landlord">Landlord</option>
                  <option value="property-manager">Property manager</option>
                  <option value="other">Other</option>
                </select>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-[#294b38] px-6 py-4 font-medium text-white transition hover:bg-[#3d654b]"
                >
                  Register interest <span aria-hidden="true">→</span>
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[#8b958a]">
                  Demo form only. Your details are not stored or transmitted.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e9df] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:px-4">
          <a href="#home" className="text-xl font-bold tracking-tight">
            handover<span className="text-[#829b78]">.</span>
          </a>
          <p className="text-sm text-[#849084]">
            Making property handovers clearer for everyone.
          </p>
          <a href="#contact" className="text-sm text-[#526b52] hover:underline">
            Get in touch
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-7xl text-xs text-[#9aa399] lg:px-4">
          © 2026 Handover. A startup concept.
        </p>
      </footer>
    </main>
  );
}
