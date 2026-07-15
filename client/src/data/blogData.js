// ============================================================================
// blogData.js
// ----------------------------------------------------------------------------
// This file holds all of the blog posts for the CarryCraze website.
//
// HOW TO ADD A NEW POST (no coding experience needed):
//   1. Copy one of the objects inside the "blogPosts" array below
//      (everything between a pair of { curly braces }, including the comma).
//   2. Paste it as a new item in the array.
//   3. Change the values (the text after each ":") to your new post's info.
//   4. IMPORTANT: give the post a NEW unique "id" number and a NEW unique
//      "slug" (the slug is the part that appears in the web address /blog/your-slug).
//   5. Save the file. The new post will automatically appear on the blog.
//
// FIELD GUIDE:
//   id              -> unique number for the post (e.g. 1, 2, 3 ...)
//   slug            -> url-friendly name, lowercase-with-dashes, must be unique
//   title           -> the headline shown on the page
//   metaTitle       -> the title used by Google / browser tab (SEO)
//   metaDescription -> short summary used by Google search results (SEO)
//   excerpt         -> short teaser shown on the blog listing cards
//   coverImage      -> web address of the main image (or a /images/... path)
//   author          -> name of the writer
//   date            -> publish date in "YYYY-MM-DD" format (used for sorting)
//   tags            -> list of keywords, e.g. ["Travel", "Tips"]
//   content         -> the full article as an HTML string (use <p>, <h2>, etc.)
// ============================================================================

const blogPosts = [
  {
    id: 1,
    slug: "choosing-the-perfect-travel-luggage",
    title: "How to Choose the Perfect Travel Luggage",
    metaTitle: "How to Choose the Perfect Travel Luggage | CarryCraze",
    metaDescription:
      "A simple guide to picking the right luggage for your next trip - size, material, wheels and more from the CarryCraze team.",
    excerpt:
      "Not sure which suitcase to buy? Here is a quick, no-nonsense guide to choosing luggage that lasts and travels well.",
    coverImage:
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1200&auto=format&fit=crop",
    author: "CarryCraze Team",
    date: "2025-05-01",
    tags: ["Travel", "Buying Guide", "Luggage"],
    // The article body is plain HTML. You can use headings (<h2>),
    // paragraphs (<p>), bold (<strong>), lists (<ul><li>), etc.
    content: `
      <p>Picking the right luggage can make or break a trip. At <strong>CarryCraze</strong> we believe good luggage should be durable, easy to carry, and stylish enough to travel anywhere with you.</p>
      <h2>1. Start with size</h2>
      <p>Think about how long your typical trips are. A cabin-sized bag is perfect for weekend getaways, while a medium or large check-in suitcase suits longer holidays.</p>
      <h2>2. Consider the material</h2>
      <p>Hard-shell cases protect fragile items and resist water, while soft-shell bags are lighter and often have handy outer pockets.</p>
      <h2>3. Don't forget the wheels</h2>
      <p>Four-wheel "spinner" luggage glides easily through airports, while two-wheel designs are sturdier on uneven ground.</p>
      <h2>4. Look at the little things</h2>
      <ul>
        <li>Smooth, sturdy zippers</li>
        <li>Comfortable, telescopic handles</li>
        <li>A built-in TSA lock for security</li>
      </ul>
      <p>Ready to find your perfect travel companion? Browse the CarryCraze collection and travel in style.</p>
    `,
  },
];

// Sorting helper: this returns the posts with the NEWEST first,
// based on the "date" field. The listing page uses this automatically.
export const getSortedPosts = () =>
  [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

// Finds a single post by its slug (used on the /blog/:slug page).
export const getPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);

export default blogPosts;
