import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { getPostBySlug } from "../data/blogData";

// ============================================================================
// BlogPost.jsx - Single blog post page (/blog/:slug)
// ----------------------------------------------------------------------------
// Reads the "slug" from the web address, looks up the matching post in
// src/data/blogData.js, and displays it. If no post matches the slug it shows
// a simple "Post not found" message. All content is managed from blogData.js.
// ============================================================================

const BlogPost = () => {
  // Grab the slug from the URL, e.g. /blog/my-post -> slug = "my-post"
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // Turns "2025-05-01" into a friendly "May 1, 2025".
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // ---- Case 1: no post found for this slug ----
  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Helmet>
            <title>Post Not Found | CarryCraze</title>
            <meta name="description" content="This blog post could not be found." />
          </Helmet>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Post not found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the post you were looking for.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            <span className="mr-1">&larr;</span> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // ---- Case 2: post found - show the full article ----
  return (
    <div className="pt-24 pb-16">
      {/* SEO tags pulled from the post's metaTitle / metaDescription */}
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>

      <article className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back to Blog link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mb-6"
          >
            <span className="mr-1">&larr;</span> Back to Blog
          </Link>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          {/* Date and author */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-2">
            <span>{formatDate(post.date)}</span>
            <span>&middot;</span>
            <span>By {post.author}</span>
          </div>

          {/* Cover image */}
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-xl shadow-md mb-8 object-cover"
            />
          )}

          {/*
            Render the post's HTML content.
            The content comes from blogData.js (written by the site owner),
            so it is trusted HTML that we inject with dangerouslySetInnerHTML.
          */}
          <div
            className="blog-content text-gray-700 text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
