import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { getSortedPosts } from "../data/blogData";

// ============================================================================
// Blog.jsx - Blog listing page
// ----------------------------------------------------------------------------
// Shows every blog post as a card (cover image, title, date, excerpt and a
// "Read More" link). Posts are shown newest first. All post data comes from
// src/data/blogData.js, so non-developers never need to touch this file.
// ============================================================================

const Blog = () => {
  // Get all posts sorted with the newest first.
  const posts = getSortedPosts();

  // Turns "2025-05-01" into a friendly "May 1, 2025".
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="pt-24 pb-16">
      {/* SEO tags for the blog listing page */}
      <Helmet>
        <title>Blog | CarryCraze</title>
        <meta
          name="description"
          content="Travel tips, buying guides and stories from the CarryCraze team."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4">
        {/* Page heading - matches the style used on the rest of the site */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The <span className="text-blue-600">CarryCraze</span> Blog
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Travel tips, buying guides and stories to help you carry in style.
          </p>
        </motion.div>

        {/* If there are no posts yet, show a friendly message */}
        {posts.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No blog posts yet. Check back soon!
          </p>
        ) : (
          // Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                {/* Cover image */}
                <Link to={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </Link>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

                  {/* Read More link styled like the site's buttons */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto"
                  >
                    Read More
                    <span className="ml-1">&rarr;</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
