
// Blog feature removed or data source unavailable.
// import { blogPosts } from '@/lib/data';
// import type { BlogPost, BlogPostContentItem } from '@/lib/types';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';
// import Link from 'next/link';
// import { SectionContainer } from '@/components/ui/section-container';
// import { Metadata } from 'next';
// import { format } from 'date-fns';

// interface BlogPostPageProps {
//   params: {
//     slug: string;
//   };
// }

// export async function generateStaticParams() {
//   // Since blogPosts is removed, return empty array to avoid build errors.
//   return []; 
// }

// export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
//   // const post = blogPosts.find((p) => p.slug === params.slug); // blogPosts is removed
//   // if (!post) {
//   return {
//     title: 'Post Not Found',
//   };
//   // }
//   // return {
//   //   title: `${post.title} | Priyanshu Ranjan's Blog`,
//   //   description: post.excerpt,
//   // };
// }


export default function BlogPostPage({ params }: { params: { slug: string }}) {
  // const post = blogPosts.find((p) => p.slug === params.slug); // blogPosts is removed

  // if (!post) {
  //   notFound();
  // }

  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-headline mb-4">Blog Post</h1>
      <p className="text-lg text-muted-foreground font-sans">
        This blog post is currently unavailable or the blog feature has been removed. (Slug: {params.slug})
      </p>
      {/* <Button variant="outline" asChild className="mt-8 group font-sans border-primary/50 text-primary hover:bg-primary/10">
        <Link href="/#top"> Back to Home </Link>
      </Button> */}
    </div>
  );
}
