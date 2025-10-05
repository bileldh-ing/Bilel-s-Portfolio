"use client";

import { useEffect, useMemo, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number; // ms per char when typing
  deletingSpeed?: number; // ms per char when deleting
  pauseTime?: number; // ms to pause at full phrase
  className?: string;
}

export default function Typewriter({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1200,
  className,
}: TypewriterProps) {
  const list = useMemo(() => phrases.filter(Boolean), [phrases]);
  const [index, setIndex] = useState(0); // which phrase
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!list.length) return;
    const full = list[index % list.length];

    if (!deleting) {
      if (text.length < full.length) {
        const id = setTimeout(() => setText(full.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(id);
    }

    if (text.length > 0) {
      const id = setTimeout(() => setText(full.slice(0, text.length - 1)), deletingSpeed);
      return () => clearTimeout(id);
    }

    setDeleting(false);
    setIndex((i) => (i + 1) % list.length);
  }, [list, index, text, deleting, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <p className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] -mb-[2px] bg-white ms-1 animate-pulse" />
    </p>
  );
}
