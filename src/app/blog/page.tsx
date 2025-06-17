import { BlogPostPreview } from '@/components/blog-post-preview';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { blogPosts } from '@/lib/data';

export const metadata = {
  title: 'Blog | Priyanshu Ranjan',
  description: 'Insights, articles, and thoughts on design, technology, and creativity by Priyanshu Ranjan.',
};

export default function BlogPage() {
  return (
    <SectionContainer id="blog-listing" animated bgColorClass="bg-section-blog" fullWidthBg>
      <SectionHeader title="Creative & Stylish Content" subtitle="My Blog" />
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-sans">
        Welcome to my blog where I share insights on design, technology, creative processes, and more. Explore articles that aim to inspire and inform.
      </p>
      {blogPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostPreview key={post.slug} post={post} animationDelay={index * 100} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg font-sans">No blog posts yet. Check back soon!</p>
      )}
    </SectionContainer>
  );
}
