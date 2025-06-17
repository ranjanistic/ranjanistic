
import { blogPosts } from '@/lib/data';
import type { BlogPost, BlogPostContentItem } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';
import Link from 'next/link';
import { SectionContainer } from '@/components/ui/section-container';
import { Metadata } from 'next';
import { format } from 'date-fns';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | Priyanshu Ranjan's Blog`,
    description: post.excerpt,
  };
}

function renderContentItem(item: BlogPostContentItem, index: number) {
  switch (item.type) {
    case 'heading':
      return <h2 key={index} className="text-2xl md:text-3xl font-headline font-semibold mt-10 mb-4 text-foreground">{item.content}</h2>;
    case 'paragraph':
      return <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed font-sans">{item.content}</p>; // Changed to font-sans
    case 'image':
      return (
        <figure key={index} className="my-8">
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={450}
            className="rounded-lg shadow-md object-cover w-full mx-auto"
            data-ai-hint={item.hint}
          />
          <figcaption className="text-sm text-center text-muted-foreground mt-2 font-sans">{item.alt}</figcaption> {/* Changed to font-sans */}
        </figure>
      );
    case 'list':
      return (
        <ul key={index} className="list-disc list-inside space-y-2 my-6 text-lg text-muted-foreground font-sans pl-4"> {/* Changed to font-sans */}
          {item.items.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <SectionContainer animated bgColorClass="bg-section-blog" fullWidthBg>
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" asChild className="mb-8 group font-sans border-primary/50 text-primary hover:bg-primary/10">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>
        </Button>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-sans prose-li:font-sans prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
          <header className="mb-10 border-b border-border/50 pb-8">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4 font-sans">
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-accent/20 border-accent/30 text-accent-foreground/70">
                      {tag}
                    </Badge>
                  ))}
                </span>
              </div>
            </div>
            <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                width={1200}
                height={675}
                className="rounded-xl shadow-xl object-cover w-full aspect-video my-8"
                data-ai-hint={post.coverImageHint}
                priority
              />
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">{post.excerpt}</p>
          </header>
          
          <div>
            {post.content.map(renderContentItem)}
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
