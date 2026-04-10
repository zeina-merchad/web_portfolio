import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-display text-2xl text-ink-900">Post not found</p>
        <Link to="/" className="font-mono text-sm text-accent hover:underline">
          ← Back home
        </Link>
      </div>
    );
  }

  const paragraphs = post.content?.trim().split("\n\n").filter(Boolean) ?? [];

  const renderParagraph = (text: string, i: number) => {
    // Handle italic *text*
    const parts = text
      .split(/(\*[^*]+\*)/g)
      .map((part, j) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={j}>{part.slice(1, -1)}</em>
        ) : (
          part
        ),
      );
    return (
      <p
        key={i}
        className="text-ink-700 leading-relaxed text-base md:text-lg mb-6"
      >
        {parts}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-ink-50">
      {/* Header */}
      <div className="border-b border-ink-200 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="font-mono text-xs text-ink-500 hover:text-accent transition-colors flex items-center gap-2"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-16">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-ink-400">{post.date}</span>
          <span className="text-ink-300">·</span>
          <span className="font-mono text-xs text-ink-400">
            {post.readTime} min read
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight mb-8">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-ink-200">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-ink-500 bg-ink-100 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div>{paragraphs.map((p, i) => renderParagraph(p.trim(), i))}</div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-ink-200">
          <Link
            to="/"
            className="font-mono text-sm text-accent hover:text-accent-dark transition-colors flex items-center gap-2"
          >
            ← Back to portfolio
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
