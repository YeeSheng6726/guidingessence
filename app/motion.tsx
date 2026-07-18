"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MotionController() {
  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set("[data-gsap]", { clearProps: "all" });
      return;
    }

    const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
    hero
      .from(".gsap-hero-copy > *", {
        autoAlpha: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.1,
      })
      .from(
        ".gsap-hero-media",
        { autoAlpha: 0, scale: 0.92, y: 24, duration: 1.1 },
        0.12,
      )
      .from(".confidence-line", { autoAlpha: 0, y: 16, duration: 0.7 }, 0.55);

    gsap.utils.toArray<HTMLElement>(".gsap-section-reveal").forEach((element) => {
      gsap.from(element, {
        autoAlpha: 0,
        y: 44,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 84%",
          once: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".gsap-media").forEach((media) => {
      gsap.fromTo(
        media,
        { scale: 0.9, opacity: 0.62 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: media,
            start: "top 92%",
            end: "center 56%",
            scrub: 0.7,
          },
        },
      );
    });

    gsap.from(".principle", {
      autoAlpha: 0,
      y: 32,
      stagger: 0.1,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".principle-grid",
        start: "top 78%",
        once: true,
      },
    });

    gsap.utils.toArray<HTMLElement>(".journey-step").forEach((step) => {
      gsap.from(step, {
        autoAlpha: 0,
        y: 42,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 82%",
          once: true,
        },
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return null;
}
