"use client";
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface BlogPostPreviewProps {
  post: BlogPost;
  animationDelay?: number;
}

export function BlogPostPreview({ post, animationDelay = 0 }: BlogPostPreviewProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "h-full scroll-reveal-hidden",
        isVisible && "scroll-reveal-visible"
      )}
      style={isVisible ? { transitionDelay: `${animationDelay}ms` } : {}}
    >
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-border">
        <CardHeader className="p-0 relative">
          <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
            <Image
              src={post.coverImage}
              alt={post.title}
              width={600}
              height={338} // 16:9 aspect ratio
              className="object-cover w-full aspect-video"
              data-ai-hint={post.coverImageHint}
            />
          </Link>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <div className="flex items-center text-xs text-muted-foreground mb-2">
            <CalendarDays className="h-3 w-3 mr-1.5" />
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </div>
          <CardTitle className="text-xl font-headline mb-2 text-foreground leading-tight">
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-muted-foreground mb-3 text-sm min-h-[3em] line-clamp-3 font-serif">
            {post.excerpt}
          </CardDescription>
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0,3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs bg-accent/20 border-accent/30 text-accent-foreground/70">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-muted/20">
          <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
            <Link href={`/blog/${post.slug}`}>
              Read More <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
