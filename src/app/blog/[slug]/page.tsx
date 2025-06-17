
import { blogPosts } from '@/lib/data';
import type { BlogPost, BlogPostContentItem } from '@/lib/types'; // Changed BlogPostType to BlogPost
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
      return <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed font-serif">{item.content}</p>;
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
          <figcaption className="text-sm text-center text-muted-foreground mt-2">{item.alt}</figcaption>
        </figure>
      );
    case 'list':
      return (
        <ul key={index} className="list-disc list-inside space-y-2 my-6 text-lg text-muted-foreground font-serif pl-4">
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
    <SectionContainer animated>
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" asChild className="mb-8 group">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>
        </Button>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-headings:text-foreground prose-p:font-serif prose-p:text-muted-foreground prose-li:font-serif prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80">
          <header className="mb-10 border-b pb-8">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
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
            <p className="text-xl text-muted-foreground font-serif leading-relaxed">{post.excerpt}</p>
          </header>
          
          <div>
            {post.content.map(renderContentItem)}
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
