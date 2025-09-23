"use client";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type React from "react";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    id?: string;
    animated?: boolean;
    delay?: number;
    fullWidthBg?: boolean;
    bgColorClass?: string; // New prop for specific background color class
}

export function SectionContainer({
    children,
    as: Component = "section",
    className,
    id,
    animated = true,
    delay = 0,
    fullWidthBg = true, // Default to true for the "single sheet" feel
    bgColorClass, // e.g., "bg-section-about"
    ...props
}: SectionContainerProps) {
    const { ref, isVisible } = useScrollReveal<HTMLElement>({ once: true });

    const baseClasses = cn(animated && "scroll-reveal-hidden", animated && isVisible && "scroll-reveal-visible");

    // If fullWidthBg is true, the bgColorClass applies to the outer component
    // The inner div handles padding and max-width for content
    return (
        <Component
            ref={animated ? ref : undefined}
            id={id}
            className={cn(
                baseClasses,
                fullWidthBg ? bgColorClass : "", // Apply bgColorClass if fullWidthBg
                fullWidthBg ? "w-full" : "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", // Outer structure
                className, // Allows overriding or adding to outer component classes
            )}
            style={animated && isVisible ? { transitionDelay: `${delay}ms` } : {}}
            {...props}
        >
            <div
                className={cn(
                    fullWidthBg ? "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" : "", // Inner content wrapper if fullWidthBg
                    "py-16 md:py-24", // Standard padding for content
                    fullWidthBg ? "" : bgColorClass, // Apply to inner if not fullWidthBg
                )}
            >
                {children}
            </div>
        </Component>
    );
}

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    alignment?: "left" | "center";
}

export function SectionHeader({
    title,
    subtitle,
    className,
    titleClassName,
    subtitleClassName,
    alignment = "left",
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "mb-10 md:mb-16",
                alignment === "center" && "text-center",
                alignment === "left" && "text-left",
                className,
            )}
        >
            {subtitle && (
                <p
                    className={cn(
                        "text-sm font-medium text-accent mb-2 font-sans tracking-wider uppercase",
                        subtitleClassName,
                    )}
                >
                    {subtitle}
                </p>
            )}
            <h2
                className={cn(
                    "text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold gradient-text",
                    titleClassName,
                )}
            >
                {title}
            </h2>
        </div>
    );
}
