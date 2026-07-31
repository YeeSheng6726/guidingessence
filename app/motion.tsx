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
      );

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

    ScrollTrigger.refresh();
  }, []);

  return null;
}
