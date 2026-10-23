import React from "react";
import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles } from "lucide-react";
import { Link } from "wouter";

export function HomePage() {
  const highlights = [
    {
      title: "React 19 & Vite",
      description: "Blazing fast HMR, sub-millisecond bundling, and the latest React 19 capabilities.",
    },
    {

      title: "Tailwind CSS v4",
      description: "CSS-first configuration with seamless dark and light modes, zero legacy baggage.",
    },
    {

      title: "WCAG 2.2 AA Accessible",
      description: "Pre-configured focus rings, semantic landmarks, skip links, and screen reader labels.",
    },
  ];

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme bg-surface-card text-xs font-medium text-ink-muted shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Production-Ready Template
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink leading-tight">
          Build sleek, accessible web apps with <span className="text-blue-600">confidence</span>.
        </h1>
        <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
          The ultimate modern starter with React 19, TypeScript, Tailwind v4, Wouter routing, and clean architectural patterns.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-transform active:scale-95 focus-ring"
          >
            Explore Features
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-theme bg-surface-card hover:bg-surface-muted text-ink font-medium shadow-xs transition-colors focus-ring"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-theme bg-surface-card shadow-xs hover:shadow-md transition-shadow space-y-4"
            >
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 p-8 rounded-2xl border border-theme bg-surface-card">
        <h2 className="text-2xl font-bold text-ink mb-6 text-center">What is included out of the box?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "React 19 with native Hooks & strict types",
            "Tailwind CSS v4 with unified CSS variables",
            "Automatic dark / light / system theme detection",
            "Lightweight Wouter routing (< 2KB)",
            "WCAG 2.2 AA compliant focus management",
            "Pre-configured ESLint 9 & TypeScript 5.7",
            "Zero security vulnerabilities & audit clean",
            "Modular component & utility folder architecture",
          ].map((check, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-sm text-ink font-medium">{check}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
