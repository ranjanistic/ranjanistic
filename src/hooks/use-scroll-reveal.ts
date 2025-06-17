"use client";

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  once?: boolean; // Trigger animation only once
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(options?: ScrollRevealOptions) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const defaultOptions: Required<ScrollRevealOptions> = {
    threshold: 0.1,
    once: true,
    rootMargin: '0px 0px -50px 0px', // Trigger a bit before it's fully in view
    ...options,
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (defaultOptions.once) {
            observer.unobserve(currentRef);
          }
        } else {
          if (!defaultOptions.once) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [defaultOptions.threshold, defaultOptions.once, defaultOptions.rootMargin]);

  return { ref, isVisible };
}
