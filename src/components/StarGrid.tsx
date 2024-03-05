"use client";
// src/components/StarGrid.tsx

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function StarGrid() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const grid = [14, 30] as const;

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { opacity: 1 });
        gsap.set(".star-grid-item", {
          opacity: 0.2,
          scale: 1,
        });
        return;
      }

      gsap.set(".star-grid-item", {
        opacity: 0,
        transformOrigin: "center",
        color: "#fff",
      });
      gsap.set(container.current, { opacity: 1 });

      const tl = gsap.timeline();

      // Entrance animation
      tl.to(".star-grid-item", {
        keyframes: [
          {
            opacity: 0,
            duration: 0,
          },
          {
            opacity: 0.4,
            rotate: "+=180",
            color: "#ffd057",
            scale: 3,
            duration: 0.6,
            stagger: {
              amount: 2,
              grid: grid,
              from: "center",
            },
          },
          {
            opacity: 0.2,
            rotate: "+=180",
            color: "#fff",
            scale: 1,
            delay: -2,
            duration: 0.6,
            stagger: {
              amount: 3,
              grid: grid,
              from: "center",
            },
          },
        ],
      });

      // Loop animation
      tl.to(".star-grid-item", {
        delay: 8,
        repeat: -1,
        repeatDelay: 8,
        keyframes: [
          {
            opacity: 0.4,
            rotate: "+=180",
            color: "#ffd057",
            scale: 3,
            duration: 0.6,
            stagger: {
              amount: 2,
              grid: grid,
              from: "center",
            },
          },
          {
            opacity: 0.2,
            rotate: "+=180",
            color: "#fff",
            scale: 1,
            delay: -2,
            duration: 0.6,
            stagger: {
              amount: 3,
              grid: grid,
              from: "center",
            },
          },
        ],
      });
    },
    { scope: container },
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14 -z-10"
      id="star-grid"
      ref={container}
      opacity={0}
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <defs>
        <path
          fillOpacity="1"
          id="star-icon"
          d="M1.87.1a.14.14 0 01.26 0l.14.36a2.13 2.13 0 001.27 1.27l.37.14a.14.14 0 010 .26l-.37.14a2.13 2.13 0 00-1.27 1.27l-.14.37a.14.14 0 01-.26 0l-.14-.37A2.13 2.13 0 00.46 2.27L.1 2.13a.14.14 0 010-.26l.37-.14A2.13 2.13 0 001.73.46L1.87.1z"
        />
      </defs>
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <use
                x={j * 32}
                y={i * 32 + 10}
                fill="currentColor"
                href="#star-icon"
                opacity=".2"
                className="star-grid-item"
                d="M1.87.1a.14.14 0 01.26 0l.14.36a2.13 2.13 0 001.27 1.27l.37.14a.14.14 0 010 .26l-.37.14a2.13 2.13 0 00-1.27 1.27l-.14.37a.14.14 0 01-.26 0l-.14-.37A2.13 2.13 0 00.46 2.27L.1 2.13a.14.14 0 010-.26l.37-.14A2.13 2.13 0 001.73.46L1.87.1z"
                key={i + j}
              />
            );
          });
        })}
      </g>
    </svg>
  );
}
