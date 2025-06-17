"use client";
import type { SkillCategory as SkillCategoryType } from '@/lib/types';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface SkillCategoryProps {
  category: SkillCategoryType;
  animationDelay?: number;
}

export function SkillCategory({ category, animationDelay = 0 }: SkillCategoryProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal-hidden",
        isVisible && "scroll-reveal-visible"
      )}
      style={isVisible ? { transitionDelay: `${animationDelay}ms` } : {}}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <CardHeader className="flex flex-row items-center gap-4 pb-4">
          <category.icon className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl font-headline text-foreground">{category.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-5">
            {category.skills.map((skill) => (
              <li key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={isVisible ? skill.level : 0} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 transition-all duration-1000 ease-out" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
