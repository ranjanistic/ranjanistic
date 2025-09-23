// @ts-nocheck
"use client";
import type { SkillCategory as SkillCategoryType, Skill } from "@/lib/types"; // Added Skill type
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import {
    Palette,
    Code as CodeIcon,
    Briefcase,
    Settings,
    Users,
    BookOpen,
    Wand2,
    Award,
    Star,
    Languages as LanguagesIcon,
    ShieldCheck,
    CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
    category: SkillCategoryType;
    animationDelay?: number;
}

const iconMap: Record<string, LucideIcon> = {
    Palette,
    Code: CodeIcon,
    Briefcase,
    Settings,
    Users,
    BookOpen,
    Wand2,
    Award,
    Star,
    Languages: LanguagesIcon,
    ShieldCheck, // For Core Expertise
};

export function SkillCategory({ category, animationDelay = 0 }: SkillCategoryProps) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });
    const IconComponent = iconMap[category.iconName] || Briefcase; // Fallback icon

    return (
        <div
            ref={ref}
            className={cn("scroll-reveal-hidden", isVisible && "scroll-reveal-visible")}
            style={isVisible ? { transitionDelay: `${animationDelay}ms` } : {}}
        >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card text-card-foreground">
                <CardHeader className="flex flex-row items-center gap-4 pb-6">
                    {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                    <CardTitle className="text-2xl font-headline text-foreground">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-5">
                        {category.skills.map(
                            (
                                skill: Skill, // Explicitly type skill
                            ) => (
                                <li key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                        <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 shrink-0" />
                                        {/* <span className="text-sm font-medium text-muted-foreground">
                    {skill.detail ? `${skill.level}% (${skill.detail})` : `${skill.level}%`}
                  </span> */}
                                    </div>
                                    {/* <Progress 
                  value={isVisible ? skill.level : 0} 
                  aria-label={`${skill.name} proficiency ${skill.level}% ${skill.detail || ''}`} 
                  className="h-2 transition-all duration-1000 ease-out [&>div]:bg-primary" 
                /> */}
                                </li>
                            ),
                        )}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
