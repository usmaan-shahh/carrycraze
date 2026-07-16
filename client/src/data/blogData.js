// ============================================================================
// blogData.js
// ----------------------------------------------------------------------------
// This file holds all of the blog posts for the CarryCraze website.
//
// HOW TO ADD A NEW POST (no coding experience needed):
// 1. Copy one of the objects inside the "blogPosts" array below
//    (everything between a pair of { curly braces }, including the comma).
// 2. Paste it as a new item in the array.
// 3. Change the values (the text after each ":") to your new post's info.
// 4. IMPORTANT: give the post a NEW unique "id" number and a NEW unique
//    "slug" (the slug is the part that appears in the web address /blog/your-slug).
// 5. Save the file. The new post will automatically appear on the blog.
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
  {
    id: 2,
    slug: "best-carry-on-luggage-buying-guide",
    title: "Best Carry-On Luggage: The Complete 2025 Buying Guide",
    metaTitle: "Best Carry-On Luggage (2025 Buying Guide) | CarryCraze",
    metaDescription:
      "Find the best carry-on luggage for your travels. Compare sizes, materials, wheels and TSA locks in this complete CarryCraze buying guide.",
    excerpt:
      "Choosing the best carry-on luggage doesn't have to be confusing. This complete guide covers size rules, materials, wheels and packing tips.",
    coverImage:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
    author: "CarryCraze Team",
    date: "2025-07-16",
    tags: ["Travel", "Buying Guide", "Carry-On Luggage", "Packing Tips", "Luggage"],
    content: `
<p>Choosing the <strong>best carry-on luggage</strong> is one of the smartest travel decisions you can make. A great cabin bag saves you checked-baggage fees, keeps your belongings close, and gets you out of the airport faster. At <strong>CarryCraze</strong> we test and sell travel gear every day, so we've put together this complete guide to help you pick a bag that lasts for years.</p>

<h2>Why carry-on luggage matters</h2>
<p>When you travel with only a cabin bag, you skip the check-in queue, avoid the baggage carousel, and remove the risk of a lost suitcase. The <strong>best carry-on luggage</strong> is light enough to lift into an overhead bin, tough enough to survive constant handling, and organised enough to make packing simple. Getting this one purchase right changes every trip that follows.</p>

<h2>1. Understand carry-on size rules</h2>
<p>The most common mistake travellers make is buying a bag that is slightly too big. Most airlines allow a cabin bag of roughly <strong>55 x 40 x 20 cm</strong> (about 22 x 14 x 9 inches), but budget carriers can be stricter. Before you buy, always check the size chart for the airlines you fly most. If you often fly low-cost airlines, choose a bag on the smaller end so it fits every time. You can review the official rules directly on the <strong><a href="https://www.iata.org/en/programs/passenger/cabin-ok/" target="_blank" rel="noopener noreferrer" style="text-decoration:none">International Air Transport Association</a></strong> website, which sets the cabin baggage guidance many airlines follow.</p>

<h2>2. Hard shell vs soft shell luggage</h2>
<p>This is the biggest decision you'll make, and the right answer depends on how you travel.</p>
<p><strong>Hard shell luggage</strong> uses materials like polycarbonate or ABS. It protects fragile items, resists water, and wipes clean easily. It's ideal if you pack electronics, cameras, or gifts.</p>
<p><strong>Soft shell luggage</strong> is made from nylon or polyester. It's usually lighter, more flexible, and comes with handy outer pockets for boarding passes and chargers. It also squeezes into tight overhead bins a little more forgivingly.</p>
<p>If you want the short version: choose <strong>hard shell</strong> for protection and a premium look, and <strong>soft shell</strong> for lightness and quick-access storage.</p>

<h2>3. Pay close attention to weight</h2>
<p>Every gram counts when you're near an airline's cabin weight limit. A heavy empty bag eats into your packing allowance before you've added a single item. Look for a carry-on that weighs <strong>under 3 kg</strong> when empty. A lightweight cabin bag means more room for the things you actually want to bring.</p>

<h2>4. Choose the right wheels</h2>
<p>Wheels make or break the airport experience.</p>
<ul>
<li><strong>Four-wheel spinners</strong> roll in any direction and glide beside you through smooth terminals.</li>
<li><strong>Two-wheel designs</strong> are sturdier on cobblestones, kerbs, and uneven pavements.</li>
</ul>
<p>For most modern travellers, a smooth <strong>four-wheel spinner</strong> is the easiest to manoeuvre, especially in crowded airports.</p>

<h2>5. Don't ignore the small details</h2>
<p>The features that seem minor are often the ones you'll appreciate most on the road:</p>
<ul>
<li>A built-in <strong>TSA-approved lock</strong> for security</li>
<li>Smooth, durable zippers that won't snag</li>
<li>A comfortable telescopic handle with multiple height settings</li>
<li>An interior with compression straps and a divider</li>
<li>A scratch-resistant or textured finish</li>
</ul>

<h2>6. How to pack a carry-on the smart way</h2>
<p>Even the <strong>best carry-on luggage</strong> works better with good packing habits. Roll your clothes instead of folding them to save space and reduce creases. Use packing cubes to keep outfits organised, place heavier items near the wheels, and keep liquids in a clear bag near the top for security checks. For more detail on liquid limits and screening, the <strong><a href="https://www.tsa.gov/travel/security-screening/whatcanibring" target="_blank" rel="noopener noreferrer" style="text-decoration:none">TSA "What Can I Bring?" guide</a></strong> is the most reliable reference.</p>

<h2>7. Match the bag to the way you travel</h2>
<p>A weekend city-breaker, a two-week holidaymaker, and a frequent business flyer all need different things. If you mostly take short trips, a compact cabin bag is perfect. If you stretch a carry-on across longer holidays, look for smart compartments and expandable sections. Business travellers should prioritise a dedicated laptop sleeve and a professional finish. To see options for each style, browse the full <strong><a href="/products" style="text-decoration:none">CarryCraze luggage collection</a></strong> and filter by trip length.</p>

<h2>Frequently asked questions</h2>
<p><strong>What is the best carry-on luggage size?</strong> Aim for around 55 x 40 x 20 cm, which fits most major airlines. Always confirm with your specific carrier before flying.</p>
<p><strong>Is hard shell or soft shell better?</strong> Hard shell offers better protection and water resistance, while soft shell is lighter and has more external pockets. Both can be excellent depending on your priorities.</p>
<p><strong>How much should a carry-on weigh?</strong> Under 3 kg empty is ideal so you keep as much of your weight allowance as possible for packing.</p>
<p><strong>Do I need a TSA lock?</strong> If you travel to or through the United States, a TSA-approved lock lets security inspect your bag without cutting the lock off.</p>

<h2>Final thoughts</h2>
<p>The <strong>best carry-on luggage</strong> is the bag that fits your airline, matches your travel style, and lasts for years without letting you down. Focus on size, weight, material, and wheels first, then let the small details guide your final choice. When you're ready to travel smarter, explore our latest arrivals and read our related guide on <strong><a href="/blog/choosing-the-perfect-travel-luggage" style="text-decoration:none">how to choose the perfect travel luggage</a></strong> to complete your research.</p>
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
