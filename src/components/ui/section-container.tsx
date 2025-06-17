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
}

export function SectionContainer({ 
  children, 
  as: Component = 'section', 
  className, 
  id, 
  animated = true,
  delay = 0,
  ...props 
}: SectionContainerProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ once: true });

  return (
    <Component
      ref={animated ? ref : undefined}
      id={id}
      className={cn(
        "py-16 md:py-24",
        animated && "scroll-reveal-hidden",
        animated && isVisible && "scroll-reveal-visible",
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
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({ title, subtitle, className, titleClassName, subtitleClassName }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      {subtitle && (
        <p className={cn("text-base font-medium text-primary mb-2 font-body tracking-wider uppercase", subtitleClassName)}>
          {subtitle}
        </p>
      )}
      <h2 className={cn("text-4xl md:text-5xl font-headline font-bold text-foreground", titleClassName)}>
        {title}
      </h2>
    </div>
  );
}
