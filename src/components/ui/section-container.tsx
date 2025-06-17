"use client";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type React from 'react';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  animated?: boolean;
  delay?: number; // in ms
  fullWidthBg?: boolean; // New prop for full-width background
}

export function SectionContainer({ 
  children, 
  as: Component = 'section', 
  className, 
  id, 
  animated = true,
  delay = 0,
  fullWidthBg = false, // Default to not full width
  ...props 
}: SectionContainerProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ once: true });

  const baseClasses = cn(
    animated && "scroll-reveal-hidden",
    animated && isVisible && "scroll-reveal-visible",
  );

  if (fullWidthBg) {
    return (
      <Component
        ref={animated ? ref : undefined}
        id={id}
        className={cn(baseClasses, className)} // className here is for the full-width wrapper
        style={animated && isVisible ? { transitionDelay: `${delay}ms` } : {}}
        {...props}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"> {/* Inner container for content */}
          {children}
        </div>
      </Component>
    );
  }

  return (
    <Component
      ref={animated ? ref : undefined}
      id={id}
      className={cn(
        "py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", // Wider content area, still constrained
        baseClasses,
        className
      )}
      style={animated && isVisible ? { transitionDelay: `${delay}ms` } : {}}
      {...props}
    >
      {children}
    </Component>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string; // Applied to the wrapper div
  titleClassName?: string;
  subtitleClassName?: string;
  alignment?: 'left' | 'center'; // New prop for alignment
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className, 
  titleClassName, 
  subtitleClassName,
  alignment = 'left' // Default to left alignment
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-10 md:mb-16", 
      alignment === 'center' && "text-center",
      alignment === 'left' && "text-left",
      className
    )}>
      {subtitle && (
        <p className={cn(
          "text-base font-medium text-accent mb-2 font-sans tracking-wider uppercase", // Using accent for subtitle
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-headline font-bold gradient-text", // Apply gradient-text class
        titleClassName
      )}>
        {title}
      </h2>
    </div>
  );
}
