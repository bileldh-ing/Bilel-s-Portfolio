"use client";

import React, { useEffect, useMemo, useState } from "react";

const MAX_PROJECTS = 50; // display as +50

const MoreProjects: React.FC = () => {
  const [count, setCount] = useState(0);

  // Smooth counting effect
  useEffect(() => {
    let raf = 0;
    const duration = 1600; // ms
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setCount(Math.floor(eased * MAX_PROJECTS));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Scale grows slightly with progress
  const scale = useMemo(() => 1 + Math.min(1, count / MAX_PROJECTS) * 0.2, [count]);

  return (
    <section id="more-projects" className="py-20">
      <div className="flex flex-col items-center">
        {/* Single line: big +count followed by 'other projects' */}
        <div className="flex items-end gap-3">
          <div
            className="font-bold text-white"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 120ms linear",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
            }}
            aria-label={`More than ${count} projects`}
          >
            +{count}
          </div>
          <span className="text-2xl md:text-3xl text-white-200">other projects</span>
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-center text-white-200">
          Varying from IoT & Robotics, AI, Web Development, Mobile, Desktop and much more
        </p>

        {/* Fancy resume button */}
        <div className="btn-container mt-8">
          <a href="/Resume_Dhahri_Bilel.pdf" download>
            <button id="space-btn" name="space-button" type="button">
              <span>Explore my resume</span>
              {/* Stars */}
              {Array.from({ length: 26 }).map((_, i) => {
                const left = Math.random() * 260; // btn is ~200px wide; give some overflow
                const top = Math.random() * 60;
                const delay = Math.random() * 5;
                const scale = 0.1 + Math.random() * 2;
                return (
                  <div
                    key={i}
                    className="star"
                    style={{ position: "absolute", left, top, animationDelay: `${delay}s`, transform: `scale(${scale})` }}
                  />
                );
              })}
              {/* Shooting stars */}
              <div className="shooting-star shooting-star-1" />
              <div className="shooting-star shooting-star-2" />
              <div className="shooting-star shooting-star-3" />
              <div className="shooting-star shooting-star-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
