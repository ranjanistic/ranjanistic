import Image from "next/image";
import { SectionContainer, SectionHeader } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Gitlab } from "lucide-react";
import { socialLinksFooter } from "@/lib/data";
import Link from "next/link";

export default function AboutPage() {
    return (
        <SectionContainer id="about-me" animated bgColorClass="bg-section-about" fullWidthBg>
            <SectionHeader title="About Priyanshu Ranjan" subtitle="My Journey & Philosophy" />

            <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1 flex flex-col items-center">
                    <Image
                        src="https://placehold.co/400x500.png"
                        alt="Priyanshu Ranjan"
                        width={400}
                        height={500}
                        className="rounded-xl shadow-2xl object-cover aspect-[4/5] mb-6"
                        data-ai-hint="professional tech portrait"
                    />
                    <h3 className="text-2xl font-headline text-foreground mb-2">Priyanshu Ranjan</h3>
                    <p className="text-muted-foreground text-center mb-4 font-sans">Forward-Thinking Design Expert</p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="mb-4 w-full max-w-xs font-sans border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                    >
                        <a href="/path-to-resume.pdf" download>
                            Download Resume <Download className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                    <div className="flex space-x-4">
                        {socialLinksFooter.map((link) => (
                            <Button
                                key={link.name}
                                variant="outline"
                                size="icon"
                                asChild
                                className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
                            >
                                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                                    <link.icon className="h-5 w-5" />
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-sans prose-li:font-sans prose-p:text-muted-foreground prose-headings:text-foreground">
                    <p className="text-xl leading-relaxed font-sans">
                        As a dedicated and forward-thinking design expert, I am passionate about crafting digital
                        experiences that are not only visually captivating but also deeply intuitive and user-centric.
                        My journey in design has been fueled by a relentless curiosity and a desire to solve complex
                        problems through creative and empathetic solutions.
                    </p>
                    <h3 className="font-headline text-2xl mt-8 mb-4">My Design Philosophy</h3>
                    <p>
                        I believe that great design is born at the intersection of empathy, strategy, and artistry. It's
                        about understanding the user's needs, aligning with business goals, and then weaving those
                        elements into a seamless and delightful experience. My process is iterative and collaborative,
                        always striving for clarity and impact. I advocate for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 my-4">
                        <li>
                            <strong>User-Centricity:</strong> Placing the user at the heart of every design decision.
                        </li>
                        <li>
                            <strong>Simplicity & Clarity:</strong> Distilling complexity into intuitive and accessible
                            solutions.
                        </li>
                        <li>
                            <strong>Meaningful Innovation:</strong> Pushing boundaries thoughtfully to create novel and
                            valuable experiences.
                        </li>
                        <li>
                            <strong>Data-Informed Creativity:</strong> Balancing artistic vision with empirical evidence
                            to achieve optimal outcomes.
                        </li>
                        <li>
                            <strong>Ethical Design:</strong> Creating responsible and inclusive products that respect
                            user autonomy and privacy.
                        </li>
                    </ul>

                    <h3 className="font-headline text-2xl mt-8 mb-4">Beyond the Pixels</h3>
                    <p>
                        When I'm not immersed in design projects, I enjoy exploring new technologies, contributing to
                        open-source projects, and continuously learning to stay at the forefront of the ever-evolving
                        digital landscape. I'm always eager to connect with fellow creatives and innovators, so feel
                        free to reach out!
                    </p>
                    <p>
                        My goal is to leverage my skills and passion to contribute to projects that make a positive
                        impact, drive innovation, and ultimately, make technology more human.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="font-sans">
                            <Link href="/contact">Let's Collaborate</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
