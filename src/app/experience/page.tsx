import { ExperienceItem } from "@/components/experience-item";
import { SectionContainer, SectionHeader } from "@/components/ui/section-container";
import { workExperienceData as experiences } from "@/lib/data";

export const metadata = {
    title: "Work Experience | Priyanshu Ranjan",
    description:
        "Detailed work experience of Priyanshu Ranjan, highlighting roles, responsibilities, and achievements.",
};

export default function ExperiencePage() {
    return (
        <SectionContainer id="work-experience" animated bgColorClass="bg-section-experience" fullWidthBg>
            <SectionHeader title="Work Experience" subtitle="Professional Journey" />
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-sans">
                My professional journey has been marked by impactful roles where I've contributed to significant
                projects and driven design excellence. Here's a look at my key experiences.
            </p>
            <div className="space-y-12 max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={exp.company + exp.role} experience={exp} animationDelay={index * 150} />
                ))}
            </div>
        </SectionContainer>
    );
}
