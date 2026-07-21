"use client";

import Link from "next/link";
import type { KeyboardEvent } from "react";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Network,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    eyebrow: "Trust architecture",
    title: "Built to feel calm before you commit.",
    copy:
      "Every partnership starts with structure, visible ownership, and a low-risk path into the growth system.",
    label: "Core promise",
    heading: "Structured systems",
    detail:
      "Website, CRM, visibility, reviews, and reporting work as one connected operating layer with clear ownership.",
    meta: ["One system", "No scattered tools"],
    icon: Network,
    variant: "system",
  },
  {
    eyebrow: "Evaluation window",
    title: "Proof before long-term pressure.",
    copy:
      "A focused trial period gives the system room to prove direction before a long-term partnership begins.",
    label: "4-month trial",
    heading: "Start with a clear runway.",
    detail:
      "We review, build, measure, and optimize inside a defined window so the next decision feels informed.",
    meta: ["Clear rhythm", "Measured progress"],
    icon: RefreshCcw,
    variant: "trial",
  },
  {
    eyebrow: "Risk reversal",
    title: "Confidence built into the offer.",
    copy:
      "The commitment is designed to feel grounded, transparent, and fair from the first conversation.",
    label: "Guarantee",
    heading: "Money-back guarantee.",
    detail:
      "If the fit is not right, the engagement has a clear safety layer instead of vague promises.",
    meta: ["Lower risk", "Clear terms"],
    icon: BadgeCheck,
    variant: "guarantee",
  },
  {
    eyebrow: "After launch",
    title: "A partner responsible for what happens next.",
    copy:
      "Growth systems need ongoing ownership, not a handoff after the launch checklist is complete.",
    label: "Long-term ownership",
    heading: "Responsibility that keeps improving.",
    detail:
      "One accountable partner keeps the system connected, visible, and continuously optimized.",
    meta: ["Owner-led review", "Continuous improvement"],
    icon: ShieldCheck,
    variant: "responsibility",
  },
] as const;

const AUTO_PLAY_MS = 6200;

export function TrustCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const titleId = useId();
  const activeSlide = slides[active];
  const ActiveIcon = activeSlide.icon;
  const slideCount = slides.length;
  const progress = useMemo(() => ((active + 1) / slideCount) * 100, [active, slideCount]);
  const carouselRef = useRef<HTMLElement>(null);

  const goTo = useCallback((index: number) => {
    setActive((index + slideCount) % slideCount);
  }, [slideCount]);

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused]);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
  }

  function handleTouchEnd(clientX: number) {
    if (touchStart === null) return;
    const delta = touchStart - clientX;
    setTouchStart(null);

    if (Math.abs(delta) < 42) return;
    if (delta > 0) {
      goNext();
    } else {
      goPrev();
    }
  }

  return (
    <section
      className="section proof-strip"
      aria-labelledby={titleId}
      aria-roledescription="carousel"
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
      onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      ref={carouselRef}
      tabIndex={0}
    >
      <div className="proof-ambient proof-ambient-one" aria-hidden="true" />
      <div className="proof-ambient proof-ambient-two" aria-hidden="true" />
      <div className="proof-carousel-shell">
        <div className="proof-carousel-header">
          <div className="proof-copy">
            <p className="eyebrow">{activeSlide.eyebrow}</p>
            <h2 id={titleId}>{activeSlide.title}</h2>
            <p>{activeSlide.copy}</p>
          </div>
          <div className="proof-controls" aria-label="Trust carousel controls">
            <button className="proof-arrow" type="button" onClick={goPrev} aria-label="Previous trust slide">
              <ArrowLeft size={18} />
            </button>
            <button className="proof-arrow" type="button" onClick={goNext} aria-label="Next trust slide">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          className={`proof-carousel-stage proof-slide-${activeSlide.variant}`}
          aria-live="polite"
          aria-label={`Slide ${active + 1} of ${slideCount}: ${activeSlide.heading}`}
        >
          <div className="proof-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <article className="proof-slide-panel" key={activeSlide.heading}>
            <div className="proof-slide-kicker">
              <div className="proof-icon proof-icon-large">
                <ActiveIcon size={26} />
              </div>
              <span>{activeSlide.label}</span>
            </div>
            <div className="proof-slide-main">
              <h3>{activeSlide.heading}</h3>
              <p>{activeSlide.detail}</p>
            </div>
            <div className="proof-system-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="proof-feature-meta">
              <strong>{activeSlide.meta[0]}</strong>
              <em>{activeSlide.meta[1]}</em>
            </div>
          </article>

          <div className="proof-slide-aside" aria-hidden="true">
            <div className="proof-mini-orb">
              <Sparkles size={18} />
            </div>
            <span>{String(active + 1).padStart(2, "0")}</span>
            <strong>{activeSlide.label}</strong>
          </div>

          <div className="proof-slide-preview">
            {slides.map((slide, index) => {
              const PreviewIcon = slide.icon;
              return (
                <button
                  aria-current={index === active ? "true" : undefined}
                  aria-label={`Go to ${slide.label}`}
                  className="proof-preview-card"
                  key={slide.label}
                  onClick={() => goTo(index)}
                  type="button"
                >
                  <PreviewIcon size={18} />
                  <span>{slide.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="proof-carousel-footer">
          <Link className="button primary proof-cta" href="/contact">
            Book a Free Growth Analysis
            <ArrowRight size={18} />
          </Link>
          <div className="proof-progress" aria-label={`Carousel progress ${active + 1} of ${slideCount}`}>
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="proof-dots" aria-label="Trust carousel slides">
            {slides.map((slide, index) => (
              <button
                aria-current={index === active ? "true" : undefined}
                aria-label={`Show slide ${index + 1}: ${slide.label}`}
                key={slide.label}
                onClick={() => goTo(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
