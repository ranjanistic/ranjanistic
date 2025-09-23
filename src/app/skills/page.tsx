import { SkillCategory } from "@/components/skill-category";
import { SectionContainer, SectionHeader } from "@/components/ui/section-container";
import { skillCategories } from "@/lib/data";

export const metadata = {
    title: "Skills | Priyanshu Ranjan",
    description: "An overview of Priyanshu Ranjan's technical and design skills, tools, and expertise.",
};

export default function SkillsPage() {
    return (
        <SectionContainer id="skills-overview" animated bgColorClass="bg-section-skills" fullWidthBg>
            <SectionHeader title="My Skills & Expertise" subtitle="Technical Proficiency" />
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-sans">
                I possess a diverse range of skills spanning design, development, and project management. Here's a
                breakdown of my core competencies and the tools I leverage to bring ideas to life.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <SkillCategory key={category.name} category={category} animationDelay={index * 100} />
                ))}
            </div>
        </SectionContainer>
    );
}
